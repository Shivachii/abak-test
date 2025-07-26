import { sanityFetch } from "../../../../sanity/lib/live";
import {
  formBySlugQuery,
  getFormBySlugQuery,
} from "../../../../sanity/lib/queries";
import { PDFViewer } from "@/components/PDFViewer/PDFViiewer";
import DynamicForm from "@/components/Forms/DynamicForms/FormBuilder";

export default async function AESPPage() {
  const { data: formData } = await sanityFetch({
    query: getFormBySlugQuery,
    params: { slug: "aesp-form" },
  });

  const { data: dynamicForm } = await sanityFetch({
    query: formBySlugQuery,
    params: { slug: "aesp-form" },
  });

  // if (!dynamicForm) return <p>Form not found</p>;

  return (
    <div className="">
      <h1 className="text-center text-3xl md:text-5xl font-bold text-primary my-4">
        ABAK EDUCATION SUPPORT PROGRAM
      </h1>
      <p className="font-semibold text-gray-700 text-center mb-6">
        Please use the form below to apply
      </p>
      {/* Dynamic Form Layout Renderer */}
      <DynamicForm form={dynamicForm} />
      <section className="text-center my-5">
        {/* PDF Download Viewer */}
        {formData?.file?.asset?.url && (
          <PDFViewer
            title={formData.title}
            fileUrl={formData.file.asset.url}
            mode="button"
          />
        )}
      </section>
    </div>
  );
}
