import crypto from "crypto";
// import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import { NuxtAuthHandler } from "#auth";

export default NuxtAuthHandler({
  pages: {
    signIn: "/login",
  },

  secret: process.env.NUXT_SECRET,

  callbacks: {
    // Callback when the JWT is created / updated, see https://next-auth.js.org/configuration/callbacks#jwt-callback
    async jwt({ token, user }) {
      if (user) token.user = user;
      // const isSignIn = user ? true : false;
      // if (isSignIn) {
      //   token.jwt = user ? (user as any).access_token || "" : "";
      //   token.id = user ? user.id || "" : "";
      //   token.role = user ? (user as any).role || "" : "";
      // }
      return Promise.resolve(token);
    },
    // Callback whenever session is checked, see https://next-auth.js.org/configuration/callbacks#session-callback
    session: async ({ session, token }) => {
      if (token.user) (session as any).user = token.user;
      return Promise.resolve(session);
    },
  },

  providers: [
    // @ts-ignore Import is exported on .default during SSR, so we need to call it this way. May be fixed via Vite at some point
    // GithubProvider.default({
    //   clientId: process.env.GITHUB_CLIENT_ID,
    //   clientSecret: process.env.GITHUB_CLIENT_SECRET,
    // }),
    // @ts-ignore Import is exported on .default during SSR, so we need to call it this way. May be fixed via Vite at some point
    CredentialsProvider.default({
      async authorize(credentials: any) {
        const prisma = new PrismaClient();
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        const hash = crypto
          .createHash("sha256", credentials?.password)
          .digest("hex");

        if (hash === user?.password) {
          const u = {
            username: user.username,
            email: user.email,
            id: user.id,
          };
          return u;
        } else {
          // eslint-disable-next-line no-console
          console.error(
            "Warning: Malicious login attempt registered, bad credentials provided",
          );

          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  debug: true,
});
