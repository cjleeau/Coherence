import type { ReactNode } from "react";

export type FormActionsProps = {
  children?: ReactNode;
};

export function FormActions({ children }: FormActionsProps) {
  return (
    <div className="flex flex-wrap items-center justify-end gap-3">
      {children}
    </div>
  );
}