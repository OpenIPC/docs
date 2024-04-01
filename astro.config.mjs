import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.openipc.org",
  base: "/",
  integrations: [
    starlight({
      title: "Documentation",
      customCss: ["./src/tailwind.css"],
      social: {
        github: "https://github.com/OpenIPC",
      },
      logo: {
        light: "./src/assets/logo/OpenIPC__OPENIPC_logo_vertical.svg",
        dark: "./src/assets/logo/OpenIPC__OPENIPC_logo_vertical_white.svg",
      },
      editLink: {
        baseUrl: "https://github.com/OpenIPC/docs/edit/main/",
      },
      components: {
        // Relative path to the custom component.
        Head: "./src/components/Head.astro",
      },
      sidebar: [
        {
          label: "Getting Started",
          items: [
            {
              label: "About the Project",
              link: "/getting-started/introduction/",
            },
            {
              label: "Quick Start",
              link: "/getting-started/quick-start/",
            },
            {
              label: "Roadmap",
              link: "/getting-started/roadmap/",
            },
          ],
        },
        {
          label: "Use Cases",
          items: [
            {
              label: "FPV (First Person View)",
              autogenerate: {
                directory: "/use-cases/fpv",
              },
              badge: { text: "WIP", variant: "caution" },
            },
            {
              label: "Home Automation",
              autogenerate: {
                directory: "/use-cases/home-automation",
              },
              badge: { text: "WIP", variant: "caution" },
            },
            {
              label: "Video Surveillance",
              autogenerate: {
                directory: "/use-cases/video-surveillance",
              },
              badge: { text: "WIP", variant: "caution" },
            },
          ],
        },
        {
          label: "Hardware",
          items: [
            {
              label: "Supported Hardware",
              link: "/hardware/supported-devices/",
              badge: { text: "WIP", variant: "caution" },
            },
            {
              label: "Flashing Firmware",
              link: "/hardware/flashing-firmware/",
              badge: { text: "WIP", variant: "caution" },
            },
            {
              label: "Troubleshooting Guide",
              link: "/hardware/troubleshooting/",
              badge: { text: "WIP", variant: "caution" },
            },
          ],
        },
        {
          label: "Software",
          items: [
            {
              label: "Software Overview",
              link: "/software/software-overview/",
              badge: { text: "WIP", variant: "caution" },
            },
            {
              label: "Configuration Details",
              link: "/software/configuration-details/",
              badge: { text: "WIP", variant: "caution" },
            },
            {
              label: "Firmware Updates",
              link: "/software/firmware-updates/",
              badge: { text: "WIP", variant: "caution" },
            },
          ],
        },
        {
          label: "Development",
          items: [
            {
              label: "Contribution Guidelines",
              link: "/development/contribution-guidelines/",
              badge: { text: "WIP", variant: "caution" },
            },
            {
              label: "Projects & Applications",
              link: "/development/projects-applications/",
              badge: { text: "WIP", variant: "caution" },
            },
          ],
        },
        {
          label: "Resources",
          items: [
            {
              label: "Frequently Asked Questions",
              link: "/resources/faq/",
              badge: { text: "WIP", variant: "caution" },
            },
            {
              label: "Useful Links",
              link: "/resources/useful-links/",
              badge: { text: "WIP", variant: "caution" },
            },
          ],
        },
        {
          label: "Reference",
          autogenerate: {
            directory: "reference",
          },
          badge: { text: "WIP", variant: "caution" },
        },
        {
          label: "Team",
          link: "/team/",
        },
      ],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
