"use client";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export function SinglePageForm({ formConfig }) {
  const [submitStatus, setSubmitStatus] = useState(null);
  const schema = formSchemaFromSanity(formConfig.fields);
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {},
    mode: "onChange",
  });

  const onSubmit = async (values) => {
    setSubmitStatus({ type: "loading", message: "Submitting form..." });

    try {
      const response = await fetch("/api/form-submission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formId: formConfig._id,
          formCategory: formConfig.category,
          formTitle: formConfig.title,
          data: values,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            formConfig.successMessage ||
            "Thank you! Your form has been submitted successfully. You should receive a confirmation email shortly.",
        });
        form.reset();
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus({
        type: "error",
        message:
          "There was an error submitting your form. Please try again or contact us directly.",
      });
    }
  };

  // Show success message
  if (submitStatus?.type === "success") {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <div className="text-green-600 text-4xl mb-4">✓</div>
          <h3 className="text-xl font-semibold text-green-800 mb-2">
            Form Submitted Successfully!
          </h3>
          <p className="text-green-700">{submitStatus.message}</p>
          <button
            onClick={() => setSubmitStatus(null)}
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Submit Another Form
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Form Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{formConfig.title}</h2>
        {formConfig.tagline && (
          <p className="text-gray-600 mb-2">{formConfig.tagline}</p>
        )}
        {formConfig.description && (
          <p className="text-gray-700">{formConfig.description}</p>
        )}
      </div>

      {/* Error Message */}
      {submitStatus?.type === "error" && (
        <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-700">{submitStatus.message}</p>
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {formConfig.fields.map((field) => renderFormField(field, form))}

          <div className="pt-4 border-t flex justify-end">
            <Button
              type="submit"
              disabled={
                form.formState.isSubmitting || submitStatus?.type === "loading"
              }
            >
              {submitStatus?.type === "loading"
                ? "Sending..."
                : form.formState.isSubmitting
                ? "Submitting..."
                : "Submit"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
