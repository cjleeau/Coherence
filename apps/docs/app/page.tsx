"use client";

import { useEffect, useState } from "react";
import { Box, Text, Heading, Stack, Inline } from "@coherence/primitives";

const THEMES = ["light", "dark", "hc-light", "hc-dark"] as const;
type Theme = (typeof THEMES)[number];

export default function Page() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <Box className="min-h-screen bg-surface-base text-text-primary p-8 font-sans">
      <Stack className="mx-auto max-w-3xl" space="8">
        {/* Header */}
        <Stack as="header" space="4">
          <Text size="sm" tone="secondary">
            Coherence / Primitives Foundation
          </Text>

          <Heading as="h1" size="xl">
            Box, Text, Heading, Stack and Inline are live
          </Heading>

          <Text size="lg" tone="secondary" className="max-w-2xl">
            This validates structure, typography, vertical rhythm and horizontal alignment against the token system.
          </Text>
        </Stack>

        {/* Theme switch */}
        <Inline space="3" wrap>
          {THEMES.map((t) => {
            const active = t === theme;

            return (
              <button
                key={t}
                onClick={() => setTheme(t)}
                className={[
                  "px-4 py-2 rounded-lg border text-sm transition",
                  active
                    ? "bg-action-primary text-action-primaryText border-border-strong"
                    : "bg-surface-raised text-text-primary border-border-subtle hover:border-border-strong"
                ].join(" ")}
              >
                {t}
              </button>
            );
          })}
        </Inline>

        {/* Content card */}
        <Box className="rounded-xl border border-border-subtle bg-surface-raised p-6">
          <Stack space="6">
            {/* Text system */}
            <Stack space="3">
              <Text>
                Primary body text through the Text primitive.
              </Text>

              <Text tone="secondary">
                Secondary text through semantic tone mapping.
              </Text>

              <Text tone="muted" size="sm">
                Muted supporting text through the same primitive.
              </Text>
            </Stack>

            {/* Heading scale */}
            <Stack space="2">
              <Heading size="4xl">Heading 4xl</Heading>
              <Heading size="3xl">Heading 3xl</Heading>
              <Heading size="2xl">Heading 2xl</Heading>
              <Heading size="xl">Heading xl</Heading>
              <Heading size="lg">Heading lg</Heading>
            </Stack>

            {/* Inline layout */}
            <Inline space="4" align="center" wrap>
              <Box className="rounded-lg bg-action-primary px-4 py-3 text-action-primaryText">
                Primary action
              </Box>

              <Box className="rounded-lg border border-border-strong bg-surface-sunken px-4 py-3 text-text-primary">
                Secondary container
              </Box>

              <Text tone="secondary" size="sm">
                Inline keeps horizontal rhythm consistent.
              </Text>
            </Inline>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}