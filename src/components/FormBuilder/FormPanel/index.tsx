import { BuilderForm, FormField } from "@/types/formBuilder";
import { Textarea, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";

interface Props {
  builderForm: ReturnType<typeof useForm<BuilderForm>>;
}
export default function FormPanel({ builderForm }: Props) {
  return (
    <div>
      <Title order={3}>Form information</Title>
      <form>
        <TextInput
          withAsterisk
          label="Title"
          placeholder="Contact Form"
          {...builderForm.getInputProps("title")}
        />
        <Textarea
          withAsterisk
          label="Description"
          placeholder="Please fill out the form below to contact us."
          {...builderForm.getInputProps("description")}
        />
      </form>
    </div>
  );
}
