import type { ElementType } from "react";
import { cx } from "../utils/cx";
import type { PolymorphicProps } from "../types";

type HeadingSize = "sm" | "md" | "lg" | "xl";
type HeadingTone = "primary" | "secondary";

type HeadingProps<T extends ElementType> = PolymorphicProps<T> & {
  size?: HeadingSize;
  tone?: HeadingTone;
};

const sizeClasses: Record<HeadingSize, string> = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-3xl",
  xl: "text-4xl"
};

const toneClasses: Record<HeadingTone, string> = {
  primary: "text-text-primary",
  secondary: "text-text-secondary"
};

export function Heading<T extends ElementType = "h2">({
  as,
  children,
  className,
  size = "md",
  tone = "primary",
  ...rest
}: HeadingProps<T>) {
  const Component = (as || "h2") as ElementType;

  return (
    <Component
      className={cx(
        sizeClasses[size],
        toneClasses[tone],
        "font-semibold",
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}