import type { Meta, StoryObj } from '@storybook/react-vite'
import { Box } from './box'

const meta = {
  title: 'Primitives/Box',
  component: Box,
  tags: ['autodocs']
} satisfies Meta<typeof Box>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Coherence primitive'
  }
}