import NextAuth from "next-auth";
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials';
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
        clientSecret: "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"
    }),
    CredentialsProvider({
        name: "Credentials",
        async authorize(credentials, req) {
          dbConnect().catch(error => { error: "Connection Failed...!" })
  
          // check user existance
          const result = await User.findOne({ username: credentials.username })
          if (!result) {
            throw new Error("username/password is invalid!!")
          }
  
          // compare()
          const checkPassword = await compare(credentials.password, result.password);
  
          // incorrect password
          if (!checkPassword || result.email !== credentials.email) {
            throw new Error("username/password is invalid!!");
          }
          _user = {
            fullName: result.fullName,
            username: result.username
          };
  
          return result;
  
        }
      }),
    // Passwordless / email sign in
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: "NextAuth.js <no-reply@example.com>",
    // }),
  ],
});
