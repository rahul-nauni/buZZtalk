'use client';
import useRoutes from "@/app/hooks/useRoutes";
import React, { useState } from "react";
import DesktopItem from "./DesktopItem";
import { User } from "@prisma/client";
import Avatar from "@/app/components/Avatar";

interface DesktopSidebarProps {
    currentUser: User;
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({
    currentUser
}) => {
    const routes = useRoutes();
    const [isOpen, setIsOpen] = useState(false);

    console.log(currentUser);

    return (
        <div className="
            hidden
            lg:fixed
            lg:inset-y-0
            lg:left-0
            lg:z-60
            lg:w-10
            xl:px-4
            lg:overflow-y-auto
            lg:bg-gray-100
            lg:border-r-[1px]
            lg:pb-2
            lg:pt-0
            lg:flex
            lg:flex-col
            justify-between"
        >
            <nav className="
                mt-2
                flex
                flex-col
                justify-between"
            >
                <ul role="list" className="flex flex-col items-center">
                    {routes.map((item) => (
                        <DesktopItem
                            key = {item.label}
                            href = {item.href}
                            label = {item.label}
                            icon = {item.icon}
                            active = {item.active}
                            onClick = {item.onClick}
                        />
                    ))}
                </ul>
            </nav>

            <nav
                className="
                        mt-4
                        flex
                        flex-col
                        justify-between
                        items-center"
            >
                <div onClick={() => setIsOpen(true)}
                    className="
                        cursor-pointer
                        hover-opacity-50
                        transition
                        ease-in-out"
                >
                    <Avatar user={currentUser}/>
                </div>

            </nav>
        </div>
    );
}

export default DesktopSidebar;