import type { Meta, StoryObj } from "@storybook/react";
import { Button, FormActions } from "@coherence/components";
import { Box, Heading, Stack, Text } from "@coherence/primitives";

const meta = {
  title: "Components/FormActions",
  component: FormActions,
  parameters: {
    layout: "fullscreen"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof FormActions>;

export default meta;

type Story = StoryObj<typeof meta>;

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
      <Stack className="mx-auto max-w-4xl" space="8">
        <Stack as="header" space="4">
          <Text size="sm" tone="secondary">
            Component / FormActions
          </Text>

          <Heading as="h1" size="xl">
            FormActions groups related form action buttons
          </Heading>

          <Text size="lg" tone="secondary" className="max-w-2xl">
            Use FormActions to keep submit, cancel, save and continue actions in
            a consistent row at the end of a form or section.
          </Text>
        </Stack>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">Usage</Heading>

            <FormActions>
              <Button variant="secondary">Cancel</Button>
              <Button variant="secondary">Save draft</Button>
              <Button variant="primary">Submit</Button>
            </FormActions>
          </Stack>
        </Box>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">Guidance</Heading>

            <Stack space="2">
              <Text>• group related actions together</Text>
              <Text>• make the primary path obvious</Text>
              <Text>• keep button order predictable</Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
};

export const States: Story = {
  render: () => (
    <Stack className="max-w-3xl" space="5">
      <FormActions>
        <Button variant="secondary">Cancel</Button>
        <Button variant="primary">Submit</Button>
      </FormActions>

      <FormActions>
        <Button variant="secondary">Back</Button>
        <Button variant="secondary">Save draft</Button>
        <Button variant="primary">Continue</Button>
      </FormActions>
    </Stack>
  )
};