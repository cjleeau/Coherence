import type { Preview } from "@storybook/react";
import "@coherence/tokens/css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on.*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    layout: "centered",
    backgrounds: {
      disable: true
    }
  },
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme",
      defaultValue: "light",
      toolbar: {
        icon: "paintbrush",
        items: ["light", "dark", "hc-light", "hc-dark"]
      }
    }
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme ?? "light";

      return (
        <div
          data-theme={theme}
          style={{
            minHeight: "100vh",
            padding: "24px",
            background: "var(--surface-base)",
            color: "var(--text-primary)",
            fontFamily: "var(--font-family-sans)"
          }}
        >
          <Story />
        </div>
      );
    }
  ]
};

export default preview;