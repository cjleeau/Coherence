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

export type SpacingToken =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "8"
  | "10"
  | "12"
  | "16"
  | "20"
  | "24";

export type FontSizeToken =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl";

export type FontWeightToken =
  | "regular"
  | "medium"
  | "semibold"
  | "bold";

export type TextToneToken = "primary" | "secondary" | "muted" | "inverse";
export type HeadingToneToken = "primary" | "secondary";

export type SurfaceToneToken = "base" | "raised" | "sunken" | "inverse";
export type BorderToneToken = "none" | "subtle" | "strong" | "inverse";