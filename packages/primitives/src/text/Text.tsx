import type { ElementType } from "react";
import { cx } from "../utils/cx";
import type {
  FontSizeToken,
  FontWeightToken,
  PolymorphicProps,
  TextToneToken
} from "../types";

type TextSize = Extract<FontSizeToken, "sm" | "md" | "lg">;
type TextWeight = Extract<FontWeightToken, "regular" | "medium" | "semibold">;
type TextTone = Extract<TextToneToken, "primary" | "secondary" | "muted">;

type TextProps<T extends ElementType> = PolymorphicProps<T> & {
  tone?: TextTone;
  size?: TextSize;
  weight?: TextWeight;
};

const toneClasses: Record<TextTone, string> = {
  primary: "text-[var(--text-primary)]",
  secondary: "text-[var(--text-secondary)]",
  muted: "text-[var(--text-muted)]"
};

const sizeClasses: Record<TextSize, string> = {
  sm: "text-sm",
  md: "text-base",
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