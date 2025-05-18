"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog";
import PaymentForm from "../Mpesa/PaymentForm";

export default function DonationbyMpesaDialog() {
  return (
    <>
      {/* Dialog */}
      <Dialog>
        <DialogTrigger className="bg-secondary text-white px-6 py-3 rounded-md shadow-md hover:bg-secondary/80 transition">
          Make a Donation via M-pesa
        </DialogTrigger>
        <DialogContent className="w-[90vw] max-w-xl mx-auto p-6 rounded-2xl max-h-[90vh] overflow-y-auto shadow-lg border">
          <DialogHeader>
            <DialogTitle>Make a Donation</DialogTitle>
            <DialogDescription>
              Support our cause by donating below.
            </DialogDescription>
          </DialogHeader>

          {/* Your form */}
          <PaymentForm />

          {/* Optional close button inside dialog */}
          <DialogClose />
        </DialogContent>
      </Dialog>
    </>
  );
}
