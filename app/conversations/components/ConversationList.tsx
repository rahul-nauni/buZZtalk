"use client";

import clsx from "clsx";
import useConversation from "@/app/hooks/useConversation";

import { FullConversationType } from "@/app/types";
import ConversationBox from "./ConversationBox";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdOutlineGroupAdd } from "react-icons/md";

interface ConversationListProps {
    initialItems: FullConversationType[];
}

const ConversationList: React.FC<ConversationListProps> = ({
    initialItems
}) => {
    const [items, setItems] = useState(initialItems);

    const router = useRouter();

    const  { conversationId, isOpen } = useConversation();

    return (
        <aside className={clsx(`
                lg:fixed
                inset-y-0
                pb-10
                lg:pb-20
                lg:left-20
                lg:w-80
                lg:block
                overflow-y-auto
                border-gray-200`,
            isOpen ? 'hidden' : 'block w-full left-0'
            )}
        >
            <div className='px-2'>
                <div className='flex justify-between mb-4 pt-4'>
                    <div className='
                        text-neutral-800
                        text-2xl
                        font-bold
                        border-b'
                    >
                        Messages
                    </div>
                    <div className="
                        rounded-full
                        p-2
                        bg-gray-200
                        text-gray-600
                        coursor-pointer
                        hover:bg-gray-800
                        hover:text-gray-200
                        transition"
                    >
                        <MdOutlineGroupAdd size={20} />
                    </div>
                </div>
                {items.map((item) => (
                    <ConversationBox 
                        key={item.id}
                        data={item}
                        selected = {conversationId === item.id}
                    />
                ))}
            </div>
        </aside>   
    );
}

export default ConversationList;