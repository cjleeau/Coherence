import { useId } from "react";
import type { CSSProperties, InputHTMLAttributes } from "react";

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  hint?: string;
};

export function Checkbox({
  label,
  hint,
  id,
  disabled = false,
  style,
  ...rest
}: CheckboxProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const hintId = hint ? `${inputId}-hint` : undefined;

  const labelStyle: CSSProperties = {
    color: "var(--text-primary)",
    fontSize: "var(--font-size-md)",
    lineHeight: "var(--font-lineHeight-normal)"
  };

  const hintStyle: CSSProperties = {
    color: "var(--text-secondary)",
    fontSize: "var(--font-size-sm)",
    lineHeight: "var(--font-lineHeight-normal)"
  };

  const boxStyle: CSSProperties = {
    width: "16px",
    height: "16px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "var(--border-strong)",
    borderRadius: "4px",
    accentColor: "var(--action-primary)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    ...((style as CSSProperties | undefined) ?? {})
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={inputId} className="flex items-center gap-3">
        <input
          id={inputId}
          type="checkbox"
          disabled={disabled}
          aria-describedby={hintId}
          style={boxStyle}
          {...rest}
        />

        <span style={labelStyle}>{label}</span>
      </label>

      {hint ? (
        <p id={hintId} style={hintStyle}>
          {hint}
        </p>
      ) : null}
    </div>
  );
}