import { FormField } from "@/types/formBuilder";
import { useForm } from "@mantine/form";
import { FieldButtons } from ".";
import { TextInput, Checkbox, Button } from "@mantine/core";
import { zodResolver } from "mantine-form-zod-resolver";

export default function NewFormFieldModal({
  fieldButton,
  onAddField,
}: {
  fieldButton: (typeof FieldButtons)[0];

  onAddField: (field: FormField) => void;
}) {
  const form = useForm({
    initialValues: {
      name: "",
      label: "",
      type: fieldButton.type,
      required: false,
    } satisfies FormField,
    validate: zodResolver(FormField),
  });
  return (
    <form onSubmit={form.onSubmit((values) => onAddField(values))}>
      <TextInput
        withAsterisk
        label="Name"
        placeholder="name"
        {...form.getInputProps("name")}
      />
      <TextInput
        withAsterisk
        label="Label"
        placeholder="Label"
        {...form.getInputProps("label")}
      />
      <Checkbox label="Required" {...form.getInputProps("required")} />
      <Button type="submit">Add Field</Button>
    </form>
  );
}
