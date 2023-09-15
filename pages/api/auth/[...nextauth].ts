import NextAuth from "next-auth/next";
import Providers from 'next-auth/providers/discord';
import config from '@/config.json';
import getUser from '@/lib/getUser';


const scopes = ['identify'].join(' ')
export default NextAuth({
    providers: [
        Providers({
            clientId: config.Discord.client,
            clientSecret: config.Discord.secret,
            authorization: {params:{scope: scopes}},
            token: "https://discord.com/api/oauth2/token",
            userinfo: "https://discord.com/api/users/@me",
        })
    ],
    
    secret: config.Discord.secret,
    callbacks: {
        jwt({ token, account, user }) {
          if (account) {
            token.accessToken = account.access_token
            token.id = user?.id
          }
          return token
        },
        async session({ session, token }) {
            const user = await getUser(token.accessToken as string);
            session.user = user;
            return session;
          },
      }
});