import type { ElementType } from "react";
import { cx } from "../utils/cx";
import type {
  FontSizeToken,
  HeadingToneToken,
  PolymorphicProps
} from "../types";

type HeadingSize = Extract<FontSizeToken, "lg" | "xl" | "2xl" | "3xl" | "4xl">;

type HeadingProps<T extends ElementType> = PolymorphicProps<T> & {
  size?: HeadingSize;
  tone?: HeadingToneToken;
};

const sizeClasses: Record<HeadingSize, string> = {
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl"
};

const toneClasses: Record<HeadingToneToken, string> = {
  primary: "text-[var(--text-primary)]",
  secondary: "text-[var(--text-secondary)]"
};

export function Heading<T extends ElementType = "h2">({
  as,
  children,
  className,
  size = "2xl",
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