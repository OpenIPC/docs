import { getCollection } from "astro:content";
import { OGImageRoute } from "astro-og-canvas";

// Get all entries from the `docs` content collection.
const entries = await getCollection("docs");

// Map the entry array to an object with the page ID as key and the
// frontmatter data as value.
const pages = Object.fromEntries(entries.map(({ data, id }) => [id, { data }]));

export const { getStaticPaths, GET } = OGImageRoute({
  // Pass down the documentation pages.
  pages,
  // Define the name of the parameter used in the endpoint path, here `slug`
  // as the file is named `[...slug].ts`.
  param: "slug",
  // Define a function called for each page to customize the generated image.
  getImageOptions: (_path, page: (typeof pages)[number]) => {
    return {
      // Use the page title and description as the image title and description.
      title: page.data.title,
      description: page.data.description,
      // Customize various colors and add a border.
      logo: {
        path: "./src/assets/logo/OpenIPC__OPENIPC_logo_vertical_white.png",
        size: [120], // Modify the size to have exactly two elements.
      },
      bgGradient: [
        [76, 96, 216],
        [31, 40, 92],
      ],
      border: { color: [255, 255, 255], width: 20 },
      padding: 60,
      fonts: ["./src/fonts/Poppins-Bold.ttf", "./src/fonts/Poppins-Medium.ttf"],
      font: {
        title: {
          weight: "Black",
          families: ["Poppins", "sans-serif"],
          lineHeight: 1.6,
        },
        description: {
          weight: "Medium",
          families: ["Poppins", "sans-serif"],
          lineHeight: 1.5,
        }
      }
    };
  },
});
