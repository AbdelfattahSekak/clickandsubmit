import { FormField, FormFieldType } from "@/types/formBuilder";
import { ActionIcon, Grid, Modal, Text, Title } from "@mantine/core";
import {
  IconCheckbox,
  IconMail,
  IconTextGrammar,
  IconTextPlus,
} from "@tabler/icons-react";
import { useState } from "react";
import NewFormFieldModal from "./NewFormFieldModal";
import { DraggableActionIcon } from "@/components/ui/DraggableActionIcon";

export const FieldButtons = [
  {
    icon: <IconMail size={30} />,
    title: "Email",
    type: FormFieldType.EMAIL,
  },
  {
    icon: <IconTextGrammar size={30} />,
    title: "Text",
    type: FormFieldType.TEXT,
  },
  {
    icon: <IconTextPlus size={30} />,
    title: "Text area",
    type: FormFieldType.TEXTAREA,
  },
  {
    icon: <IconCheckbox size={30} />,
    title: "Checkbox",
    type: FormFieldType.CHECKBOX,
  },
];

export default function AddFormField({
  onAddField,
}: {
  onAddField: (field: FormField) => void;
}) {
  const [selectedField, setSelectedField] = useState<
    (typeof FieldButtons)[0] | null
  >(null);

  const onClose = () => {
    setSelectedField(null);
  };
  return (
    <div>
      <Title order={3}>Form fields</Title>
      <Grid>
        {FieldButtons.map((field, index) => (
          <Grid.Col key={index} span={4}>
            <DraggableActionIcon
              id={field.type}
              onClick={() => setSelectedField(field)}
              className="flex flex-col h-[60px] w-[60px] border border-gray-400 rounded-lg"
            >
              {field.icon}
              <Text size="sm">{field.title}</Text>
            </DraggableActionIcon>
          </Grid.Col>
        ))}
      </Grid>
      <Modal
        opened={!!selectedField}
        onClose={onClose}
        title={selectedField?.title}
      >
        {selectedField && (
          <NewFormFieldModal
            fieldButton={selectedField}
            onAddField={onAddField}
          />
        )}
      </Modal>
    </div>
  );
}
