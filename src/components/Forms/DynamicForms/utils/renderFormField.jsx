import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

export function renderFormField(field, form) {
  return (
    <FormField
      key={field.name}
      control={form.control}
      name={field.name}
      render={({ field: formField }) => (
        <FormItem>
          <FormLabel>
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </FormLabel>
          <FormControl>{renderInputByType(field, formField)}</FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

function renderInputByType(field, formField) {
  switch (field.inputType) {
    case "text":
    case "email":
    case "tel":
    case "date":
    case "number":
      return (
        <Input
          type={field.inputType}
          placeholder={field.placeholder}
          {...formField}
        />
      );

    case "textarea":
      return <Textarea placeholder={field.placeholder} {...formField} />;

    case "checkbox":
      return (
        <div className="flex items-center space-x-2">
          <Checkbox
            checked={formField.value}
            onCheckedChange={formField.onChange}
          />
          <Label>{field.label}</Label>
        </div>
      );

    case "radio":
      return (
        <RadioGroup value={formField.value} onValueChange={formField.onChange}>
          {field.options?.map((option) => (
            <div key={option} className="flex items-center space-x-2">
              <RadioGroupItem value={option} id={`${field.name}-${option}`} />
              <Label htmlFor={`${field.name}-${option}`}>{option}</Label>
            </div>
          ))}
        </RadioGroup>
      );

    case "select":
      return (
        <Select value={formField.value} onValueChange={formField.onChange}>
          <SelectTrigger>
            <SelectValue placeholder={field.placeholder || "Select..."} />
          </SelectTrigger>
          <SelectContent>
            {field.options?.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      );

    case "file":
      return (
        <Input
          type="file"
          onChange={(e) => formField.onChange(e.target.files?.[0])}
        />
      );

    default:
      return (
        <Input type="text" placeholder={field.placeholder} {...formField} />
      );
  }
}
