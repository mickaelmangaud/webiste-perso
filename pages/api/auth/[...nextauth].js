import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { PrismaClient } from '@prisma/client';
import Adapters from 'next-auth/adapters';

const prisma = new PrismaClient();

const options = {
	// Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXT_AUTH_SECRET,
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    encryption: true,
  },
  pages: {},
  callbacks: {
    jwt: async (token, user, account, profile, isNewUser) => {
      /* Pb with account linking, see : https://github.com/nextauthjs/next-auth/issues/625 */
      const isSignIn = user ? true : false;
      if (isSignIn) {
        token = {
          ...token,
          email: profile.email,
          name: profile.given_name,
          image: profile.picture
        }
      }
      return Promise.resolve(token);
    },
    session: async (session, user) => {
      /* Pb with account linking, see : https://github.com/nextauthjs/next-auth/issues/625 */
      session.user = user
      return Promise.resolve(session)
    }
  },
  events: {},
  adapter: Adapters.Prisma.Adapter({ prisma }),
};

export default (req, res) => NextAuth(req, res, options);
