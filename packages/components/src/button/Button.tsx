import type { CSSProperties } from "react";
import type { ButtonControlProps, ButtonVariant } from "../_internal/actionTypes";

export type ButtonProps = ButtonControlProps;
export type { ButtonVariant };

const variantStyles: Record<ButtonVariant, CSSProperties> = {
  primary: {
    backgroundColor: "var(--action-primary)",
    color: "var(--action-primaryText)",
    borderColor: "var(--border-strong)"
  },
  secondary: {
    backgroundColor: "var(--surface-sunken)",
    color: "var(--text-primary)",
    borderColor: "var(--border-strong)"
  }
};

function cx(...values: Array<string | undefined | false | null>) {
  return values.filter(Boolean).join(" ");
}

export function Button({
  children,
  className,
  variant = "primary",
  disabled = false,
  type = "button",
  style,
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cx(
        "inline-flex items-center justify-center border transition-colors transition-shadow duration-150 hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      style={{
        ...variantStyles[variant],
        borderRadius: "0.5rem",
        paddingBlock: "var(--spacing-2)",
        paddingInline: "var(--spacing-4)",
        fontSize: "var(--font-size-sm)",
        lineHeight: "var(--font-lineHeight-normal)",
        fontWeight: "var(--font-weight-medium)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        ...((style as CSSProperties | undefined) ?? {})
      }}
      {...rest}
    >
      {children}
    </button>
  );
}