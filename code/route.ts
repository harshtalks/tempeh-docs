import * as z from "zod";
import { createRoute } from "tempeh";

const HomePageRoute = createRoute({
  name: "home-page",
  fn: () => "/",
  paramsSchema: z.object({}),
  options: {
    internal: true,
  },
});

export default HomePageRoute;
