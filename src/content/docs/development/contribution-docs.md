---
title: Contributing to the docs
description: A guide to help anyone contribute to OpenIPC's docs.
---

# Contributing to the OpenIPC Documentation

Thank you for contributing to the OpenIPC documentation! This guide will walk you through two main ways to contribute: **adding a new page** and **editing an existing page**. There’s also a section for setting up a local development environment if you want to test the site locally. 

For local development, we use a `.node-version` file to ensure the correct version of Node.js is used. If you want to test your changes locally, you will need to install Node.js, Yarn, and a Node version manager.

---

## Adding a New Page

### 1. Clone the Repository
- Clone the OpenIPC documentation repository to your local machine by running the following command:
  ```bash
  git clone https://github.com/OpenIPC/docs.git
  ```

- Navigate into the project directory:
  ```bash
  cd docs
  ```

### 2. Create a New Branch
- Create a new branch to work on your changes:
  ```bash
  git checkout -b add-new-page
  ```

### 3. Choose the Right Section to Add Your Page

Use the following table to determine where to add your new page based on its content:

| **Section**        | **Description**                                                                            | **Directory**                        | **Sidebar Behavior**              |
|--------------------|--------------------------------------------------------------------------------------------|--------------------------------------|-----------------------------------|
| **Getting Started** | Introductory content such as project overview, roadmap, and setup instructions.            | `src/content/docs/getting-started/`  | Manual configuration required     |
| **Use Cases**       | Guides related to FPV, home automation, and video surveillance use cases.                  | `src/content/docs/use-cases/`        | Autogenerate enabled              |
| **Hardware**        | Documentation about OpenIPC hardware components and configurations.                        | `src/content/docs/hardware/`         | Autogenerate enabled              |
| **Software**        | Documentation about software features and installations.                                   | `src/content/docs/software/`         | Autogenerate enabled              |
| **Development**     | Contributing guides, application projects, and development tools.                          | `src/content/docs/development/`      | Manual configuration required     |
| **Resources**       | FAQs, useful links, and general references.                                                | `src/content/docs/resources/`        | Manual configuration required     |
| **Reference**       | Technical references and specifications related to the project.                            | `src/content/docs/reference/`        | Autogenerate enabled              |

### 4. Add Your New Page
- Navigate to the appropriate folder based on the section you are contributing to (e.g., `src/content/docs/development/`).
- Create a new `.md` file for your page. For example:
  ```bash
  touch src/content/docs/development/new-feature-guide.md
  ```
:::danger
Please make sure the name of the file is in snake-case (no uppercase letters and uses '-'). This will become later the url of the page.  
Do not forget to add the '.md' extension, so the site knows how to handle the file.

### 5. Add Frontmatter to Your Page
At the top of the new markdown file, include the required frontmatter. This helps Starlight process the page correctly.

```yaml
---
title: "New Feature Guide"
description: "A guide to the new feature introduced in the latest release."
---
```

- `title`: The title of your new page (appears in the navigation and as the page header).
- `description`: A brief summary of the page content.

### 6. Write Your Content
You can now add your content using Markdown. Here's a basic example:

```markdown
# New Feature Guide

This guide will walk you through the new feature introduced in the latest release of OpenIPC.

## Key Features

- Improved UI for better user experience
- Enhanced security protocols
- Support for additional camera models

### How to Enable the Feature

1. Open the OpenIPC dashboard.
2. Navigate to **Settings > Features**.
3. Enable the **New Feature** toggle.

For more details, check the [official documentation](https://docs.openipc.org).
```

### 7. Add Your Page to the Sidebar Navigation (If Required)

**Important**: If your page is part of a directory that has `autogenerate` enabled in the sidebar configuration (such as `use-cases`, `hardware`, `software`, or `reference`), you do **not** need to manually add your page to the sidebar. It will be automatically included.

However, for directories that do **not** use `autogenerate`, like `getting-started`, `development`, and `resources`, you'll need to manually add your page to the sidebar. Follow these steps:

- Open the `src/content/docs/config.ts` file.
- Add your new page to the appropriate section in the sidebar navigation. For example, if you added a new feature guide under "Development", you would update the config like this:
  
  ```typescript
  {
    label: "Development",
    items: [
      {
        label: "Contribution Guidelines",
        link: "/development/contribution-guidelines/",
        badge: { text: "WIP", variant: "caution" },
      },
      {
        label: "New Feature Guide",  // Your new page
        link: "/development/new-feature-guide/",
      },
    ],
  },
  ```

### 8. Commit Your Changes
Once you are satisfied with your new page, commit your changes:
```bash
git add .
git commit -m "Add new feature guide to development section"
```

### 9. Push to GitHub
Push your branch to the repository on GitHub:
```bash
git push origin add-new-page
```

### 10. Open a Pull Request
- Go to the repository on GitHub and open a Pull Request (PR) from your `add-new-page` branch to the `main` branch.
- In the PR description, briefly explain what changes you've made (e.g., "Added a new feature guide under the development section").
- Submit the PR for review.

---

## Editing an Existing Page

### 1. Navigate to the Page You Want to Edit
- Go to the [OpenIPC documentation site](https://docs.openipc.org).
- Find the page that you want to edit and click the **Edit page** button, as shown below:

![Edit Page Button](file-N2M9hUoQnicS6Iiuy7xPiO68)

This will take you directly to the corresponding markdown file in the GitHub repository.

### 2. Edit the Page on GitHub
You’ll be taken to the GitHub editor, where you can make changes directly to the file. The frontmatter at the top of the file contains important metadata (such as the title and description).

For example:

![Editing the Page in GitHub](file-ma4rgPGbVYvpsTFMBI7zqjX0)

### 3. Propose Your Changes
Once you've made your edits:
- Scroll down to the **Propose changes** section.
- Add a short commit message that describes the update.
- Choose whether you want to commit directly to the main branch or create a new branch for the changes.

![Proposing Changes](file-5ntGecYmEj9Prak4NKMJUWtp)

### 4. Create a Pull Request (If Necessary)
If you've created a new branch, click **Propose changes** to start a Pull Request (PR). In the PR description, explain what changes you made and why.

Once submitted, your changes will be reviewed by a maintainer and, if approved, merged into the main branch.

---

## Setting Up Local Development (Optional)

If you want to see how the site looks with your changes or make more extensive updates (such as design changes), you can set up the project locally. This step is **not required** for basic edits or adding pages, but it’s helpful if you want to test things out locally.

### 1. Install Node.js and Yarn

Since the project uses a `.node-version` file, you’ll need to use the correct Node.js version. We recommend using a Node.js version manager like `nvm` or `fnm`.

- **Install Node.js with `nvm`**: Follow the instructions on the [nvm GitHub repository](https://github.com/nvm-sh/nvm).
- **Install Node.js with `fnm`**: Follow the instructions on the [fnm GitHub repository](https://github.com/Schniz/fnm).

Once you have Node.js installed, you can install Yarn:
- Follow the installation instructions on the [official Yarn website](https://classic.yarnpkg.com/en/docs/install/).

### 2. Install Dependencies
- Navigate into the project directory:
  ```bash
  cd docs
  ```
- Install the project dependencies using Yarn:
  ```bash
  yarn install
  ```

### 3. Start the Development Server
- To preview your changes, run the Astro development server:
  ```bash
  yarn dev
  ```
  This will run the site locally at `http://localhost:3000`, where you can see your changes in real-time.

### 4. Make Changes Locally
- You can now make changes to the files and see how they look on your local server.

---

## Additional Resources

- For more details on adding pages, visit the official Starlight documentation on [Adding Pages](https://starlight.astro.build/guides/pages/).
- For authoring content guidelines, see the [Authoring Content Guide](https://starlight.astro.build/guides/authoring-content/).
