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
					items: [
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
					
					items: [
						{
							label: "FPV (First Person View)",
							collapsed: true,
							autogenerate: {
							collapsed: true,
								directory: "/use-cases/fpv",
							},
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
					badge: { text: "WIP", variant: "caution" },
					autogenerate: {
					collapsed: true,
						directory: "/hardware",
					},
				},
				{
					label: "Software",
					
					badge: { text: "WIP", variant: "caution" },
					autogenerate: {
						directory: "/software",
					},
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
	]
});
