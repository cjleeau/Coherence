import { Text } from './text'

const meta = {
  title: 'Primitives/Text',
  component: Text,
//  tags: ['autodocs'],
  args: {
    children: 'Coherence text primitive',
    tone: 'primary',
    size: '300',
    weight: 'regular',
    leading: '300',
    as: 'p'
  }
}

export default meta

export const Default = {}

export const Strong = {
  args: {
    children: 'Bold text for emphasis',
    weight: 'bold'
  }
}

export const Secondary = {
  args: {
    children: 'Secondary text tone',
    tone: 'secondary'
  }
}

export const Large = {
  args: {
    children: 'Large display-style text',
    size: '600',
    weight: 'bold',
    leading: '100'
  }
}