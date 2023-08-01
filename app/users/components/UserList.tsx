'use client';

import { User } from "@prisma/client"
import React from "react";
import UserBox from "./UserBox";

interface UserListProps {
    items: User[];
}

const UserList: React.FC<UserListProps> = ({
    items
}) =>  {
    return (
        <aside className="
            lg:fixed
            inset-y-0
            pb-10
            lg:pb-20
            lg:left-10
            lg:w-80
            lg:block
            overflow-y-auto
            border-gray-200
            w-full
            left-0"
        >
            <div className="px-4">
                <div className="flex-col">
                    <div className="
                        text-2xl
                        font-semibold
                        text-neutral-800
                        py-2
                        border-b
                    ">
                        People
                    </div>
                </div>
                {items.map((item) => (
                    <UserBox 
                        key = {item.id}
                        data = {item}    
                    />
                ))}
            </div>
        </aside>
    );
}

export default UserList;