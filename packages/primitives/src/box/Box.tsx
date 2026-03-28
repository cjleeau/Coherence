import type { CSSProperties, ElementType } from "react";
import { cx } from "../utils/cx";
import type {
  BorderToneToken,
  PolymorphicProps,
  PrimitiveElement,
  SurfaceToneToken
} from "../types";

export type BoxProps<T extends PrimitiveElement = "div"> = PolymorphicProps<T> & {
  surface?: SurfaceToneToken;
  border?: BorderToneToken;
};

const surfaceStyles: Record<SurfaceToneToken, CSSProperties> = {
  base: { backgroundColor: "var(--surface-base)" },
  raised: { backgroundColor: "var(--surface-raised)" },
  sunken: { backgroundColor: "var(--surface-sunken)" },
  inverse: { backgroundColor: "var(--surface-inverse)" }
};

const borderStyles: Record<Exclude<BorderToneToken, "none">, CSSProperties> = {
  subtle: { borderColor: "var(--border-subtle)" },
  strong: { borderColor: "var(--border-strong)" },
  inverse: { borderColor: "var(--border-inverse)" }
};

function cxSafe(...values: Array<string | undefined | false | null>) {
  return values.filter(Boolean).join(" ");
}

export function Box<T extends PrimitiveElement = "div">({
  as,
  children,
  className,
  surface,
  border = "none",
  style,
  ...rest
}: BoxProps<T>) {
  const Component = (as || "div") as PrimitiveElement;

  return (
    <Component
      className={cxSafe(border !== "none" && "border", className)}
      style={
        {
          ...(surface ? surfaceStyles[surface] : {}),
          ...(border !== "none" ? borderStyles[border] : {}),
          ...((style as CSSProperties | undefined) ?? {})
        } as CSSProperties
      }
      {...rest}
    >
      {children}
    </Component>
  );
}