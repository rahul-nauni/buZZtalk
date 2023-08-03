'use client';

import { User } from "@prisma/client"
import React from "react";
import UserBox from "./UserBox";
import clsx from "clsx";

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
            lg:left-20
            lg:w-80
            lg:block
            overflow-y-auto
          border-gray-200"
        >
            <div className="px-2">
                <div className="flex justify-between mb-4 pt-4">
                    <div className="
                        text-2xl
                        font-bold
                        text-neutral-800
                        border-b
                        transition
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