import { useId } from "react";
import type { CSSProperties, TextareaHTMLAttributes } from "react";
import {
  controlClassName,
  errorStyle,
  getControlStyle,
  getDescribedBy,
  hintStyle,
  labelStyle
} from "../_internal/formStyles";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  hint?: string;
  error?: string;
};

export function Textarea({
  label,
  hint,
  error,
  id,
  disabled = false,
  rows = 4,
  style,
  ...rest
}: TextareaProps) {
  const generatedId = useId();
  const textareaId = id ?? generatedId;
  const hintId = hint ? `${textareaId}-hint` : undefined;
  const errorId = error ? `${textareaId}-error` : undefined;
  const describedBy = getDescribedBy(hintId, errorId);

  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={textareaId} style={labelStyle}>
        {label}
      </label>

      <textarea
        id={textareaId}
        rows={rows}
        disabled={disabled}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className={controlClassName}
        style={{
          ...getControlStyle({
            invalid: Boolean(error),
            disabled,
            style: style as CSSProperties | undefined
          }),
          resize: "vertical"
        }}
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