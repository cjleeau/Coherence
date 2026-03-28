import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

export type PrimitiveElement = ElementType;

export type PrimitiveProps<T extends PrimitiveElement> = {
  as?: T;
  children?: ReactNode;
  className?: string;
};

export type PolymorphicProps<T extends PrimitiveElement> =
  PrimitiveProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof PrimitiveProps<T>>;