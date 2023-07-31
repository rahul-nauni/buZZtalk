// Adding NextAuth Session Provider
'use client';

import  { SessionProvider } from 'next-auth/react'; // NextAuth Session Provider

interface AuthContextProps {
    children: React.ReactNode;
}

export default function AuthContext({ 
    children 
}: AuthContextProps) {
    return <SessionProvider>{children}</SessionProvider>
}