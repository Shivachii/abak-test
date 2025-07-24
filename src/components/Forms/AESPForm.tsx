"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { toast } from "sonner";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { formSchema } from "../../lib/formSchemas/AESPForm";
import { Checkbox } from "../ui/checkbox";

export default function AESPForm() {
  const [step, setStep] = useState(1);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      gender: "Male",
      livingArrangement: "Day Scholar",
      attendsSeminary: "No",
      feeStructureAttached: "No",
      receivedAid: "No",
    },
  });

  const nextStep = () => setStep((s) => Math.min(s + 1, 6));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  type AESPFormData = z.infer<typeof formSchema>;

  function onSubmit(data: AESPFormData) {
    toast.success("Form submitted successfully");
    toast.error("Please check missing fields");
    console.log(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 bg-white p-6 shadow-md border rounded-xl max-w-3xl mx-auto max-h-[500px] overflow-y-scroll"
      >
        {step === 1 && (
          <>
            <span className="font-medium text-secondary tracking-wide">
              Your Personal Details
            </span>

            {/* Full Name */}
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
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
                        <RadioGroupItem value="Male" id="gender-male" />
                        <FormLabel htmlFor="gender-male" className="!mt-0">
                          Male
                        </FormLabel>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="Female" id="gender-female" />
                        <FormLabel htmlFor="gender-female" className="!mt-0">
                          Female
                        </FormLabel>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Place of Birth */}
            <FormField
              control={form.control}
              name="placeOfBirth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Place of Birth</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Nationality */}
            <FormField
              control={form.control}
              name="nationality"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nationality</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Religion */}
            <FormField
              control={form.control}
              name="religion"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Religion</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Address */}
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Address</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Contact Number */}
            <FormField
              control={form.control}
              name="contact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Number</FormLabel>
                  <FormControl>
                    <Input type="tel" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        {step === 2 && (
          <>
            <span className="font-medium text-secondary tracking-wide">
              Academic Details
            </span>

            {/* Primary School */}
            <FormField
              control={form.control}
              name="primarySchool"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Primary School</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="e.g. Al-Huda Primary" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Current School */}
            <FormField
              control={form.control}
              name="currentSchool"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current School</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="e.g. Light Academy" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Location */}
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location of School</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="e.g. Nairobi" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Living Arrangement */}
            <FormField
              control={form.control}
              name="livingArrangement"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Living Arrangement</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-wrap gap-4"
                    >
                      {["Hostel", "Day Scholar", "Combination", "Other"].map(
                        (option) => (
                          <div
                            key={option}
                            className="flex items-center space-x-2"
                          >
                            <RadioGroupItem value={option} id={option} />
                            <FormLabel htmlFor={option} className="!mt-0">
                              {option}
                            </FormLabel>
                          </div>
                        )
                      )}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Other Living Arrangement */}
            {form.watch("livingArrangement") === "Other" && (
              <FormField
                control={form.control}
                name="otherLiving"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Please specify</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="e.g. Staying with guardian"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {/* Education Level */}
            <FormField
              control={form.control}
              name="level"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Level / Grade</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="e.g. Form 3, Grade 8" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Attends Seminary */}
            <FormField
              control={form.control}
              name="attendsSeminary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Do you attend a seminary (hawza)?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Yes" id="attends-yes" />
                        <FormLabel htmlFor="attends-yes" className="!mt-0">
                          Yes
                        </FormLabel>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="No" id="attends-no" />
                        <FormLabel htmlFor="attends-no" className="!mt-0">
                          No
                        </FormLabel>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Seminary Name (only if Yes) */}
            {form.watch("attendsSeminary") === "Yes" && (
              <>
                <FormField
                  control={form.control}
                  name="seminaryName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Seminary Name</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="e.g. Bilal Seminary" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="seminaryTeacher"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Seminary Teacher’s Name</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="e.g. Sheikh Juma" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            {/* Mosque Attended */}
            <FormField
              control={form.control}
              name="mosque"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Which mosque do you attend most frequently?
                  </FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="e.g. Masjid Al-Ridha" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        {step === 3 && (
          <>
            <span className="font-medium text-secondary tracking-wide">
              Family Background
            </span>

            {/* Father's Information */}
            <FormField
              control={form.control}
              name="fatherName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Father’s Full Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="e.g. Ali Hussein" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fatherResidence"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Father’s Place of Residence</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="e.g. Mombasa" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fatherOccupation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Father’s Occupation</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="e.g. Teacher" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fatherContact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Father’s Contact Number</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      {...field}
                      placeholder="e.g. +254712345678"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fatherEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Father’s Email (optional)</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      {...field}
                      placeholder="e.g. ali@example.com"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Mother's Information */}
            <FormField
              control={form.control}
              name="motherName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mother’s Full Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="e.g. Fatima Hassan" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="motherResidence"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mother’s Place of Residence</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="e.g. Nairobi" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="motherOccupation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mother’s Occupation</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="e.g. Businesswoman" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="motherContact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mother’s Contact Number</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      {...field}
                      placeholder="e.g. +254712345678"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="motherEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mother’s Email (optional)</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      {...field}
                      placeholder="e.g. fatima@example.com"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Guardian Information (optional) */}
            <span className="block text-sm text-muted-foreground mt-6">
              (Fill this section if student is under the care of a guardian)
            </span>

            <FormField
              control={form.control}
              name="guardianName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Guardian’s Full Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="e.g. Amina Ali" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="guardianRelation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Relation to Student</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="e.g. Aunt, Uncle" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="guardianResidence"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Guardian’s Residence</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="e.g. Kisumu" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="guardianOccupation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Guardian’s Occupation</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="e.g. Farmer" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="guardianContact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Guardian’s Contact Number</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      {...field}
                      placeholder="e.g. +254712345678"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="guardianEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Guardian’s Email (optional)</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      {...field}
                      placeholder="e.g. guardian@example.com"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        {step === 4 && (
          <>
            <span className="font-medium text-secondary tracking-wide">
              Financial Information
            </span>

            {/* Fee Structure Attached */}
            <FormField
              control={form.control}
              name="feeStructureAttached"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Is the school&apos;s fee structure attached?
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex gap-4"
                    >
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="Yes" id="fee-yes" />
                        <FormLabel htmlFor="fee-yes" className="!mt-0">
                          Yes
                        </FormLabel>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="No" id="fee-no" />
                        <FormLabel htmlFor="fee-no" className="!mt-0">
                          No
                        </FormLabel>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Annual Fees */}
            <FormField
              control={form.control}
              name="annualFees"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Total Annual School Fees</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="e.g. 45,000 KES" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Bank Account Name */}
            <FormField
              control={form.control}
              name="accountName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>School Bank Account Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="e.g. Light Academy" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Account Number */}
            <FormField
              control={form.control}
              name="accountNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>School Bank Account Number</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="e.g. 0123456789" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Paybill Number */}
            <FormField
              control={form.control}
              name="paybillNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>School Paybill Number</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="e.g. 400200" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Previously Received Aid */}
            <FormField
              control={form.control}
              name="receivedAid"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Have you previously received financial aid?
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex gap-4"
                    >
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="Yes" id="aid-yes" />
                        <FormLabel htmlFor="aid-yes" className="!mt-0">
                          Yes
                        </FormLabel>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="No" id="aid-no" />
                        <FormLabel htmlFor="aid-no" className="!mt-0">
                          No
                        </FormLabel>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Aid Details (Optional) */}
            {form.watch("receivedAid") === "Yes" && (
              <FormField
                control={form.control}
                name="aidDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Please provide brief details of the aid received
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="e.g. Helped by XYZ Foundation in 2023"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {/* Obligations */}
            <FormField
              control={form.control}
              name="obligations"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Any outstanding family or financial obligations
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="e.g. Supporting siblings’ education"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        {step === 5 && (
          <>
            <span className="font-medium text-secondary tracking-wide">
              Student Profile Summary
            </span>

            {/* Background */}
            <FormField
              control={form.control}
              name="background"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Background</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Briefly describe your personal and academic background"
                      className="min-h-[100px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Reason for Application */}
            <FormField
              control={form.control}
              name="reason"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Reason for Applying</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Explain why you're applying for the program or financial support"
                      className="min-h-[100px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Aspirations */}
            <FormField
              control={form.control}
              name="aspirations"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Aspirations</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="What are your future goals or dreams?"
                      className="min-h-[80px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Additional Notes (optional) */}
            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Notes (optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Any extra information you'd like to share"
                      className="min-h-[80px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        {step === 6 && (
          <>
            <span className="font-medium text-secondary tracking-wide">
              Required Documents Checklist
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {/* Birth Certificate */}
              <FormField
                control={form.control}
                name="birthCert"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-2 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="!mt-0">
                      Copy of Birth Certificate
                    </FormLabel>
                  </FormItem>
                )}
              />

              {/* KCPE Result Slip */}
              <FormField
                control={form.control}
                name="kcpe"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-2 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="!mt-0">KCPE Result Slip</FormLabel>
                  </FormItem>
                )}
              />

              {/* Primary Leaving Certificate */}
              <FormField
                control={form.control}
                name="primaryLeaving"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-2 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="!mt-0">
                      Primary School Leaving Certificate
                    </FormLabel>
                  </FormItem>
                )}
              />

              {/* KCSE Result Slip */}
              <FormField
                control={form.control}
                name="kcse"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-2 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="!mt-0">KCSE Result Slip</FormLabel>
                  </FormItem>
                )}
              />

              {/* Secondary Leaving Certificate */}
              <FormField
                control={form.control}
                name="secondaryLeaving"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-2 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="!mt-0">
                      Secondary School Leaving Certificate
                    </FormLabel>
                  </FormItem>
                )}
              />

              {/* Report Forms */}
              <FormField
                control={form.control}
                name="reportForms"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-2 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="!mt-0">School Report Forms</FormLabel>
                  </FormItem>
                )}
              />

              {/* National ID / Birth Cert / Passport */}
              <FormField
                control={form.control}
                name="idCopies"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-2 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="!mt-0">
                      National ID / Birth Certificate / Passport
                    </FormLabel>
                  </FormItem>
                )}
              />

              {/* Fee Structure */}
              <FormField
                control={form.control}
                name="feeStructure"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-2 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="!mt-0">
                      School Fee Structure
                    </FormLabel>
                  </FormItem>
                )}
              />

              {/* Passport Photo */}
              <FormField
                control={form.control}
                name="photo"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-2 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="!mt-0">Passport Photo</FormLabel>
                  </FormItem>
                )}
              />
            </div>

            {/* File Upload Field (optional, for documents upload) */}
            <FormField
              control={form.control}
              name="documents"
              render={({ field }) => (
                <FormItem className="mt-6">
                  <FormLabel>
                    Upload all documents (optional, ZIP or PDF)
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept=".pdf,.zip,.rar"
                      onChange={(e) => field.onChange(e.target.files?.[0])}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        <div className="flex justify-between pt-6">
          {step > 1 && (
            <Button type="button" onClick={prevStep} variant="outline">
              Back
            </Button>
          )}
          {step < 6 ? (
            <Button type="button" onClick={nextStep}>
              Next
            </Button>
          ) : (
            <Button type="submit" className="bg-primary text-white">
              Submit
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
}
