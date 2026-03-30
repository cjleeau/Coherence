import type { CSSProperties } from "react";
import type { ActionGroupProps } from "../_internal/actionTypes";

export type FormActionsProps = ActionGroupProps;

export function FormActions({
  children,
  "aria-label": ariaLabel = "Form actions"
}: FormActionsProps) {
  const style: CSSProperties = {
    gap: "var(--spacing-3)"
  };

  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className="flex flex-wrap items-center justify-end"
      style={style}
    >
      {children}
    </div>
  );
}