import type { Preview } from '@storybook/react'
import '../src/storybook.css'

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i
      }
    }
  }
}

export default preview