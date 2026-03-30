import type {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes
} from "react";

export type FormControlBaseProps = {
  label: string;
  hint?: string;
  error?: string;
};

export type FieldControlProps =
  InputHTMLAttributes<HTMLInputElement> & FormControlBaseProps;

export type CheckboxControlProps =
  InputHTMLAttributes<HTMLInputElement> & FormControlBaseProps;

export type TextareaControlProps =
  TextareaHTMLAttributes<HTMLTextAreaElement> & FormControlBaseProps;

export type SelectOption = {
  label: string;
  value: string;
};

export type SelectControlProps =
  SelectHTMLAttributes<HTMLSelectElement> &
  FormControlBaseProps & {
    options: SelectOption[];
    placeholder?: string;
  };

export {};