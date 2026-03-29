import { useId } from "react";
import type { CSSProperties, InputHTMLAttributes } from "react";
import {
  controlClassName,
  errorStyle,
  getControlStyle,
  getDescribedBy,
  hintStyle,
  labelStyle
} from "../_internal/formStyles";

export type FieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  hint?: string;
  error?: string;
};

export function Field({
  label,
  hint,
  error,
  id,
  disabled = false,
  style,
  ...rest
}: FieldProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const hintId = hint ? `${inputId}-hint` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;
  const describedBy = getDescribedBy(hintId, errorId);

  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={inputId} style={labelStyle}>
        {label}
      </label>

      <input
        id={inputId}
        disabled={disabled}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className={controlClassName}
        style={getControlStyle({
          invalid: Boolean(error),
          disabled,
          style: style as CSSProperties | undefined
        })}
        {...rest}
      />

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