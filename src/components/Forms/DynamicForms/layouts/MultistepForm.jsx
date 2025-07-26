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

export function MultiStepForm({ formConfig }) {
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

  const onSubmit = async (values) => {
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

      if (response.ok) {
        console.log("Form submitted successfully");
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

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
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>

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
