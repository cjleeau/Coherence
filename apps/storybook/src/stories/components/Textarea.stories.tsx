import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "@coherence/components";
import { Box, Heading, Stack, Text } from "@coherence/primitives";

const meta = {
  title: "Components/Textarea",
  component: Textarea,
  parameters: {
    layout: "fullscreen"
  },
  tags: ["autodocs"],
  args: {
    label: "Project summary",
    placeholder: "Write a short summary..."
  }
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  args: {
    label: "Project summary",
    placeholder: "Write a short summary..."
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
            Component / Textarea
          </Text>

          <Heading as="h1" size="xl">
            Textarea handles long-form input
          </Heading>

          <Text size="lg" tone="secondary" className="max-w-2xl">
            Use Textarea for descriptions, notes and multi-line content entry.
            It supports label, hint, error, disabled and row sizing.
          </Text>
        </Stack>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack className="max-w-2xl" space="4">
            <Heading size="lg">Usage</Heading>

            <Textarea
              label="Project summary"
              placeholder="Write a short summary..."
              hint="Keep it brief and clear."
            />
          </Stack>
        </Box>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">Guidance</Heading>

            <Stack space="2">
              <Text>• use for content that spans multiple lines</Text>
              <Text>• provide hints when expected detail is unclear</Text>
              <Text>• prefer Field for short structured values</Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
};

export const States: Story = {
  args: {
    label: "Project summary",
    placeholder: "Write a short summary..."
  },
  render: () => (
    <Stack className="max-w-2xl" space="4">
      <Textarea
        label="Project summary"
        placeholder="Write a short summary..."
        hint="Keep it brief and clear."
      />

      <Textarea
        label="Implementation notes"
        defaultValue="Primitive layer complete. Components now in progress."
        rows={5}
      />

      <Textarea
        label="Risk notes"
        placeholder="Document any issues here..."
        error="Risk notes are required."
      />

      <Textarea
        label="Disabled notes"
        placeholder="Unavailable"
        disabled
      />
    </Stack>
  )
};