import { ActionIcon } from "@mantine/core";
import { IconAdjustments, IconTrash } from "@tabler/icons-react";

interface Props extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
}

export default function FieldActionsWrapper({
  children,
  className,
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="absolute -left-20 translate-y-1/2">
        <ActionIcon size="sm" variant="filled" aria-label="Settings">
          <IconAdjustments />
        </ActionIcon>
        <ActionIcon size="sm" variant="filled" aria-label="trash" color="red">
          <IconTrash />
        </ActionIcon>
      </div>
      {children}
    </div>
  );
}
