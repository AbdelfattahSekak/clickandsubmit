import { FormField, FormFieldType } from "@/types/formBuilder";

export const DemoFields: FormField[] = [
  {
    name: "name",
    label: "Name",
    type: FormFieldType.TEXT,
    required: true,
    placeholder: "Enter your name",
  },
  {
    name: "email",
    label: "Email",
    type: FormFieldType.EMAIL,
    required: true,
    placeholder: "Enter your email",
  },
  {
    name: "message",
    label: "Message",
    type: FormFieldType.TEXTAREA,
    required: true,
    placeholder: "Enter your message",
  },
  {
    name: "subscribe",
    label: "Subscribe",
    type: FormFieldType.CHECKBOX,
    required: false,
  },
];
