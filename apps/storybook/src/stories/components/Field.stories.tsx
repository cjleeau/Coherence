import type { Meta, StoryObj } from "@storybook/react";
import { Field } from "@coherence/components";
import { Box, Heading, Stack, Text } from "@coherence/primitives";

const meta = {
  title: "Components/Field",
  component: Field,
  parameters: {
    layout: "fullscreen"
  },
  tags: ["autodocs"],
  args: {
    label: "Email",
    type: "email",
    placeholder: "you@example.com"
  }
} satisfies Meta<typeof Field>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  args: {
    label: "Email",
    type: "email",
    placeholder: "you@example.com"
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
            Component / Field
          </Text>

          <Heading as="h1" size="xl">
            Field is the standard single-line input component
          </Heading>

          <Text size="lg" tone="secondary" className="max-w-2xl">
            Use Field for text, email, numeric and other single-line entry.
            It provides label, hint, error and disabled support with accessible
            relationships between them.
          </Text>
        </Stack>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack className="max-w-xl" space="4">
            <Heading size="lg">Usage</Heading>

            <Field
              label="Email"
              type="email"
              placeholder="you@example.com"
              hint="Use your work email address."
            />
          </Stack>
        </Box>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">Guidance</Heading>

            <Stack space="2">
              <Text>• always provide a visible label</Text>
              <Text>• use hint text for useful guidance</Text>
              <Text>• show errors near the field they relate to</Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
};

export const States: Story = {
  args: {
    label: "Email",
    type: "email",
    placeholder: "you@example.com"
  },
  render: () => (
    <Stack className="max-w-xl" space="4">
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

      <Field
        label="Disabled field"
        placeholder="Unavailable"
        disabled
        hint="This field is currently disabled."
      />
    </Stack>
  )
};