import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  variant?: "primary" | "secondary";
};

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, CSSProperties> = {
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
        "inline-flex items-center justify-center rounded-lg border px-4 py-2 text-sm transition-colors transition-shadow duration-150 hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      style={{
        ...variantStyles[variant],
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