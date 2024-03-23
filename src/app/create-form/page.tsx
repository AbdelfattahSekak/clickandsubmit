"use client";
import FormBuilder from "@/components/FormBuilder";
import Logo from "@/components/ui/Logo";
import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function CreateFormPage() {
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 400,
        breakpoint: "sm",
      }}
      padding="md"
      w="100%"
    >
      <AppShell.Header>
        <Logo />
      </AppShell.Header>

      <FormBuilder />
    </AppShell>
  );
}
