'use client';

import useRoutes from "@/app/hooks/useRoutes";
import useConversation from "@/app/hooks/useConversation";
import MobileItem from "./MobileItem";

const MobileFooter = () => {
    const routes = useRoutes();
    const { isOpen } = useConversation();

    if (isOpen) return null; // hide footer when conversation is open

    return (
        <div className="
            fixed
            border-t-[1px]
            justify-between
            w-full
            bottom-0
            sm:px-2
            z-60
            flex
            items-center
            bg-gray-100
            lg:hidden"
        >
            {routes.map((route) => (
                <MobileItem
                    key = {route.href}
                    href = {route.href}
                    active = {route.active}
                    icon = {route.icon}
                    onClick = {route.onClick}
                />
            ))}
        </div>
    );
}

export default MobileFooter;