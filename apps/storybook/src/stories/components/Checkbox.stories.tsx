import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@coherence/components";
import { Box, Heading, Stack, Text } from "@coherence/primitives";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "fullscreen"
  },
  tags: ["autodocs"],
  args: {
    label: "Accept terms and conditions",
    disabled: false
  }
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  args: {
    label: "Accept terms and conditions",
    disabled: false
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
            Component / Checkbox
          </Text>

          <Heading as="h1" size="xl">
            Checkbox handles independent boolean selection
          </Heading>

          <Text size="lg" tone="secondary" className="max-w-2xl">
            Use Checkbox for yes or no choices, confirmations and independent
            preference selection.
          </Text>
        </Stack>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack className="max-w-xl" space="4">
            <Heading size="lg">Usage</Heading>

            <Checkbox label="Accept terms and conditions" />
            <Checkbox
              label="Subscribe to updates"
              hint="You can unsubscribe at any time."
            />
            <Checkbox
              label="Validated confirmation"
              error="You must confirm before continuing."
            />
          </Stack>
        </Box>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">Guidance</Heading>

            <Stack space="2">
              <Text>• use for independent on or off choices</Text>
              <Text>• keep labels direct and unambiguous</Text>
              <Text>• do not use for mutually exclusive options</Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
};

export const States: Story = {
  args: {
    label: "Accept terms and conditions",
    disabled: false
  },
  render: () => (
    <Stack className="max-w-xl" space="4">
      <Checkbox label="Unchecked checkbox" />
      <Checkbox label="Checked checkbox" defaultChecked />
      <Checkbox
        label="Checkbox with hint"
        hint="This is additional supporting guidance."
      />
      <Checkbox
        label="Checkbox with error"
        error="You must confirm before continuing."
      />
      <Checkbox label="Disabled checkbox" disabled />
    </Stack>
  )
};