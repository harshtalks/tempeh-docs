import * as z from "zod";
import { createEndPoint, createRoute } from "tempeh";

// we will create our route config here

const getTodos = createEndPoint(
  {
    httpMethod: "GET",
    path: createRoute({
      name: "getTodos",
      paramsSchema: z.object({ id: z.number() }),
      fn: ({ id }) => `/todos/${id}`,
      options: {
        internal: false,
        baseUrl: "https://jsonplaceholder.typicode.com",
      },
    }),
    SafeResponse: true,
    response: z.array(
      z.object({
        id: z.number(),
        title: z.string(),
        completed: z.boolean(),
      })
    ),
    requestConfig: {
      headers: {
        "Content-Type": "application/json",
      },
    },
  },
  {
    prettierValidationError: true,
    overrideStatusCodeErrors: {
      404: ({ code, defaultErrorMessage }) =>
        `the api threw error with code ${code} and message ${defaultErrorMessage}`,
    },
  }
);

(async () => {
  const todo = await getTodos({ params: { id: 1 } });
  console.log(todo);
})();
