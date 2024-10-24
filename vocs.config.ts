import { defineConfig } from "vocs";

export default defineConfig({
  title: "Tempeh 🧀",
  sidebar: [
    {
      text: "Getting Started",
      link: "/",
    },
    {
      text: "About Tempeh",
      link: "/description",
    },
    {
      text: "Router Config API",
      link: "/router-config",
    },
    {
      text: "Routes",
      link: "/route",
    },
    {
      text: "Params and Search Params",
      link: "/params",
    },
    {
      text: "CLI",
      link: "/cli",
    },
    {
      text: "Server Actions",
      link: "/server-actions",
    },
    {
      text: "Version 5 Update",
      link: "/update",
    },
  ],
  description:
    "Type-safe, declarative, and flexible routing for Next.js applications.",
  editLink: {
    pattern: "https://github.com/harshtalks/tempeh-docs",
    text: "Suggest changes to this page",
  },
  socials: [
    {
      icon: "github",
      link: "https://github.com/harshtalks/tempeh",
    },
    {
      icon: "x",
      link: "https://x.com/harshicorp",
    },
  ],
  topNav: [
    { text: "Tempeh CLI", link: "https://github.com/harshtalks/tempeh-cli" },
    {
      text: "Docs Github",
      link: "https://github.com/harshtalks/tempeh-docs",
    },
    { text: "Get Started", link: "/description" },
  ],
  ogImageUrl: {
    "/": "https://res.cloudinary.com/hp-creative/image/upload/v1729781355/Image_from_imgsrc_5_hjy9qk.png",
  },
});
