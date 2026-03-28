import type { CSSProperties, ElementType } from "react";
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

const toneStyles: Record<HeadingToneToken, CSSProperties> = {
  primary: { color: "var(--text-primary)" },
  secondary: { color: "var(--text-secondary)" }
};

const sizeStyles: Record<HeadingSize, CSSProperties> = {
  lg: { fontSize: "var(--font-size-lg)" },
  xl: { fontSize: "var(--font-size-xl)" },
  "2xl": { fontSize: "var(--font-size-2xl)" },
  "3xl": { fontSize: "var(--font-size-3xl)" },
  "4xl": { fontSize: "var(--font-size-4xl)" }
};

const lineHeightStyles: Record<HeadingSize, CSSProperties> = {
  lg: { lineHeight: "var(--font-lineHeight-tight)" },
  xl: { lineHeight: "var(--font-lineHeight-tight)" },
  "2xl": { lineHeight: "var(--font-lineHeight-tight)" },
  "3xl": { lineHeight: "var(--font-lineHeight-tight)" },
  "4xl": { lineHeight: "var(--font-lineHeight-tight)" }
};

export function Heading<T extends ElementType = "h2">({
  as,
  children,
  className,
  size = "2xl",
  tone = "primary",
  style,
  ...rest
}: HeadingProps<T>) {
  const Component = (as || "h2") as ElementType;

  return (
    <Component
      className={cx(className)}
      style={
        {
          ...toneStyles[tone],
          ...sizeStyles[size],
          ...lineHeightStyles[size],
          fontWeight: "var(--font-weight-semibold)",
          ...((style as CSSProperties | undefined) ?? {})
        } as CSSProperties
      }
      {...rest}
    >
      {children}
    </Component>
  );
}