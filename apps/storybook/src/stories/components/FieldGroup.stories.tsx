import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox, Field, FieldGroup, Select } from "@coherence/components";
import { Box, Heading, Stack, Text } from "@coherence/primitives";

const meta = {
  title: "Components/FieldGroup",
  component: FieldGroup,
  parameters: {
    layout: "fullscreen"
  },
  tags: ["autodocs"],
  args: {
    title: "Basic fields",
    description: "Single-line inputs for account and project metadata."
  }
} satisfies Meta<typeof FieldGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

const roleOptions = [
  { label: "Designer", value: "designer" },
  { label: "Engineer", value: "engineer" },
  { label: "Product Manager", value: "product-manager" }
];

export const Overview: Story = {
  args: {
    title: "Basic fields",
    description: "Single-line inputs for account and project metadata."
  },
  render: () => (
    <Box
      className="min-h-screen p-8"
      surface="base"
      style={{
        color: "var(--text-primary)",
        fontFamily: "var(--font-family-sans)"
      }}
    >
      <Stack className="mx-auto max-w-4xl" space="8">
        <Stack as="header" space="4">
          <Text size="sm" tone="secondary">
            Component / FieldGroup
          </Text>

          <Heading as="h1" size="xl">
            FieldGroup structures related form controls
          </Heading>

          <Text size="lg" tone="secondary" className="max-w-2xl">
            Use FieldGroup to organize related inputs under a shared title and
            optional description.
          </Text>
        </Stack>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
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
              label="Project name"
              placeholder="Coherence Design System"
              defaultValue="Coherence"
            />

            <Select
              label="Role"
              options={roleOptions}
              placeholder="Select a role"
              defaultValue=""
            />

            <Checkbox label="Subscribe to updates" />
          </FieldGroup>
        </Box>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">Guidance</Heading>

            <Stack space="2">
              <Text>• group related controls together</Text>
              <Text>• use a title that describes the shared purpose</Text>
              <Text>• add description when users need extra context</Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
};

export const States: Story = {
  args: {
    title: "Basic fields",
    description: "Single-line inputs for account and project metadata."
  },
  render: () => (
    <Stack className="max-w-3xl" space="5">
      <FieldGroup
        title="Basic fields"
        description="Single-line inputs for account and project metadata."
      >
        <Field label="Email" type="email" placeholder="you@example.com" />
        <Field label="Project name" placeholder="Coherence Design System" />
      </FieldGroup>

      <FieldGroup
        title="Choices"
        description="Boolean and list-based selection patterns."
      >
        <Checkbox label="Accept terms and conditions" />
        <Select
          label="Role"
          options={roleOptions}
          placeholder="Select a role"
          defaultValue=""
        />
      </FieldGroup>
    </Stack>
  )
};