import { Box } from './box'

const meta = {
  title: 'Primitives/Box',
  component: Box,
 // tags: ['autodocs'],
  args: {
    children: 'Coherence primitive',
    padding: '400',
    radius: 'md',
    background: 'surface-primary',
    borderColor: 'border-default'
  }
}

export default meta

export const Default = {}

export const Spacious = {
  args: {
    children: 'Larger padding and radius',
    padding: '700',
    radius: 'xl'
  }
}