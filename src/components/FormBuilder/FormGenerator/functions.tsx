import { FormField, FormFieldType } from "@/types/formBuilder";
import { Button, Checkbox, Textarea, TextInput } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import { z } from "zod";
import FieldActionsWrapper from "./FieldActionsWrapper";

export const getInitialValues = (fields: FormField[]) =>
  fields.reduce((acc, field) => {
    if (field.type === FormFieldType.CHECKBOX) {
      return { ...acc, [field.name]: false };
    }

    return { ...acc, [field.name]: "" };
  }, {});

export const getFormSchema = (fields: FormField[]) => {
  const schema = fields.reduce((acc, field) => {
    if (field.type === FormFieldType.CHECKBOX) {
      acc = { ...acc, [field.name]: z.boolean() };
      return acc;
    }
    acc = { ...acc, [field.name]: z.string() };

    return acc;
  }, {});

  return z.object(schema);
};

export const getComponentFields = (
  fields: FormField[],
  form: UseFormReturnType<{}>
) => {
  return fields.map((field) => {
    if (field.type === FormFieldType.CHECKBOX) {
      return (
        <FieldActionsWrapper key={field.name}>
          <Checkbox
            size="lg"
            className="w-full"
            key={field.name}
            label={field.label}
            {...form.getInputProps(field.name, { type: "checkbox" })}
          />
        </FieldActionsWrapper>
      );
    }
    if (field.type === FormFieldType.TEXTAREA) {
      return (
        <FieldActionsWrapper key={field.name}>
          <Textarea
            withAsterisk={field.required}
            size="lg"
            className="w-full"
            key={field.name}
            label={field.label}
            placeholder={field.placeholder}
            {...form.getInputProps(field.name)}
          />
        </FieldActionsWrapper>
      );
    }

    return (
      <FieldActionsWrapper key={field.name}>
        <TextInput
          withAsterisk={field.required}
          size="lg"
          key={field.name}
          label={field.label}
          placeholder={field.placeholder}
          className="w-full"
          {...form.getInputProps(field.name)}
        />
      </FieldActionsWrapper>
    );
  });
};
