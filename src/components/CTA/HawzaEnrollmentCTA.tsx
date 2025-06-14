import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import HawzaEnrollmentForm from "../Forms/HawzaEnrollmentForm";

export default function HawzaEnrollmentCTA() {
  return (
    <div className="flex justify-center">
      <Dialog>
        <DialogTrigger className="bg-primary text-white px-6 py-3 text-lg font-semibold shadow-md hover:bg-primary/90 transition-all rounded-lg">
          Enroll in Hawza
        </DialogTrigger>

        <DialogContent className="w-[90vw] max-w-xl mx-auto p-6 rounded-2xl max-h-[90vh] overflow-y-auto shadow-lg border">
          <DialogHeader>
            <DialogTitle className="text-xl md:text-2xl font-bold text-center">
              Hawza Course Enrollment
            </DialogTitle>
          </DialogHeader>

          <div className="mt-4">
            <HawzaEnrollmentForm />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
