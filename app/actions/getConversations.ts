import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";
import { toast } from "react-hot-toast";

const getConversations = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return [];
    }

    try {
        const conversations = await prisma.conversation.findMany({
            orderBy: {
                lastMessageAt: "desc"
            },
            where: {
                userIds: {
                    has: currentUser.id
                }
            },
            include: {
                users: true,
                messages: {
                    include: {
                        sender: true,
                        seen: true
                    }
                }
            }
        });
        return conversations;
    } catch (error: any) {
        toast.error('Unxpected error while fetching conversations');
        return [];
    }
}

export default getConversations;