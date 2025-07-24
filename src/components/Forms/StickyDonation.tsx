// "use client";

// import { useEffect, useState } from "react";
// import { toast } from "sonner";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";

// import {
//   Form,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormControl,
//   FormMessage,
//   FormDescription,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";

// const formSchema = z.object({
//   name: z.string().min(2, "Name is too short"),
//   // email: z.string().email("Invalid email"),
//   category: z.enum([
//     "Family Iftar Food Basket",
//     "Muharram Majlis",
//     "Hawza Support (Seyyida Zeinab)",
//     "Medical Aid",
//   ]),
//   amount: z.string().min(1, "Amount is required"),
// });

// export default function StickyDonateForm() {
//   const [showForm, setShowForm] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowForm(window.scrollY > 400);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: "",
//       // email: "",
//       category: undefined,
//       amount: "",
//     },
//   });

//   const onSubmit = (values: z.infer<typeof formSchema>) => {
//     toast.success("Thank you for your donation!");
//     form.reset();
//   };

//   return (
//     <>
//       {/* Show full form on md+ screens */}
//       <div
//         className={`hidden md:block fixed bottom-1 left-1/2 transform -translate-x-1/2 z-50 transition-opacity duration-500 w-[95%] max-w-6xl ${
//           showForm ? "opacity-100" : "opacity-0 pointer-events-none"
//         }`}
//       >
//         <Form {...form}>
//           <form
//             onSubmit={form.handleSubmit(onSubmit)}
//             className="bg-white border shadow-xl rounded-xl px-4 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end"
//           >
//             <FormField
//               control={form.control}
//               name="name"
//               render={({ field }) => (
//                 <FormItem className="w-full">
//                   <FormLabel>Your Name</FormLabel>
//                   <FormControl>
//                     <Input placeholder="John Doe" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             {/* <FormField
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem className="w-full">
//                   <FormLabel>Your Email</FormLabel>
//                   <FormControl>
//                     <Input
//                       type="email"
//                       placeholder="john@example.com"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             /> */}

//             <FormField
//               control={form.control}
//               name="category"
//               render={({ field }) => (
//                 <FormItem className="w-full">
//                   <FormLabel>Category</FormLabel>
//                   <Select
//                     onValueChange={field.onChange}
//                     defaultValue={field.value}
//                   >
//                     <FormControl>
//                       <SelectTrigger>
//                         <SelectValue placeholder="Select" />
//                       </SelectTrigger>
//                     </FormControl>
//                     <SelectContent>
//                       <SelectItem value="Family Iftar Food Basket">
//                         Family Iftar Food Basket
//                       </SelectItem>
//                       <SelectItem value="Muharram Majlis">
//                         Muharram Majlis
//                       </SelectItem>
//                       <SelectItem value="Hawza Support (Seyyida Zeinab)">
//                         Hawza Support (Seyyida Zeinab)
//                       </SelectItem>
//                       <SelectItem value="Medical Aid">Medical Aid</SelectItem>
//                     </SelectContent>
//                   </Select>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="amount"
//               render={({ field }) => (
//                 <FormItem className="w-full">
//                   <FormLabel>Amount (Ksh)</FormLabel>
//                   <FormControl>
//                     <Input type="number" placeholder="500" {...field} />
//                   </FormControl>

//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <Button type="submit" className="w-full">
//               Donate
//             </Button>
//           </form>
//         </Form>
//       </div>

//       {/* Mobile only donate button + dialog */}
//       <div className="block md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
//         <Dialog>
//           <DialogTrigger asChild>
//             <Button className="bg-primary text-white px-6 py-3 rounded-md shadow-md">
//               Donate
//             </Button>
//           </DialogTrigger>
//           <DialogContent className="p-6 rounded-2xl max-w-md mx-auto">
//             <DialogHeader>
//               <DialogTitle>Make a Donation</DialogTitle>
//             </DialogHeader>

//             <Form {...form}>
//               <form
//                 onSubmit={form.handleSubmit(onSubmit)}
//                 className="flex flex-col gap-4"
//               >
//                 <FormField
//                   control={form.control}
//                   name="name"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Your Name</FormLabel>
//                       <FormControl>
//                         <Input placeholder="John Doe" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 {/* <FormField
//                   control={form.control}
//                   name="email"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Your Email</FormLabel>
//                       <FormControl>
//                         <Input
//                           type="email"
//                           placeholder="john@example.com"
//                           {...field}
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 /> */}

//                 <FormField
//                   control={form.control}
//                   name="category"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Category</FormLabel>
//                       <Select
//                         onValueChange={field.onChange}
//                         defaultValue={field.value}
//                       >
//                         <FormControl>
//                           <SelectTrigger>
//                             <SelectValue placeholder="Select" />
//                           </SelectTrigger>
//                         </FormControl>
//                         <SelectContent>
//                           <SelectItem value="Family Iftar Food Basket">
//                             Family Iftar Food Basket
//                           </SelectItem>
//                           <SelectItem value="Muharram Majlis">
//                             Muharram Majlis
//                           </SelectItem>
//                           <SelectItem value="Hawza Support (Seyyida Zeinab)">
//                             Hawza Support (Seyyida Zeinab)
//                           </SelectItem>
//                           <SelectItem value="Medical Aid">
//                             Medical Aid
//                           </SelectItem>
//                         </SelectContent>
//                       </Select>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 <FormField
//                   control={form.control}
//                   name="amount"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Amount</FormLabel>
//                       <FormControl>
//                         <Input type="number" placeholder="500" {...field} />
//                       </FormControl>
//                       <FormDescription className="text-xs">
//                         Enter amount in Ksh or USD.
//                       </FormDescription>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 <Button type="submit" className="w-full">
//                   Donate
//                 </Button>
//               </form>
//             </Form>
//           </DialogContent>
//         </Dialog>
//       </div>
//     </>
//   );
// }
