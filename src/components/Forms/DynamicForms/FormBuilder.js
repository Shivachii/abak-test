import { DialogForm } from "./layouts/DialogForm";
import MultiStepForm from "./layouts/MultistepForm";
import { SinglePageForm } from "./layouts/SinglePageForm";

export default function DynamicForm({ form }) {
  if (!form) return <p>Form not found</p>;

  switch (form.layout) {
    case "dialog":
      return <DialogForm formConfig={form} />;
    case "multiStep":
      return <MultiStepForm formConfig={form} />;
    case "single":
    default:
      return <SinglePageForm formConfig={form} />;
  }
}
