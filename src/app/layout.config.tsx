import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: <p className="font-serif italic text-2xl">Flux</p>
  },
  links: [
    {
      label: "Documentation",
      url: "/docs",
      text: "Documentation",
    },
    {
      label: "GitHub",
      url: "https://github.com/asrvd/flux",
      text: "GitHub",
      type: "icon",
      icon: "Github",
    },
    {
      label: "X (Twitter)",
      url: "https://x.com/flux_ao",
      text: "X (Twitter)",
      type: "icon",
      icon: "X / Twitter",
    },
  ],
};
