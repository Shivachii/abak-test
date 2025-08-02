import {
  createCPanelTransporter,
  createFallbackTransporter,
} from "./transporterCreator";
import { formatFormData } from "./formatter";

const recipientMap = {
  hawza: process.env.HAWZA_EMAIL,
  aesp: process.env.AESP_EMAIL,
  contact: process.env.CONTACT_EMAIL,
  qardh: process.env.QARDH_EMAIL,
  volunteer: process.env.VOLUNTEER_EMAIL,
};

export const sendAdminNotification = async (formData, submissionData) => {
  const formCategory = formData.formCategory?.toLowerCase();
  const recipientEmail = recipientMap[formCategory] || process.env.ADMIN_EMAIL;
  let transporter = createCPanelTransporter();

  const attachments = [];
  for (const [key, value] of Object.entries(submissionData)) {
    if (
      value instanceof File ||
      value?.type?.startsWith("application/") ||
      value?.type?.startsWith("image/")
    ) {
      const file = value;
      const buffer = Buffer.from(await file.arrayBuffer());

      attachments.push({
        filename: file.name || `${key}.file`,
        content: buffer,
        contentType: file.type,
      });

      delete submissionData[key];
    }
  }

  const mailOptions = {
    from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
    to: recipientEmail,
    subject: `New ${formData.formCategory} Form Submission - ${formData.formTitle}`,
    html: formatFormData(submissionData, formData.formTitle),
    text: Object.entries(submissionData)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n"),
    attachments,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Admin notification sent via cPanel:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("❌ Primary cPanel config failed, trying fallback...");
    console.error("Error:", error);

    try {
      transporter = createFallbackTransporter();
      const info = await transporter.sendMail(mailOptions);
      console.log("✅ Fallback notification sent:", info.messageId);
      return { success: true, messageId: info.messageId, usedFallback: true };
    } catch (fallbackError) {
      console.error("❌ Both email configurations failed");
      throw new Error(
        `Email sending failed: ${error.message}. Fallback also failed: ${fallbackError.message}`
      );
    }
  }
};
