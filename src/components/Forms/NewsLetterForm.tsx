// "use client";

// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { toast } from "sonner";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// const newsletterSchema = z.object({
//   email: z.string().email("Please enter a valid email"),
// });

// export function NewsletterForm() {
//   const form = useForm({
//     resolver: zodResolver(newsletterSchema),
//     defaultValues: { email: "" },
//   });

//   const onSubmit = async (data: z.infer<typeof newsletterSchema>) => {
//     // Simulate an API call
//     await new Promise((r) => setTimeout(r, 500));
//     toast.success("Subscribed successfully!");
//     form.reset();
//   };

//   return (
//     <form
//       onSubmit={form.handleSubmit(onSubmit)}
//       className="flex flex-col md:flex-row items-center gap-4 w-full max-w-md"
//     >
//       <Input
//         placeholder="Enter your email"
//         type="email"
//         {...form.register("email")}
//       />
//       <Button type="submit" className="w-full md:w-auto">
//         Subscribe
//       </Button>
//     </form>
//   );
// }
