import React from "react";
import { useDroppable } from "@dnd-kit/core";
interface Props extends React.HTMLProps<HTMLFormElement> {
  id: string;
  children: React.ReactNode;
}
export function DroppableForm({ id, children, ...props }: Props) {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });
  const style = {
    opacity: isOver ? 1 : 0.5,
  };

  return (
    <form ref={setNodeRef} style={style} {...props}>
      {children}
    </form>
  );
}
