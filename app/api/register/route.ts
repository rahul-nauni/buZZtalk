import bcrypt from 'bcrypt';

import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(
    request: Request
) { 
    try {
        const body = await request.json();
        const { name, email, password } = body;

        // check for missing info 
        if (!name || !email || !password) {
            return new NextResponse('Missing info', { status: 400 });
        }

        // store password as hash
        const hashedPassword = await bcrypt.hash(password, 10);

        // define user
        const user = await prisma.user.create({
            data: {
                name,
                email,
                hashedPassword
            }
        });
        
        // return user
        return NextResponse.json(user);
    } catch (error: any) {
        console.log(error, 'REGISTERATION ERROR');
        return new NextResponse('Internal Error', { status: 500 });
    }
    
}