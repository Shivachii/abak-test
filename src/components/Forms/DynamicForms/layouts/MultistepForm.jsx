"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { formSchemaFromSanity } from "../utils/formSchemaFromSanity";
import { renderFormField } from "../utils/renderFormField";
import { zodResolver } from "@hookform/resolvers/zod";

export function chunkFieldsIntoSteps(fields, chunkSize = 3) {
  const chunks = [];
  for (let i = 0; i < fields.length; i += chunkSize) {
    chunks.push(fields.slice(i, i + chunkSize));
  }
  return chunks;
}

export default function MultiStepForm({ formConfig }) {
  const steps = chunkFieldsIntoSteps(formConfig.fields, 3); // 3 fields per step
  const [currentStep, setCurrentStep] = useState(0);

  const schema = formSchemaFromSanity(formConfig.fields);
  const form = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  // Validate current step before moving forward
  const validateCurrentStep = async () => {
    const currentFields = steps[currentStep].map((field) => field.name);
    const isValid = await form.trigger(currentFields);
    return isValid;
  };

  const onNext = async () => {
    const isValid = await validateCurrentStep();
    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
  };

  const onPrev = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const [submitStatus, setSubmitStatus] = useState(null);
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
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">{formConfig.title}</h2>
          <span className="text-sm text-gray-500">
            Step {currentStep + 1} of {steps.length}
          </span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-secondary h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Error Message */}
      {submitStatus?.type === "error" && (
        <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-700">{submitStatus.message}</p>
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {steps[currentStep].map((field) => renderFormField(field, form))}

          <div className="flex justify-between pt-6 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={onPrev}
              disabled={currentStep === 0}
            >
              Back
            </Button>

            {currentStep === steps.length - 1 ? (
              <Button type="submit" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            ) : (
              <Button type="button" onClick={onNext}>
                Next
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
}
