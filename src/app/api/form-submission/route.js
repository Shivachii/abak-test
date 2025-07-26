import { sendAdminNotification } from "../../../lib/email/sendAdmin";
import { sendUserConfirmation } from "../../../lib/email/confirmation";

export async function POST(request) {
  try {
    const body = await request.json();
    const { formId, formCategory, formTitle, data } = body;

    if (!formId || !formTitle || !data) {
      return new Response(
        JSON.stringify({
          message: "Missing required fields: formId, formTitle, or data",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const submissionData = {
      id: Date.now(),
      formId,
      formCategory,
      formTitle,
      data,
      submittedAt: new Date().toISOString(),
      ipAddress: request.headers.get("x-forwarded-for") || "Unknown",
      userAgent: request.headers.get("user-agent") || "Unknown",
    };

    console.log("Processing form submission:", submissionData);

    const emailResults = {};

    try {
      const adminResult = await sendAdminNotification(
        { formId, formCategory, formTitle },
        data
      );
      emailResults.adminNotification = adminResult;

      const userResult = await sendUserConfirmation(
        { formId, formCategory, formTitle },
        data
      );
      emailResults.userConfirmation = userResult;
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      emailResults.error = emailError.message;
    }

    return new Response(
      JSON.stringify({
        message: "Form submitted successfully",
        submissionId: submissionData.id,
        emailResults,
        timestamp: submissionData.submittedAt,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Form submission error:", error);
    return new Response(
      JSON.stringify({
        message: "Internal server error",
        error:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
