import React, { ReactNode } from "react";

export default function FormsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full flex-col flex-grow mx-auto">{children}</div>
  );
}


