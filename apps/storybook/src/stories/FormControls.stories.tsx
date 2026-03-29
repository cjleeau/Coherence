import type { Meta, StoryObj } from "@storybook/react";
import {
  Checkbox,
  Field,
  FieldGroup,
  FormActions,
  Select,
  Textarea,
  Button
} from "@coherence/components";
import { Box, Stack } from "@coherence/primitives";

const meta = {
  title: "Components/Form Controls",
  parameters: {
    layout: "fullscreen"
  }
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const environmentOptions = [
  { label: "Development", value: "development" },
  { label: "Staging", value: "staging" },
  { label: "Production", value: "production" }
];

export const Overview: Story = {
  render: () => (
    <Box
      className="min-h-screen p-8"
      surface="base"
      style={{
        color: "var(--text-primary)",
        fontFamily: "var(--font-family-sans)"
      }}
    >
      <Box className="mx-auto max-w-3xl rounded-xl p-6" surface="raised" border="subtle">
        <Stack space="5">
          <FieldGroup
            title="Basic fields"
            description="Single-line inputs for account and project metadata."
          >
            <Field
              label="Email"
              type="email"
              placeholder="you@example.com"
              hint="Use your work email address."
            />

            <Field
              label="Account ID"
              placeholder="Enter account ID"
              error="Account ID is required."
            />
          </FieldGroup>

          <FieldGroup
            title="Choices"
            description="Boolean and list-based selection patterns."
          >
            <Checkbox label="Accept terms and conditions" />
            <Checkbox
              label="Validated confirmation"
              error="You must confirm before continuing."
            />

            <Select
              label="Environment"
              options={environmentOptions}
              placeholder="Select an environment"
              defaultValue=""
              error="Environment selection is required."
            />
          </FieldGroup>

          <FieldGroup
            title="Long-form input"
            description="Multi-line content and implementation notes."
          >
            <Textarea
              label="Project summary"
              placeholder="Write a short summary..."
              hint="Keep it brief and clear."
            />

            <Textarea
              label="Risk notes"
              placeholder="Document any issues here..."
              error="Risk notes are required."
            />
          </FieldGroup>

          <FormActions>
            <Button variant="secondary">Cancel</Button>
            <Button variant="secondary">Save draft</Button>
            <Button variant="primary">Submit</Button>
          </FormActions>
        </Stack>
      </Box>
    </Box>
  )
};