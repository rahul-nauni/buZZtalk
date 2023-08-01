import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiOutlineChat } from 'react-icons/hi';
import {
    HiOutlineLockOpen,
    HiOutlineUsers
} from 'react-icons/hi2';
import { signOut } from "next-auth/react";
import useConversation from "./useConversation";

const useRoutes = () => {
    const pathname = usePathname();
    const { conversationId } = useConversation();

    const routes = useMemo(() => [
        {
            label: 'Chat',
            href: '/conversations',
            icon: HiOutlineChat,
            active: pathname === '/conversations' || !!conversationId,   
        },
        {
            label: 'Users',
            href: '/users',
            icon: HiOutlineUsers,
            active: pathname === '/users',
        },
        {
            label: 'Sign Out',
            href: "#",
            icon: HiOutlineLockOpen,
            onClick: () => signOut(),
        }
    ], [conversationId, pathname]);

    return routes;
}

export default useRoutes;