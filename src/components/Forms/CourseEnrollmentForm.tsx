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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { toast } from "sonner";

interface CourseEnrollmentForm {
  Submitted: React.FormEventHandler;
}

const formSchema = z.object({
  name: z.string().min(2, "Please input your name"),
  email: z.string().email("Invalid email address"),
  course: z.string().min(2, "Please select a course"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function CourseEnrollmentForm({}: CourseEnrollmentForm) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", course: "", message: "" },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast.success(
      <div>
        Thank you for enrolling, we will contact you for the onboarding process
      </div>
    );
    toast.error(<div>An unexpected error occured please try again</div>);
    console.log(data);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 bg-white p-6 rounded-lg shadow-md w-full"
      >
        {/* Name Field */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Course Field */}
        <FormField
          control={form.control}
          name="course"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Course of Interest</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your course of interest" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="leadership-in-islam">
                    Leadership in Islam
                  </SelectItem>
                  <SelectItem value="community-services">
                    Community services
                  </SelectItem>
                  <SelectItem value=" hawza-essentials">
                    Hawza essentials
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Message Field */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Information (optional)</FormLabel>
              <FormControl>
                <Textarea className="resize-none min-h-[120px]" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 pt-2">
          <Button
            type="submit"
            className="w-full sm:w-1/2 bg-primary text-white hover:bg-primary/90 transition-colors"
          >
            Submit Application
          </Button>
          <Button
            type="button"
            onClick={() => form.reset()}
            className="w-full sm:w-1/2 bg-primary text-white hover:bg-primary/90  transition-colors"
          >
            Reset
          </Button>
        </div>
      </form>
    </Form>
  );
}
