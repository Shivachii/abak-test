"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendStkPush } from "@/actions/stkPush";
import { stkPushQuery } from "@/actions/stkPushQuery";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import PaymentSuccess from "./Success";
import STKPushQueryLoading from "./StkQueryLoading";
import { useRef, useState } from "react";
import { STKError } from "../../lib/types/stkError/stkError";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  //   email: z.string().email().optional(),
  category: z.string().optional(),
  //   message: z.string().optional(),
  mpesa_phone: z
    .string()
    .regex(
      /^(07\d{8}|01\d{8}|2547\d{8}|2541\d{8}|\+2547\d{8}|\+2541\d{8})$/,
      "Invalid MPESA number"
    ),
  amount: z.coerce.number().min(1, "Amount must be at least 1"),
});

type FormData = z.infer<typeof formSchema>;

export default function PaymentForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      //   email: "",
      category: "",
      //   message: "",
      mpesa_phone: "",
      amount: 0,
    },
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [stkQueryLoading, setStkQueryLoading] = useState(false);
  const phoneRef = useRef<string>("");

  const stkPushQueryWithIntervals = (CheckoutRequestID: string) => {
    let reqcount = 0;
    const timer = setInterval(async () => {
      reqcount += 1;

      if (reqcount === 15) {
        clearInterval(timer);
        setStkQueryLoading(false);
        setLoading(false);
        alert("You took too long to pay");
        return;
      }

      const { data, error } = await stkPushQuery(CheckoutRequestID);

      if (
        error &&
        typeof error === "object" &&
        "response" in error &&
        (error as STKError).response?.data?.errorCode !== "500.001.1001"
      ) {
        clearInterval(timer);
        setStkQueryLoading(false);
        setLoading(false);
        alert((error as STKError).response?.data?.errorMessage);
      }

      if (data) {
        if (data.ResultCode === "0") {
          clearInterval(timer);
          setStkQueryLoading(false);
          setLoading(false);
          setSuccess(true);
        } else {
          clearInterval(timer);
          setStkQueryLoading(false);
          setLoading(false);
          alert(data?.ResultDesc);
        }
      }
    }, 2000);
  };

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    phoneRef.current = data.mpesa_phone.trim();

    const { data: stkData, error: stkError } = await sendStkPush({
      mpesa_number: data.mpesa_phone,
      name: data.name,
      amount: data.amount,
    });

    if (stkError) {
      setLoading(false);
      return alert(stkError);
    }

    const checkoutRequestId = stkData.CheckoutRequestID;
    setStkQueryLoading(true);
    stkPushQueryWithIntervals(checkoutRequestId);
  };

  if (stkQueryLoading) return <STKPushQueryLoading number={phoneRef.current} />;
  if (success) return <PaymentSuccess />;

  return (
    <div className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Donation Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Family Iftar Food Basket">
                      Family Iftar Food Basket
                    </SelectItem>
                    <SelectItem value="Muharram Majlis">
                      Muharram Majlis
                    </SelectItem>
                    <SelectItem value="Hawza Support (Seyyida Zeinab)">
                      Hawza Support (Seyyida Zeinab)
                    </SelectItem>
                    <SelectItem value="Medical Aid">Medical Aid</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          /> */}

          <FormField
            control={form.control}
            name="mpesa_phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>MPESA Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="07XXXXXXXX" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Amount (Ksh)</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="500" {...field} />
                </FormControl>
                <FormDescription>
                  Enter your donation amount in Kenyan Shillings
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message (Optional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Leave a message or intention..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Processing..." : "Donate"}
          </Button>
          {/* <PaystackButton name="" amount={} email="" onSuccess={} /> */}
        </form>
      </Form>
    </div>
  );
}
