import {
  createCPanelTransporter,
  createFallbackTransporter,
} from "./emailService";
import { formatFormData } from "./formatter";

export const sendAdminNotification = async (formData, submissionData) => {
  let transporter = createCPanelTransporter();

  const mailOptions = {
    from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `New ${formData.formCategory} Form Submission - ${formData.formTitle}`,
    html: formatFormData(submissionData, formData.formTitle),
    // Optional: Add text version for better compatibility
    text: `
      New Form Submission: ${formData.formTitle}
      Category: ${formData.formCategory}
      
      ${Object.entries(submissionData)
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n")}
      
      Submitted at: ${new Date().toLocaleString()}
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Admin notification sent via cPanel:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("❌ Primary cPanel config failed, trying fallback...");
    console.error("Error:", error);

    // Try fallback configuration
    try {
      transporter = createFallbackTransporter();
      const info = await transporter.sendMail(mailOptions);
      console.log(
        "✅ Admin notification sent via fallback config:",
        info.messageId
      );
      return { success: true, messageId: info.messageId, usedFallback: true };
    } catch (fallbackError) {
      console.error("❌ Both email configurations failed");
      console.error("Fallback error:", fallbackError.message);
      throw new Error(
        `Email sending failed: ${error.message}. Fallback also failed: ${fallbackError.message}`
      );
    }
  }
};
