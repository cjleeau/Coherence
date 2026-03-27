import { Box, Text } from '@coherence/primitives'

export default function HomePage() {
  return (
    <main>
      <div className="section">
        <Text as="p" size="600" weight="bold" leading="100">
          Coherence
        </Text>

        <Text as="p" size="300" tone="primary">
          Token-driven, accessibility-first design system.
        </Text>

        <Box
          className="panel"
          background="surface-primary"
          borderColor="border-default"
          padding="600"
          radius="lg"
        >
          <Text as="p" size="300" tone="primary">
            Box v1 and Text v1 are now consuming token-driven primitive props.
          </Text>
        </Box>
      </div>
    </main>
  )
}