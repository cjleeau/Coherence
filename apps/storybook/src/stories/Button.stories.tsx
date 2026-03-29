import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@coherence/components";
import { Inline } from "@coherence/primitives";

const meta = {
  title: "Components/Button",
  component: Button,
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

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary"
  }
};

export const Disabled: Story = {
  args: {
    variant: "secondary",
    disabled: true,
    children: "Disabled"
  }
};

export const Group: Story = {
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