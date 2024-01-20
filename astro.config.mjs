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
            },
            {
              label: "Home Automation",
              autogenerate: {
                directory: "/use-cases/home-automation",
              },
            },
            {
              label: "Video Surveillance",
              autogenerate: {
                directory: "/use-cases/video-surveillance",
              },
            },
          ],
        },
        {
          label: "Hardware",
          items: [
            {
              label: "Supported Hardware",
              link: "/hardware/supported-devices/",
            },
            {
              label: "Flashing Firmware",
              link: "/hardware/flashing-firmware/",
            },
            {
              label: "Troubleshooting Guide",
              link: "/hardware/troubleshooting/",
            },
          ],
        },
        {
          label: "Software",
          items: [
            {
              label: "Software Overview",
              link: "/software/software-overview/",
            },
            {
              label: "Configuration Details",
              link: "/software/configuration-details/",
            },
            {
              label: "Firmware Updates",
              link: "/software/firmware-updates/",
            },
          ],
        },
        {
          label: "Development",
          items: [
            {
              label: "Contribution Guidelines",
              link: "/development/contribution-guidelines/",
            },
            {
              label: "Projects & Applications",
              link: "/development/projects-applications/",
            },
          ],
        },
        {
          label: "Resources",
          items: [
            {
              label: "Frequently Asked Questions",
              link: "/resources/faq/",
            },
            {
              label: "Useful Links",
              link: "/resources/useful-links/",
            },
          ],
        },
        {
          label: "Reference",
          autogenerate: {
            directory: "reference",
          },
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
