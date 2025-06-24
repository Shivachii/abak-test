import AESPForm from "@/components/Forms/AESPForm";

export default function AESPPage() {
  return (
    <div className="">
      <h1 className="text-center text-3xl md:text-5xl font-bold text-primary my-4">
        ABAK EDUACTION SUPPORT PROGRAM
      </h1>
      <p className="font-semibold text-gray-700 text-center mb-6">
        Please use the form below to apply
      </p>
      <AESPForm />
    </div>
  );
}
