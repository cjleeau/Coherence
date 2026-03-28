import type { ElementType } from "react";
import { cx } from "../utils/cx";
import type { PolymorphicProps, SpacingToken } from "../types";

type InlineAlign = "start" | "center" | "end" | "stretch" | "baseline";

type InlineProps<T extends ElementType> = PolymorphicProps<T> & {
  space?: SpacingToken;
  align?: InlineAlign;
  wrap?: boolean;
};

const spaceClasses: Record<SpacingToken, string> = {
  "0": "gap-0",
  "1": "gap-1",
  "2": "gap-2",
  "3": "gap-3",
  "4": "gap-4",
  "5": "gap-5",
  "6": "gap-6",
  "8": "gap-8",
  "10": "gap-10",
  "12": "gap-12",
  "16": "gap-16",
  "20": "gap-20",
  "24": "gap-24"
};

const alignClasses: Record<InlineAlign, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline"
};

export function Inline<T extends ElementType = "div">({
  as,
  children,
  className,
  space = "3",
  align = "center",
  wrap = false,
  ...rest
}: InlineProps<T>) {
  const Component = (as || "div") as ElementType;

  return (
    <Component
      className={cx(
        "flex",
        spaceClasses[space],
        alignClasses[align],
        wrap && "flex-wrap",
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}