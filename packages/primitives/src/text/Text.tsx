import type { CSSProperties, ElementType } from "react";
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

const toneStyles: Record<TextTone, CSSProperties> = {
  primary: { color: "var(--text-primary)" },
  secondary: { color: "var(--text-secondary)" },
  muted: { color: "var(--text-muted)" }
};

const sizeStyles: Record<TextSize, CSSProperties> = {
  sm: { fontSize: "var(--font-size-sm)" },
  md: { fontSize: "var(--font-size-md)" },
  lg: { fontSize: "var(--font-size-lg)" }
};

const weightStyles: Record<TextWeight, CSSProperties> = {
  regular: { fontWeight: "var(--font-weight-regular)" },
  medium: { fontWeight: "var(--font-weight-medium)" },
  semibold: { fontWeight: "var(--font-weight-semibold)" }
};

const lineHeightStyles: Record<TextSize, CSSProperties> = {
  sm: { lineHeight: "var(--font-lineHeight-normal)" },
  md: { lineHeight: "var(--font-lineHeight-normal)" },
  lg: { lineHeight: "var(--font-lineHeight-relaxed)" }
};

export function Text<T extends ElementType = "p">({
  as,
  children,
  className,
  tone = "primary",
  size = "md",
  weight = "regular",
  style,
  ...rest
}: TextProps<T>) {
  const Component = (as || "p") as ElementType;

  return (
    <Component
      className={cx(className)}
      style={
        {
          ...toneStyles[tone],
          ...sizeStyles[size],
          ...weightStyles[weight],
          ...lineHeightStyles[size],
          ...((style as CSSProperties | undefined) ?? {})
        } as CSSProperties
      }
      {...rest}
    >
      {children}
    </Component>
  );
}