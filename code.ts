import * as z from "zod";
import { routeBuilder } from "tempeh";

// Ideally this must be in the route.config.ts file but for example, we have shown it here
const { createRoute } = routeBuilder.getInstance({
  additionalBaseUrls: {
    APP: "https://app.example.com",
    API: "https://api.example.com",
  },
  defaultBaseUrl: "/",
  formattedValidationErrors: true,
});

const HomePageRoute = createRoute({
  name: "home-page",
  fn: () => "/",
  paramsSchema: z.object({}),
  baseUrl: "APP",
});

export default HomePageRoute;
