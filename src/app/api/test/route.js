import { testEmailConfig } from "../../../lib/email/testEmail";
import { sendAdminNotification } from "../../../lib/email/sendAdmin";

export async function GET() {
  try {
    const configTest = await testEmailConfig();

    if (!configTest.success) {
      return new Response(
        JSON.stringify({
          message: "Email configuration failed",
          error: configTest.error,
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const testData = {
      formId: "test-form",
      formCategory: "Test",
      formTitle: "Email Test Form",
    };

    const testSubmissionData = {
      name: "Test User",
      email: "test@example.com",
      message:
        "This is a test email to verify the email configuration is working properly.",
    };

    const result = await sendAdminNotification(testData, testSubmissionData);

    return new Response(
      JSON.stringify({
        message: "Test email sent successfully",
        result,
        timestamp: new Date().toISOString(),
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Test email error:", error);
    return new Response(
      JSON.stringify({
        message: "Test email failed",
        error: error.message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
