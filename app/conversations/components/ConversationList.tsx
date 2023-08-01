'use client';

import clsx from 'clsx';
import useConversation from "@/app/hooks/useConversation";

import { FullConversationType } from "@/app/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
        <aside
            className={clsx(`
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
                left-0`,
            isOpen ? 'hidden' : 'w-full lg:block left-0'
            )}
        >
            <div className='px-5'>
                <div className='flex jusitfy-between mb-4 pt-4'>
                    <div className='
                        text-neutral-800
                        text-2xl
                        font-bold'
                    >
                        Messages!
                    </div>
                </div>
            </div>

        </aside>   
    );
}

export default ConversationList;