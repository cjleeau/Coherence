import type { ReactNode } from "react";

export type FormActionsProps = {
  children?: ReactNode;
  "aria-label"?: string;
};

export function FormActions({
  children,
  "aria-label": ariaLabel = "Form actions"
}: FormActionsProps) {
  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className="flex flex-wrap items-center justify-end gap-3"
    >
      {children}
    </div>
  );
}