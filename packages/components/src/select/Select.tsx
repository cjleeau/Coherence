import { useId } from "react";
import type { CSSProperties, SelectHTMLAttributes } from "react";
import {
  controlClassName,
  errorStyle,
  getControlStyle,
  getDescribedBy,
  hintStyle,
  labelStyle
} from "../_internal/formStyles";

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
  const describedBy = getDescribedBy(hintId, errorId);

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
        className={controlClassName}
        style={getControlStyle({
          invalid: Boolean(error),
          disabled,
          style: style as CSSProperties | undefined
        })}
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
        <p id={errorId} role="alert" style={errorStyle}>
          {error}
        </p>
      ) : null}
    </div>
  );
}