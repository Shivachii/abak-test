"use client";

import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Invalid email address"),

  message: z
    .string()
    .min(10, "Please provide at least 10 characters")
    .optional(),
});

export default function HawzaEnrollmentForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log("Enrollment Data:", data);
    toast.success("Thank you for enrolling. We will contact you shortly.");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6  p-6  w-full"
      >
        {/* Full Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Fatima Zahra" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Additional Information */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Why are you enrolling? (Optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us briefly about your interest in Hawza studies."
                  className="resize-none min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit / Reset */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 pt-2">
          <Button
            type="submit"
            className="w-full sm:w-1/2 bg-primary text-white hover:bg-primary/90 transition-colors"
          >
            Submit Enrollment
          </Button>
          <Button
            type="button"
            onClick={() => form.reset()}
            className="w-full sm:w-1/2 bg-primary text-white hover:bg-primary/90 transition-colors"
          >
            Reset
          </Button>
        </div>
      </form>
    </Form>
  );
}
