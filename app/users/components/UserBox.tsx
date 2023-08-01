'use client';
import Avatar from "@/app/components/Avatar";
import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

interface UserBoxProps {
    data: User;
}

const UserBox: React.FC<UserBoxProps> = ({
    data
}) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleUserClick = useCallback(() => {
        setIsLoading(true);
        axios.post('/api/conversations', {
            userId: data.id
        })
        .then((data) => {
            router.push(`/conversations/${data.data.id}`);
        })
        .finally(() => setIsLoading(false));
    }, [data, router]);

    return (
        <div onClick={handleUserClick}
            className="
            mt-2
            w-full
            relative
            flex
            items-center
            space-x-4
            bg-white
            p-4
            hover:bg-neutral-100
            rounded-full
            transition
            ease-in-out
            cursor-pointer"
        >
            <Avatar user={data}/>
            <div className="min-w-0 flex-1">
                <div className="focus:outline-none">
                    <div className="flex justify-between items-center mb-1">
                        <p className="
                            text-sm
                            font-medium
                            text-neutral-800
                            truncate"
                        >
                            {data.name}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserBox;