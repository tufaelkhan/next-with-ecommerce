import { prisma } from "@/lib/db/prisma"
import { NextAuthOptions } from "next-auth"
import NextAuth from "next-auth/next"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { Adapter } from "next-auth/adapters"
import GoogleProvider  from "next-auth/providers/google"
import { env } from "@/lib/env"

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,
    providers: [
        GoogleProvider({
            clientId: env.GOOGEL_CLIENT_ID,
            clientSecret: env.GOOGEL_CLIENT_SECRET
        })
    ]
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST}