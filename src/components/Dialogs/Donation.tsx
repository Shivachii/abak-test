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
import { DonationForm } from "@/components/Forms/DonationForm";

export default function DonationDialog() {
  return (
    <>
      {/* Dialog */}
      <Dialog>
        <DialogTrigger className="bg-primary text-gray-700 px-6 py-3 rounded-md shadow-md hover:bg-primary/90 transition">
          Make a Donation
        </DialogTrigger>
        <DialogContent className="w-[90vw] max-w-xl mx-auto p-6 rounded-2xl max-h-[90vh] overflow-y-auto shadow-lg border">
          <DialogHeader>
            <DialogTitle>Make a Donation</DialogTitle>
            <DialogDescription>
              Support our cause by donating below.
            </DialogDescription>
          </DialogHeader>

          {/* Your form */}
          <DonationForm />

          {/* Optional close button inside dialog */}
          <DialogClose />
        </DialogContent>
      </Dialog>
    </>
  );
}
