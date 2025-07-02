import { defineCollection } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";

export const collections = {
  docs: defineCollection({ schema: docsSchema() }),
};
{
  label: "Resources",
  items: [
    {
      label: "OpenIPC Glossary",
      link: "/resources/openipc-glossary/",
       },
    },
  
  ],
},
