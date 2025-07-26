"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogHeader,
} from "@/components/ui/dialog";
import { SinglePageForm } from "./SinglePageForm";

export function DialogForm({ formConfig }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open {formConfig.title}</Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{formConfig.title}</DialogTitle>
        </DialogHeader>
        <SinglePageForm formConfig={formConfig} />
      </DialogContent>
    </Dialog>
  );
}
