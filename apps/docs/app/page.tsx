"use client";

import { useEffect, useState } from "react";
import {
  Button,
  Field,
  Checkbox,
  Textarea,
  Select,
  FieldGroup,
  FormActions
} from "@coherence/components";
import { Box, Text, Heading, Stack, Inline } from "@coherence/primitives";

const THEMES = ["light", "dark", "hc-light", "hc-dark"] as const;
type Theme = (typeof THEMES)[number];

const PRIMITIVES_COMPLETE = ["Box", "Stack", "Inline", "Text", "Heading"] as const;
const COMPONENTS_COMPLETE = [
  "Button",
  "Field",
  "Checkbox",
  "Textarea",
  "Select",
  "FieldGroup",
  "FormActions"
] as const;
const NEXT_UP = ["Merge components baseline", "Storybook or docs expansion"] as const;

const ROLE_OPTIONS = [
  { label: "Designer", value: "designer" },
  { label: "Engineer", value: "engineer" },
  { label: "Product Manager", value: "product-manager" }
] as const;

const ENVIRONMENT_OPTIONS = [
  { label: "Development", value: "development" },
  { label: "Staging", value: "staging" },
  { label: "Production", value: "production" }
] as const;

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
      <Stack className="mx-auto max-w-5xl" space="8">
        <Stack as="header" space="4">
          <Text size="sm" tone="secondary">
            Coherence / Dev Page
          </Text>

          <Heading as="h1" size="xl">
            Current build state
          </Heading>

          <Text size="lg" tone="secondary" className="max-w-2xl">
            This page validates the current primitives and components baseline,
            with grouped form sections and consistent action layout.
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
          <Box
            className="min-w-[260px] flex-1 rounded-xl p-6"
            surface="raised"
            border="subtle"
          >
            <Stack space="4">
              <Heading size="lg">Complete now</Heading>

              <Stack space="2">
                <Text weight="semibold">Primitives</Text>

                <Stack space="2">
                  {PRIMITIVES_COMPLETE.map((item) => (
                    <Box
                      key={item}
                      className="rounded-lg px-3 py-2"
                      surface="sunken"
                      border="subtle"
                    >
                      <Text>{item}</Text>
                    </Box>
                  ))}
                </Stack>
              </Stack>

              <Stack space="2">
                <Text weight="semibold">Components</Text>

                <Stack space="2">
                  {COMPONENTS_COMPLETE.map((item) => (
                    <Box
                      key={item}
                      className="rounded-lg px-3 py-2"
                      surface="sunken"
                      border="subtle"
                    >
                      <Text>{item}</Text>
                    </Box>
                  ))}
                </Stack>
              </Stack>
            </Stack>
          </Box>

          <Box
            className="min-w-[260px] flex-1 rounded-xl p-6"
            surface="raised"
            border="subtle"
          >
            <Stack space="4">
              <Heading size="lg">Next phase</Heading>

              <Stack space="2">
                {NEXT_UP.map((item) => (
                  <Box
                    key={item}
                    className="rounded-lg px-3 py-2"
                    surface="sunken"
                    border="subtle"
                  >
                    <Text>{item}</Text>
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Box>
        </Inline>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="6">
            <Heading size="lg">Live validation</Heading>

            <Inline space="4" align="center" wrap>
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="secondary" disabled>
                Disabled Button
              </Button>
            </Inline>

            <Stack space="5">
              <FieldGroup
                title="Basic fields"
                description="Single-line inputs for account and project metadata."
              >
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
              </FieldGroup>

              <FieldGroup
                title="Choices"
                description="Boolean and list-based selection patterns."
              >
                <Checkbox label="Accept terms and conditions" />

                <Checkbox
                  label="Subscribe to updates"
                  hint="You can unsubscribe at any time."
                />

                <Checkbox label="Disabled option" disabled />

                <Select
                  label="Role"
                  options={[...ROLE_OPTIONS]}
                  placeholder="Select a role"
                  defaultValue=""
                  hint="Choose the primary role for this user."
                />

                <Select
                  label="Environment"
                  options={[...ENVIRONMENT_OPTIONS]}
                  defaultValue="staging"
                />

                <Select
                  label="Release target"
                  options={[...ENVIRONMENT_OPTIONS]}
                  placeholder="Select a target"
                  defaultValue=""
                  error="Release target is required."
                />
              </FieldGroup>

              <FieldGroup
                title="Long-form input"
                description="Multi-line content and implementation notes."
              >
                <Textarea
                  label="Project summary"
                  placeholder="Write a short summary..."
                  hint="Keep it brief and clear."
                />

                <Textarea
                  label="Implementation notes"
                  defaultValue="Primitive layer complete. Components now in progress."
                  rows={5}
                />

                <Textarea
                  label="Risk notes"
                  placeholder="Document any issues here..."
                  error="Risk notes are required."
                />
              </FieldGroup>

              <FieldGroup
                title="Validation patterns"
                description="Consistent error and helper messaging across controls."
              >
                <Field
                  label="Validated email"
                  type="email"
                  placeholder="name@company.com"
                  error="Please enter a valid work email."
                />

                <Select
                  label="Validated environment"
                  options={[...ENVIRONMENT_OPTIONS]}
                  placeholder="Select an environment"
                  defaultValue=""
                  error="Environment selection is required."
                />

                <Textarea
                  label="Validated description"
                  placeholder="Enter a description..."
                  error="Description must be provided."
                />

                <Checkbox
                  label="Validated confirmation"
                  error="You must confirm before continuing."
                />
              </FieldGroup>

              <FormActions>
                <Button variant="secondary">Cancel</Button>
                <Button variant="secondary">Save draft</Button>
                <Button variant="primary">Submit</Button>
              </FormActions>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}