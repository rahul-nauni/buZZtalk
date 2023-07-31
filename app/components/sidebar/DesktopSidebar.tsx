'use client';
import useRoutes from "@/app/hooks/useRoutes";
import { useState } from "react";
import DesktopItem from "./DesktopItem";

const DesktopSidebar = () => {
    const routes = useRoutes();
    const [isOpen, setIsOpen] = useState(false);

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
            lg:border-r-[2px]
            lg:pb-5
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
                            key={item.label}
                            href={item.href}
                            label={item.label}
                            icon={item.icon}
                            active={item.active}
                            onClick={item.onClick}
                        />
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default DesktopSidebar;