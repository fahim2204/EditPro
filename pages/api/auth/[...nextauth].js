import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from 'bcryptjs';
import dbConnect from "../../../lib/dbConnect";
import User from "../../../model/user";

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
      clientId:
        "370977605370-qjbmlavnmfn1tc3a41d0p1usbv1g8e4o.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
  
        // check user existance
        User.GetByUsername(credentials.username, async (err, userData) => {
          if (err) {
            throw new Error("username/password is invalid!!")
          } else {
             //Compare Password
             const checkPass = await compare(credentials.password, userData[0].password);
             if (checkPass) {
               console.log(checkPass);
           
              req.body.lastLogin = new Date();
              delete req.body.password;

              // Change All key Value to Snake Case For DB
              // req.body = changeObjToSnake(req.body);

              // Process Register User
              // User.Update(user[0].id, req.body, (err, data) => {
              //   err
              //     ? res.status(400).send(err)
              //     : res.status(200).json({ success: true, msg: "Login success!!", token: req.body.token });
              // });
            } else {
              // throw new Error("username/password is invalid!!")
              return false;
            }
              // res.status(200).send(changeObjToCamel(newData[0]));
          }
      });
       


        // // compare()
        // const checkPassword = await compare(
        //   credentials.password,
        //   result.password
        // );

        // // incorrect password
        // if (!checkPassword || result.email !== credentials.email) {
        //   throw new Error("username/password is invalid!!");
        // }
        // _user = {
        //   fullName: result.fullName,
        //   username: result.username,
        // };

        // return result;
      },
    }),
    // Passwordless / email sign in
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: "NextAuth.js <no-reply@example.com>",
    // }),
  ],
});
