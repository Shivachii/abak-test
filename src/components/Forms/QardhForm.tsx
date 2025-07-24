"use client";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { QardhSchema } from "../../lib/formSchemas/QardhForm";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
// import { PersonalSection } from "./sections/PersonalSection"
// import { AcademicSection } from "./sections/AcademicSection"
// import { FamilySection } from "./sections/FamilySection"
// import { FinancialSection } from "./sections/FinancialSection"
// import { SummarySection } from "./sections/SummarySection"
// import { DocumentsSection } from "./sections/DocumentsSection"

export function QardhForm() {
  const form = useForm<z.infer<typeof QardhSchema>>({
    resolver: zodResolver(QardhSchema),
    defaultValues: {
      fullName: "",
      dob: "",
      gender: "Male",
      placeOfBirth: "",
      nationality: "",
      religion: "",
      address: "",
      contact: "",
    },
  });

  function onSubmit(values: z.infer<typeof QardhSchema>) {
    console.log("Form submitted:", values);
    // TODO: submit to backend / API
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mt-4">Apply for Qardh Hassanah</Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Qardh Hassanah Application
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Fill out the form below to apply for interest-free financial
            support.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 py-4"
          >
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Ali Hussein" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Date of Birth */}
            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date of Birth</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Gender */}
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex gap-4"
                    >
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="Male" id="male" />
                        <FormLabel htmlFor="male" className="!mt-0">
                          Male
                        </FormLabel>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="Female" id="female" />
                        <FormLabel htmlFor="female" className="!mt-0">
                          Female
                        </FormLabel>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Contact */}
            <FormField
              control={form.control}
              name="contact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Number</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="e.g. +254712345678"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="pt-4 border-t flex justify-end">
              <Button type="submit">Submit Application</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
