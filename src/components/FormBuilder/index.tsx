"use client";
import FormGenerator from "./FormGenerator";
import FormPanel from "./FormPanel";
import { DemoFields } from "./demo";
import { BuilderForm, FormField } from "@/types/formBuilder";
import { AppShell } from "@mantine/core";
import AddFormField from "./AddFormField";
import { useForm } from "@mantine/form";
import { DndContext, DragEndEvent, UniqueIdentifier } from "@dnd-kit/core";

export default function FormBuilder() {
  const builderForm = useForm<BuilderForm>({
    initialValues: {
      title: "My form",
      description: "",
      formFields: DemoFields,
    },
  });
  const onAddField = (field: FormField) => {
    builderForm.setFieldValue("formFields", [
      ...builderForm.values.formFields,
      field,
    ]);
  };
  const onRemoveField = (field: FormField) => {
    builderForm.setFieldValue(
      "formFields",
      builderForm.values.formFields.filter((f) => f !== field)
    );
  };
  function handleDragEnd({ active }: DragEndEvent) {
    const newField = {
      name: `field-${builderForm.values.formFields.length + 1}`,
      label: `New ${active.id} field`,
      type: active.id as FormField["type"],
      required: false,
    } satisfies FormField;
    onAddField(newField);
  }
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <AppShell.Navbar p="md" className="gap-10">
        <FormPanel builderForm={builderForm} />
        <AddFormField onAddField={onAddField} />
      </AppShell.Navbar>

      <AppShell.Main className="flex bg-slate-50">
        <FormGenerator builderForm={builderForm} />
      </AppShell.Main>
    </DndContext>
  );
}
