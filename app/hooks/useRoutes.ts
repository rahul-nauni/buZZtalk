import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiOutlineChatAlt2 as HiOutlineChat } from 'react-icons/hi';
import {
    HiOutlineLockOpen as HiMiniLockOpen,
    HiOutlineUserCircle as HiOutlineUsers,
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
            icon: HiMiniLockOpen,
            onClick: () => signOut(),
        }
    ], [conversationId, pathname]);

    return routes;
}

export default useRoutes;