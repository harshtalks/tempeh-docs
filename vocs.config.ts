import { defineConfig } from "vocs";

export default defineConfig({
  title: "Tempeh",
  sidebar: [
    {
      text: "Getting Started",
      link: "/",
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
      text: "Server Actions",
      link: "/server-actions",
    },
    {
      text: "Fetcher",
      link: "/fetcher",
    },
  ],
});
