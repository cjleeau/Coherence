import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@coherence/components";
import { Box, Heading, Inline, Stack, Text } from "@coherence/primitives";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "fullscreen"
  },
  tags: ["autodocs"],
  args: {
    children: "Button",
    variant: "primary",
    disabled: false
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["primary", "secondary"]
    }
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  args: {
    children: "Button",
    variant: "primary",
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
            Component / Button
          </Text>

          <Heading as="h1" size="xl">
            Button is the standard action component
          </Heading>

          <Text size="lg" tone="secondary" className="max-w-2xl">
            Use Button for primary and secondary actions. It is a native button
            with token-backed styling, disabled handling and keyboard support.
          </Text>
        </Stack>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">Usage</Heading>

            <Inline space="4" align="center" wrap>
              <Button variant="primary">Primary action</Button>
              <Button variant="secondary">Secondary action</Button>
              <Button variant="secondary" disabled>
                Disabled action
              </Button>
            </Inline>
          </Stack>
        </Box>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">Guidance</Heading>

            <Stack space="2">
              <Text>• use primary for the main action in a group</Text>
              <Text>• use secondary for supporting actions</Text>
              <Text>• use disabled only when action is currently unavailable</Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
};

export const States: Story = {
  args: {
    children: "Button",
    variant: "primary",
    disabled: false
  },
  render: () => (
    <Inline space="4" align="center" wrap>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="secondary" disabled>
        Disabled
      </Button>
    </Inline>
  )
};