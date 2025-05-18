import { CheckCircle } from "lucide-react";

export default function PaymentSuccess() {
  return (
    <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-green-50 text-green-900 shadow-md space-y-4">
      <CheckCircle className="w-16 h-16 text-green-600" />
      <h1 className="text-2xl font-bold">Payment Successful</h1>
      <p className="text-lg">Thank you for your generous donation.</p>
      <p className="text-sm text-green-800">
        A confirmation message has been sent to your M-Pesa number.
      </p>
    </div>
  );
}
