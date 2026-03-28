import type { PrimitiveElement, PolymorphicProps } from "../types";

export type BoxProps<T extends PrimitiveElement = "div"> = PolymorphicProps<T>;

function cx(...values: Array<string | undefined | false | null>) {
  return values.filter(Boolean).join(" ");
}

export function Box<T extends PrimitiveElement = "div">({
  as,
  children,
  className,
  ...rest
}: BoxProps<T>) {
  const Component = (as || "div") as PrimitiveElement;

  return (
    <Component className={cx(className)} {...rest}>
      {children}
    </Component>
  );
}