import { getForms } from "@/actions/form";
import React from "react";
import FormCard from "./form-card";

export default async function FormCards() {
  const forms = await getForms();

  return (
    <>
      {forms.map((form) => (
        <FormCard key={form.id} form={form} />
      ))}
    </>
  );
}
