"use server";
import * as z from "zod";
import { ServerActionError, createAction } from "tempeh";

type Email = string;
// think of it as a database
const subscribes: Email[] = [];

export const subscribeToNewsLetter = createAction({
  inputSchema: z.object({
    email: z.string().email(),
  }),
  accept: "json",
  handler: ({ email }) => {
    // check if the email is already subscribed.
    const alreadySubscribed = subscribes.includes(email);

    if (alreadySubscribed) {
      throw new ServerActionError({
        message: "Email already subscribed",
        code: "BAD_REQUEST",
      });
    }

    // add email to subscribers list

    subscribes.push(email);

    return {
      success: true,
      message: "Subscribed successfully",
    };
  },
});

import React from "react";

const code = () => {
  const [email, setEmail] = React.useState("");

  return (
    <form>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        type="submit"
        onClick={async (e) => {
          e.preventDefault();

          const { data, error } = await subscribeToNewsLetter.safe({ email });

          if (error) {
            console.error(error);
            return;
          }

          console.log(data);
        }}
      >
        Subscribe
      </button>
    </form>
  );
};

export default code;
