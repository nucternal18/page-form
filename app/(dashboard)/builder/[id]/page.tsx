import React from "react";
import Link from "next/link";
import { getForm } from "@/actions/form";
import { Button } from "@/components/ui/button";
import FormBuilder from "@/components/form-builder";

export default async function BuilderPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const form = await getForm(id);
  if (!form) {
    throw new Error("Form not found");
  }
  return (
    <section className="space-y-3 p-3">
      <Button variant={"outline"} asChild>
        <Link href="/">Go back</Link>
      </Button>
      <FormBuilder />
    </section>
  );
}
