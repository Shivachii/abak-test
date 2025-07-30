import { createCPanelTransporter } from "./transporterCreator";

export const sendUserConfirmation = async (formData, submissionData) => {
  // Check if form has email field
  const userEmail =
    submissionData.email ||
    submissionData.userEmail ||
    submissionData.contactEmail;

  if (!userEmail) {
    console.log("No user email found, skipping confirmation email");
    return { success: true, message: "No user email provided" };
  }

  const transporter = createCPanelTransporter();

  const confirmationHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #007bff; color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0;">${process.env.FROM_NAME}</h1>
      </div>
      
      <div style="padding: 30px; background-color: #f8f9fa;">
        <h2 style="color: #333;">Thank you for your submission!</h2>
        
        <p style="color: #666; line-height: 1.6;">
          We have received your <strong>${
            formData.formTitle
          }</strong> submission and will review it shortly.
        </p>
        
        <div style="background-color: white; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Your Submission Summary:</h3>
          ${Object.entries(submissionData)
            .filter(
              ([key]) =>
                key !== "email" && key !== "userEmail" && key !== "contactEmail"
            )
            .map(
              ([key, value]) => `
              <p style="margin: 10px 0; border-bottom: 1px solid #eee; padding-bottom: 10px;">
                <strong>${key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}:</strong><br>
                <span style="color: #666;">${
                  Array.isArray(value) ? value.join(", ") : value
                }</span>
              </p>
            `
            )
            .join("")}
        </div>
        
        <div style="background-color: #d4edda; border: 1px solid #c3e6cb; color: #155724; padding: 15px; border-radius: 5px;">
          <p style="margin: 0;">
            <strong>What's next?</strong><br>
            We'll review your submission and get back to you within 2-3 business days.
          </p>
        </div>
      </div>
      
      <div style="background-color: #343a40; color: #ffffff; padding: 20px; text-align: center;">
        <p style="margin: 0; font-size: 14px;">
          This is an automated message. Please do not reply to this email.
        </p>
      </div>
    </div>
  `;

  const mailOptions = {
    from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
    to: userEmail,
    subject: `Confirmation: Your ${formData.formTitle} Submission`,
    html: confirmationHtml,
    text: `
      Thank you for your ${formData.formTitle} submission!
      
      We have received your form and will review it shortly.
      We'll get back to you within 2-3 business days.
      
      Submission received at: ${new Date().toLocaleString()}
      
      This is an automated message. Please do not reply to this email.
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("User confirmation sent:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending user confirmation:", error);
    throw error;
  }
};
