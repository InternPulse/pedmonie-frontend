import { createSystem, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        body: {
          value: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
        },
        heading: {
          value: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
        },
      },
    },
  },
});

export const system = createSystem(config);
