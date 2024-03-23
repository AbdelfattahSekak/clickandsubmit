import z from "zod";

export enum FormFieldType {
  TEXT = "TEXT",
  TEXTAREA = "TEXTAREA",
  RADIO = "RADIO",
  CHECKBOX = "CHECKBOX",
  SELECT = "SELECT",
  DATE = "DATE",
  TIME = "TIME",
  DATETIME = "DATETIME",
  EMAIL = "EMAIL",
  PASSWORD = "PASSWORD",
  NUMBER = "NUMBER",
  URL = "URL",
  FILE = "FILE",
  IMAGE = "IMAGE",
}

export const FormField = z.object({
  name: z.string(),
  label: z.string(),
  type: z.nativeEnum(FormFieldType),
  required: z.boolean(),
  placeholder: z.string().optional(),
  options: z.array(z.string()).optional(),
});
export const BuilderForm = z.object({
  title: z.string(),
  description: z.string(),
  formFields: z.array(FormField),
});
export type BuilderForm = z.infer<typeof BuilderForm>;
export type FormField = z.infer<typeof FormField>;
