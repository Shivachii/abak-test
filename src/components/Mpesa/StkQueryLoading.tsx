import { Loader2, Smartphone } from "lucide-react";

export default function STKPushQueryLoading({ number }: { number: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-yellow-200 text-gray-900 rounded-2xl shadow-md space-y-4">
      <Loader2 className="w-12 h-12 animate-spin text-yellow-600" />
      <h1 className="text-xl font-semibold animate-pulse">
        Processing Payment...
      </h1>
      <div className="flex items-center gap-2">
        <Smartphone className="w-5 h-5 text-yellow-700" />
        <p className="text-sm">
          STK push sent to <strong>{number}</strong>
        </p>
      </div>
      <p className="text-sm text-yellow-800">
        Please check your phone and enter your M-PESA PIN to complete the
        payment.
      </p>
    </div>
  );
}
