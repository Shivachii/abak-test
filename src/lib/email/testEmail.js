export const testEmailConfig = async () => {
  console.log("Testing cPanel email configuration...");

  let transporter = createCPanelTransporter();

  try {
    // Test connection
    await transporter.verify();
    console.log("✅ cPanel email configuration is valid");
    return { success: true, message: "cPanel email configuration is valid" };
  } catch (error) {
    console.log("❌ Primary configuration failed, trying fallback...");
    console.error("Primary error:", error.message);

    // Try fallback configuration
    try {
      transporter = createFallbackTransporter();
      await transporter.verify();
      console.log("✅ Fallback email configuration works");
      return {
        success: true,
        message: "Fallback email configuration works",
        usedFallback: true,
      };
    } catch (fallbackError) {
      console.error("❌ Both configurations failed");
      console.error("Fallback error:", fallbackError.message);

      return {
        success: false,
        error: error.message,
        fallbackError: fallbackError.message,
        troubleshooting: {
          checkHost:
            "Verify SMTP_HOST is correct (usually mail.yourdomain.com)",
          checkPort: "Try ports 587, 465, or 25",
          checkCredentials: "Ensure email account exists in cPanel",
          checkPassword: "Verify email password is correct",
          contactHost: "Contact your hosting provider if issues persist",
        },
      };
    }
  }
};
