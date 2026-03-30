import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary";

export type ButtonControlProps =
  ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: ReactNode;
    variant?: ButtonVariant;
  };

export type GroupedContentProps = {
  title: string;
  description?: string;
  children?: ReactNode;
};

export type ActionGroupProps = {
  children?: ReactNode;
  "aria-label"?: string;
};

export {};