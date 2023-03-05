import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import dbConnect from "../../../lib/dbConnect";
import User from "../../../model/user";

var _authUser = null;
export default NextAuth({
  providers: [
    // OAuth authentication providers...
    FacebookProvider({
      //   clientId: process.env.FACEBOOK_ID,
      clientId: "3739866859573227",
      //   clientSecret: process.env.FACEBOOK_SECRET,
      clientSecret: "29ea9f7715bdf934d123c7a918d7f01b",
    }),
    GoogleProvider({
      clientId: "370977605370-qjbmlavnmfn1tc3a41d0p1usbv1g8e4o.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        // check user existance
        User.GetByUsername(credentials.username, async (err, userData) => {
          if (err) {
            throw new Error("username/password is invalid!!");
          } else {
            //Compare Password
            const checkPass = await compare(credentials.password, userData[0].password);
            if (checkPass) {
              console.log(checkPass);

              _authUser = userData[0];
              delete _authUser.password;
              console.log(_authUser);
              return true;
            }
            throw new Error("username/password is invalid!!");
          }
        });
        return true
      },
    }),
  ],
  secret: "XH6bp/TkLvnUkQiPDEZNyHc0CV+VV5RL/n+HdVHoHN0=",
  session: {
    strategy: "jwt",
    maxAge: 3000,
  },
  callbacks: {
    async session({ session, token, user }) {
      session.user = token.user;
      // you might return this in new version
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },
});
