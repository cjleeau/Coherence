import { useId } from "react";
import type { CSSProperties, InputHTMLAttributes } from "react";
import {
  checkboxClassName,
  errorStyle,
  getDescribedBy,
  hintStyle,
  labelStyle
} from "../_internal/formStyles";

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  hint?: string;
  error?: string;
};

export function Checkbox({
  label,
  hint,
  error,
  id,
  disabled = false,
  style,
  ...rest
}: CheckboxProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const hintId = hint ? `${inputId}-hint` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;
  const describedBy = getDescribedBy(hintId, errorId);

  const boxStyle: CSSProperties = {
    width: "16px",
    height: "16px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: error ? "var(--status-critical)" : "var(--border-strong)",
    borderRadius: "4px",
    accentColor: "var(--action-primary)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    boxShadow: error ? "0 0 0 1px var(--status-critical)" : "none",
    ...((style as CSSProperties | undefined) ?? {})
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={inputId} className="flex items-center gap-3">
        <input
          id={inputId}
          type="checkbox"
          disabled={disabled}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={checkboxClassName}
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

      {error ? (
        <p id={errorId} role="alert" style={errorStyle}>
          {error}
        </p>
      ) : null}
    </div>
  );
}