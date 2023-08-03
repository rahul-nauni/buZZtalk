"use client";

import { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Conversation, Message, User } from "@prisma/client";
import { format } from "date-fns";
import { useSession } from "next-auth/react";
import clsx from "clsx";
import { FullConversationType } from "@/app/types";
import useOtherUser from "@/app/hooks/useOtherUser";
import Avatar from "@/app/components/Avatar";
import { da } from "date-fns/locale";


interface ConversationBoxProps {
    data: FullConversationType,
    selected: boolean,
}

const ConversationBox: React.FC<ConversationBoxProps> = ({
    data,
    selected
}) => {
    const otherUser = useOtherUser(data);
    const session = useSession();
    const router = useRouter();

    const handleConversationClick = useCallback(() => {
        router.push(`/conversations/${data.id}`);
    }, [data, router]);

    const lastMessage = useMemo(() => {
        const messages = data.messages;

        if (messages.length === 0) {
            return null;
        }
        return messages[messages.length - 1]; // last message
    }, [data.messages]);

    const userEmail = useMemo(() => {
        return session?.data?.user?.email;
    }, [session?.data?.user?.email]);

    // check if the last message has been seen by the current user
    const isSeen = useMemo(() => {
        if (!lastMessage) {
            return false;
        }

        const seenArray = lastMessage.seen || []; // holds all the users who have seen the message

        if (!userEmail) { // if no user email, then the user is not logged in
            return false;
        }

        return seenArray.filter((user) => user.email === userEmail).length != 0;
    }, [userEmail, lastMessage]);

    const lastMessageText = useMemo(() => {
        if (lastMessage?.image) {
            return 'Sent an image';
        }

        if (lastMessage?.body) {
            return lastMessage.body;
        }

        return 'Started a new conversation';

    }, [lastMessage]);

    return (
        <div onClick={handleConversationClick} 
            className={clsx(`
                w-full
                relative
                flex
                items-center
                space-x-3
                p-3
                hover:bg-neutral-100
                rounded-md
                transition
                ease-in-out
                cursor-pointer`
                ,selected ? 'bg-neutral-100' : 'bg-white'
                )}
            >
            <Avatar user={otherUser} />
            <div className="min-w-0 flex-1">
                <div className="focus:outline-none">
                    <div className="
                        flex
                        justify-between
                        items-center
                        mb-1"
                    >
                        <p className="
                            text-xs
                            font-medium
                            text-gray-900"
                        >
                            {data.name || otherUser?.name} 
                        </p>
                        {lastMessage?.createdAt && (
                            <p className="text-sm
                                text-gray-500
                                font-normal"
                            >
                                {format(new Date(lastMessage?.createdAt), 'p')}
                            </p>
                        )}
                    </div>
                    <div className={clsx(`
                        truncate
                        text-sm
                        font-bold
                        text-sky-500
                    `,
                    isSeen ? 'text-gray-500' : 'text-gray-900 font-bold'
                    )}>
                        {lastMessageText}
                    </div>
                </div>    
            </div>
        </div>
    );
}

export default ConversationBox;