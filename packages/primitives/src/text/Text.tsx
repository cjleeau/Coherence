import type { ElementType } from "react";
import { cx } from "../utils/cx";
import type { PolymorphicProps } from "../types";

type TextTone = "primary" | "secondary" | "muted";
type TextSize = "sm" | "md" | "lg";
type TextWeight = "regular" | "medium" | "semibold";

type TextProps<T extends ElementType> = PolymorphicProps<T> & {
  tone?: TextTone;
  size?: TextSize;
  weight?: TextWeight;
};

const toneClasses: Record<TextTone, string> = {
  primary: "text-text-primary",
  secondary: "text-text-secondary",
  muted: "text-text-muted"
};

const sizeClasses: Record<TextSize, string> = {
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg"
};

const weightClasses: Record<TextWeight, string> = {
  regular: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold"
};

export function Text<T extends ElementType = "p">({
  as,
  children,
  className,
  tone = "primary",
  size = "md",
  weight = "regular",
  ...rest
}: TextProps<T>) {
  const Component = (as || "p") as ElementType;

  return (
    <Component
      className={cx(
        toneClasses[tone],
        sizeClasses[size],
        weightClasses[weight],
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}