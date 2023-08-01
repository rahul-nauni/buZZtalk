'use client';

import { User } from "@prisma/client";
import React from "react";
import Image from "next/image";

interface AvatarProps {
    user?: User;
}


const Avatar: React.FC<AvatarProps> = ({
    user
}) => {
    return (
        <div className="relative">
            <div
                className="
                    bottom-0
                    flex
                    relative
                    rounded-full
                    overflow-hidden
                    h-8
                    w-8
                    md:h-8
                    md:w-8"
            >
                <Image 
                    alt="Avatar"
                    src={user?.image || '/images/placeholder.png'}
                    fill
                />
            </div>
            <span
                className="
                    absolute
                    bottom-0
                    right-0
                    inline-block
                    w-3
                    h-3
                    md:w-3
                    md:h-3
                    bg-green-500
                    border-white
                    border-2
                    rounded-full"
            />
        </div>
    );
}

export default Avatar;
