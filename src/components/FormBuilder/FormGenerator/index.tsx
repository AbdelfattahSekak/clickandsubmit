"use client";
import { BuilderForm, FormField } from "@/types/formBuilder";
import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import {
  getInitialValues,
  getFormSchema,
  getComponentFields,
} from "./functions";
import { Button, Card, Text, Title } from "@mantine/core";
import { DroppableForm } from "@/components/ui/DroppableForm";
import FieldActionsWrapper from "./FieldActionsWrapper";

interface Props {
  builderForm: ReturnType<typeof useForm<BuilderForm>>;
}
export default function FormGenerator({ builderForm }: Props) {
  const form = useForm({
    initialValues: getInitialValues(builderForm.values.formFields),
    validate: zodResolver(getFormSchema(builderForm.values.formFields)),
  });
  return (
    <Card
      shadow="sm"
      padding="xl"
      className="flex mx-auto flex-col gap-5 w-[500px]"
    >
      <Card.Section withBorder inheritPadding py="xs">
        <Title order={2}>{builderForm.values.title}</Title>
        <Text>{builderForm.values.description}</Text>
      </Card.Section>
      <DroppableForm
        id="droppable"
        onSubmit={form.onSubmit((values) => console.log(values))}
        className="flex flex-col gap-5"
      >
        {getComponentFields(builderForm.values.formFields, form)}
        <FieldActionsWrapper className="my-auto" key="submit">
          <Button variant="filled" size="lg" type="submit">
            Submit
          </Button>
        </FieldActionsWrapper>
      </DroppableForm>
    </Card>
  );
}
