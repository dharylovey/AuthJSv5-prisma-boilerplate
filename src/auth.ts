import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import Google from "next-auth/providers/google"
import GitHub from "next-auth/providers/github";
import { Adapter } from 'next-auth/adapters'

const prisma = new PrismaClient()

export const { handlers, auth, signIn, signOut } = NextAuth({
  trustHost: true,
  theme: {
    logo: '/next.svg'
  },
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [Google, GitHub,],
  callbacks: {
    session({ session, user }) {
      session.user.role = user.role
      return session
    }
  }
})