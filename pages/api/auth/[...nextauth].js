import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";

import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import dbConnect from "../../../lib/dbConnect";
import User from "../../../model/user";

export default NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = await new Promise((resolve, reject) => {
          User.GetByUsername(credentials.username, (err, userData) => {
            if (err) {
              reject(err);
            } else {
              resolve(userData[0]);
            }
          });
        });

        // console.log("Server: user>>", user);

        if (user) {
          // IF the user OBJ contains a password then it will be returned null
          return {email:user.username,name:user.full_name};
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
  ],
  secret: "XH6bp/TkLvnUkQiPDEZNyHc0CV+VV5RL/n+HdVHoHN0=",
  session: {
    strategy: "jwt",
    maxAge: 3000,
  },
  // callbacks: {
  //   async session({ session, token, user }) {
  //     if (token && token.userData) {
  //       // Add the user data to the session
  //       session.user = token.user;
  //     }
      
  //     return session;
  //   },
  // },
  // async jwt({ token, account, profile, user }) {
  //   if (user) {
  //     // Send the user data to the client side
  //     token.user = {name:"fahim FAisal"};
  //   }

  //   return token;
  // },
});
