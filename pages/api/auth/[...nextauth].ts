import NextAuth from "next-auth/next";
import Providers from 'next-auth/providers/discord';
import getUser from '@/lib/getUser';
import DiscordProvider from "next-auth/providers/discord";


const scopes = ['identify'].join(' ')
export default NextAuth({
    providers: [
      DiscordProvider({
        clientId: process.env.Discord_Client,
        clientSecret: process.env.Discord_Secret,
        authorization: {params:{scope: scopes}},
      })
    ],
    
    secret: process.env.Discord_Secret,
    callbacks: {
        jwt({ token, account, user }) {
          if (account) {
            token.accessToken = account.access_token
            token.id = user?.id
          }
          return token
        },
        async redirect({ url, baseUrl }) {
          return baseUrl
        },
        async session({ session, token }) {
            const user = await getUser(token.accessToken as string);
            session.user = user;
            return session;
          },
      }
});