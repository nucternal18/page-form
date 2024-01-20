import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="flex w-full flex-grow mx-auto items-center justify-center">{children}</section>;
}
