import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import TwitterProvider from "next-auth/providers/twitter";
import { socialRegister } from "@/services/auth";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID as string,
      clientSecret: process.env.TWITTER_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/",
  },
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async signIn({ user, account }) {
      // console.log("user", user, "account", account);
      try {
        const payload = {
          data: {
            sub: user.id,
            name: user.name,
            email: user.email,
            image: user.image,
          },
        };

        // console.log("payload", payload);

        await socialRegister(payload);
        // console.log("result", result);
        // if (result.success) {
        //   toast(result.message || "Sign in successful!");
        // } else {
        //   toast(result.message || "Sign in failed.");
        // }
      } catch (error) {
        console.error("Error saving session to backend:", error);
      }

      return true;
    },
  },
};
