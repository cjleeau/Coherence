import type { CSSProperties, ElementType } from "react";
import { cx } from "../utils/cx";
import type { PolymorphicProps, SpacingToken } from "../types";

type StackProps<T extends ElementType> = PolymorphicProps<T> & {
  space?: SpacingToken;
};

const spacingVars: Record<SpacingToken, string> = {
  "0": "var(--spacing-0)",
  "1": "var(--spacing-1)",
  "2": "var(--spacing-2)",
  "3": "var(--spacing-3)",
  "4": "var(--spacing-4)",
  "5": "var(--spacing-5)",
  "6": "var(--spacing-6)",
  "8": "var(--spacing-8)",
  "10": "var(--spacing-10)",
  "12": "var(--spacing-12)",
  "16": "var(--spacing-16)",
  "20": "var(--spacing-20)",
  "24": "var(--spacing-24)"
};

export function Stack<T extends ElementType = "div">({
  as,
  children,
  className,
  space = "4",
  style,
  ...rest
}: StackProps<T>) {
  const Component = (as || "div") as ElementType;

  return (
    <Component
      className={cx("flex flex-col", className)}
      style={
        {
          gap: spacingVars[space],
          ...((style as CSSProperties | undefined) ?? {})
        } as CSSProperties
      }
      {...rest}
    >
      {children}
    </Component>
  );
}