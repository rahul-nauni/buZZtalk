import bcrypt from 'bcrypt';
import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

import prisma from '@/app/libs/prismadb';

// This is a server side function, so we can use the prisma client here
export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID as string,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text'},
                password: { label: 'Password', type: 'password'}
            },
            async authorize(credentials) { 
                // check if user exists
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('Missing credentials');
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });
                // If the email is not found or the password is incorrect or the user has used a third party provider
                if (!user || !user?.hashedPassword) {
                    throw new Error('Invalid credentials');
                }
                
                const isValidPassword = await bcrypt.compare(
                    credentials.password, 
                    user.hashedPassword
                );
                // check if user entered correct password
                if (!isValidPassword) {
                    throw new Error('Invalid credentials');
                }

                return user;
            }
        })
    ],
    debug: process.env.NODE_ENV === 'development', // displat debug messages in development
    session: {
        strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

// export default handler;
export { handler as GET, handler as POST};