import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { UnstyledButton, UnstyledButtonProps } from "@mantine/core";

interface Props extends UnstyledButtonProps {
  id: string;
  onClick?: () => void;
  children: React.ReactNode;
}
export function DraggableActionIcon({
  id,
  onClick,
  children,
  ...props
}: Props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <UnstyledButton
      ref={setNodeRef}
      style={style}
      onClick={onClick}
      {...props}
      {...listeners}
      {...attributes}
    >
      {children}
    </UnstyledButton>
  );
}
