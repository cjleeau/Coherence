import type { CSSProperties } from "react";

export function getDescribedBy(...ids: Array<string | undefined>) {
  return ids.filter(Boolean).join(" ") || undefined;
}

export const labelStyle: CSSProperties = {
  color: "var(--text-primary)",
  fontSize: "var(--font-size-sm)",
  fontWeight: "var(--font-weight-medium)",
  lineHeight: "var(--font-lineHeight-normal)"
};

export const hintStyle: CSSProperties = {
  color: "var(--text-secondary)",
  fontSize: "var(--font-size-sm)",
  lineHeight: "var(--font-lineHeight-normal)"
};

export const errorStyle: CSSProperties = {
  color: "var(--status-critical)",
  fontSize: "var(--font-size-sm)",
  lineHeight: "var(--font-lineHeight-normal)"
};

export const controlClassName =
  "w-full transition-colors transition-shadow duration-150 hover:border-[var(--border-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)]";

export const checkboxClassName =
  "transition-colors transition-shadow duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)]";

export function getControlStyle({
  invalid,
  disabled,
  style
}: {
  invalid: boolean;
  disabled: boolean;
  style?: CSSProperties;
}): CSSProperties {
  return {
    width: "100%",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: invalid ? "var(--status-critical)" : "var(--border-subtle)",
    backgroundColor: "var(--surface-base)",
    color: "var(--text-primary)",
    borderRadius: "0.5rem",
    padding: "0.75rem 0.875rem",
    fontSize: "var(--font-size-md)",
    lineHeight: "var(--font-lineHeight-normal)",
    outline: "none",
    opacity: disabled ? 0.5 : 1,
    boxShadow: invalid ? "0 0 0 1px var(--status-critical)" : "none",
    ...((style as CSSProperties | undefined) ?? {})
  };
}