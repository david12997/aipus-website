import GoogleProvider from "next-auth/providers/google";
import type { NextAuthOptions } from "next-auth";


export const authOptions:NextAuthOptions ={
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string
    })
  ],
  session:{
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET as string,
  
}