import { useId } from "react";
import type { CSSProperties, SelectHTMLAttributes } from "react";

export type SelectOption = {
  label: string;
  value: string;
};

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  hint?: string;
  error?: string;
  options: SelectOption[];
  placeholder?: string;
};

export function Select({
  label,
  hint,
  error,
  options,
  placeholder,
  id,
  disabled = false,
  style,
  ...rest
}: SelectProps) {
  const generatedId = useId();
  const selectId = id ?? generatedId;
  const hintId = hint ? `${selectId}-hint` : undefined;
  const errorId = error ? `${selectId}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  const labelStyle: CSSProperties = {
    color: "var(--text-primary)",
    fontSize: "var(--font-size-sm)",
    fontWeight: "var(--font-weight-medium)",
    lineHeight: "var(--font-lineHeight-normal)"
  };

  const hintStyle: CSSProperties = {
    color: "var(--text-secondary)",
    fontSize: "var(--font-size-sm)",
    lineHeight: "var(--font-lineHeight-normal)"
  };

  const errorStyle: CSSProperties = {
    color: "var(--status-critical)",
    fontSize: "var(--font-size-sm)",
    lineHeight: "var(--font-lineHeight-normal)"
  };

  const selectStyle: CSSProperties = {
    width: "100%",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: error ? "var(--status-critical)" : "var(--border-subtle)",
    backgroundColor: "var(--surface-base)",
    color: "var(--text-primary)",
    borderRadius: "0.5rem",
    padding: "0.75rem 0.875rem",
    fontSize: "var(--font-size-md)",
    lineHeight: "var(--font-lineHeight-normal)",
    outline: "none",
    opacity: disabled ? 0.5 : 1,
    ...((style as CSSProperties | undefined) ?? {})
  };

  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={selectId} style={labelStyle}>
        {label}
      </label>

      <select
        id={selectId}
        disabled={disabled}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className="w-full"
        style={selectStyle}
        {...rest}
      >
        {placeholder ? (
          <option value="" disabled>
            {placeholder}
          </option>
        ) : null}

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {hint ? (
        <p id={hintId} style={hintStyle}>
          {hint}
        </p>
      ) : null}

      {error ? (
        <p id={errorId} style={errorStyle}>
          {error}
        </p>
      ) : null}
    </div>
  );
}