import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

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
					collapsed: true,
					items: [
					    {
					        label: "Homepage",
					        link: "/getting-started/homepage",
					    },
						{
							label: "About the Project",
							link: "/getting-started/introduction/",
						},
						{
							label: "Quick Start",
							link: "/getting-started/quick-start/",
							badge: { text: "WIP", variant: "caution" },
						},
						{
							label: "Roadmap",
							link: "/getting-started/roadmap/",
						},
					],
				},
				{
					label: "Use Cases",
					collapsed: true,
					items: [
						{
							label: "FPV (First Person View)",
							collapsed: true,
							items: [
							    {
							        label: "Net cards",
							        collapsed: true,
							        autogenerate: {
								        directory: "/use-cases/fpv/net-cards",
							        },
						        },
						        {
							        label: "WFB-NG",
							        collapsed: true,
							        autogenerate: {
						            		directory: "/use-cases/fpv/wfb-ng",
							        },
						        },
						        {
							        label: "APFPV",
							        collapsed: true,
							        autogenerate: {
								        directory: "/use-cases/fpv/apfpv",
							        },
						        },
					    ],
							badge: { text: "WIP", variant: "caution" },
						},
						{
							label: "Home Automation",
							collapsed: true,
							autogenerate: {
								directory: "/use-cases/home-automation",
							},
							badge: { text: "WIP", variant: "caution" },
						},
						{
							label: "Video Surveillance",
							collapsed: true,
							autogenerate: {
								directory: "/use-cases/video-surveillance",
							},
							badge: { text: "WIP", variant: "caution" },
						},
					],
				},
				{
					label: "Hardware",
					collapsed: true,
					autogenerate: {
					collapsed: true,
						directory: "/hardware",
					},
				},
				{
					label: "Software",
					collapsed: true,
					autogenerate: {
						directory: "/software",
					},
				},
				{
					label: "Development",
					collapsed: true,
					items: [
						{
							label: "Contribution Guidelines",
							link: "/development/contribution-guidelines/",
						},
						{
							label: "Projects & Applications",
							link: "/development/projects-applications/",
							badge: { text: "WIP", variant: "caution" },
						},
						{
							label: "Webface Guide",
							link: "/development/webface-guide/",
							badge: { text: "WIP", variant: "caution" },
						},
					],
				},
				{
					label: "Resources",
					collapsed: true,
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
					collapsed: true,
					autogenerate: {
					collapsed: true,
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
	redirects: {
    "/": "/getting-started/homepage",
  }
});
