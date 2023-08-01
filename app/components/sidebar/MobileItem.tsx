'use client';

import Link from 'next/link';
import clsx from 'clsx';
import React from 'react';

interface MobileItemProps {
    href: string;
    active?: boolean;
    icon: any;
    onClick?: () => void;
}

const MobileItem: React.FC<MobileItemProps> = ({
    href,
    active,
    icon: Icon,
    onClick
}) => {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    }

    return (
            <Link
                onClick={handleClick}
                href={href}
                className={clsx(`
                    group
                    flex
                    rounded-md
                    gap-y-2
                    py-4
                    w-full
                    text-sm
                    leading-2
                    font-semibold
                    justify-center
                    text-gray-900
                    hover:text-gray-200
                    hover:bg-gray-900
                    focus:outline-none
                    focus:bg-gray-900
                    focus:text-gray-200
                    transition 
                    ease-in-out`,
                active && 'bg-gray-100 text-black'
                )}
                >
                <Icon />
            </Link>
    );
}

export default MobileItem;