"use client";

import { useEffect, useState } from "react";
import { Button, Field, Checkbox } from "@coherence/components";
import { Box, Text, Heading, Stack, Inline } from "@coherence/primitives";

const THEMES = ["light", "dark", "hc-light", "hc-dark"] as const;
type Theme = (typeof THEMES)[number];

const PRIMITIVES_COMPLETE = ["Box", "Stack", "Inline", "Text", "Heading"] as const;
const COMPONENTS_COMPLETE = ["Button", "Field", "Checkbox"] as const;
const NEXT_UP = ["Textarea", "Select", "FieldGroup"] as const;

export default function Page() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
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
            Coherence / Dev Page
          </Text>

          <Heading as="h1" size="xl">
            Current build state
          </Heading>

          <Text size="lg" tone="secondary" className="max-w-2xl">
            This page is for validating what is complete now and making the next
            phase obvious.
          </Text>
        </Stack>

        <Inline space="3" wrap>
          {THEMES.map((t) => {
            const active = t === theme;

            return (
              <Button
                key={t}
                onClick={() => setTheme(t)}
                variant={active ? "primary" : "secondary"}
              >
                {t}
              </Button>
            );
          })}
        </Inline>

        <Inline space="6" align="start" wrap>
          <Box className="min-w-[260px] flex-1 rounded-xl p-6" surface="raised" border="subtle">
            <Stack space="4">
              <Heading size="lg">Complete now</Heading>

              <Stack space="2">
                <Text weight="semibold">Primitives</Text>

                <Stack space="2">
                  {PRIMITIVES_COMPLETE.map((item) => (
                    <Box key={item} className="rounded-lg px-3 py-2" surface="sunken" border="subtle">
                      <Text>{item}</Text>
                    </Box>
                  ))}
                </Stack>
              </Stack>

              <Stack space="2">
                <Text weight="semibold">Components</Text>

                <Stack space="2">
                  {COMPONENTS_COMPLETE.map((item) => (
                    <Box key={item} className="rounded-lg px-3 py-2" surface="sunken" border="subtle">
                      <Text>{item}</Text>
                    </Box>
                  ))}
                </Stack>
              </Stack>
            </Stack>
          </Box>

          <Box className="min-w-[260px] flex-1 rounded-xl p-6" surface="raised" border="subtle">
            <Stack space="4">
              <Heading size="lg">Next phase</Heading>

              <Stack space="2">
                {NEXT_UP.map((item) => (
                  <Box key={item} className="rounded-lg px-3 py-2" surface="sunken" border="subtle">
                    <Text>{item}</Text>
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Box>
        </Inline>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="5">
            <Heading size="lg">Live validation</Heading>

            <Inline space="4" align="center" wrap>
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="secondary" disabled>
                Disabled Button
              </Button>
            </Inline>

            <Stack space="4">
              <Field
                label="Email"
                type="email"
                placeholder="you@example.com"
                hint="Use your work email address."
              />

              <Field
                label="Project name"
                placeholder="Coherence Design System"
                defaultValue="Coherence"
              />

              <Field
                label="Account ID"
                placeholder="Enter account ID"
                error="Account ID is required."
              />

              <Checkbox label="Accept terms and conditions" />

              <Checkbox
                label="Subscribe to updates"
                hint="You can unsubscribe at any time."
              />

              <Checkbox label="Disabled option" disabled />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}