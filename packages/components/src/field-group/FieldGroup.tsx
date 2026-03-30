import { useId } from "react";
import type { CSSProperties, ReactNode } from "react";

export type FieldGroupProps = {
  title: string;
  description?: string;
  children?: ReactNode;
};

export function FieldGroup({
  title,
  description,
  children
}: FieldGroupProps) {
  const id = useId();
  const titleId = `${id}-title`;
  const descriptionId = description ? `${id}-description` : undefined;

  const titleStyle: CSSProperties = {
    color: "var(--text-primary)",
    fontSize: "var(--font-size-lg)",
    fontWeight: "var(--font-weight-semibold)",
    lineHeight: "var(--font-lineHeight-tight)"
  };

  const descriptionStyle: CSSProperties = {
    color: "var(--text-secondary)",
    fontSize: "var(--font-size-sm)",
    lineHeight: "var(--font-lineHeight-normal)"
  };

  return (
    <section
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      className="flex w-full flex-col gap-4 rounded-xl border p-5"
      style={{
        backgroundColor: "var(--surface-sunken)",
        borderColor: "var(--border-subtle)"
      }}
    >
      <div className="flex flex-col gap-2">
        <h2 id={titleId} style={titleStyle}>
          {title}
        </h2>

        {description ? (
          <p id={descriptionId} style={descriptionStyle}>
            {description}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4">{children}</div>
    </section>
  );
}