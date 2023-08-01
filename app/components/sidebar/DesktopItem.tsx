'use client';

import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

interface DesktopItemProps {
    label: string;
    icon: any;
    href: string;
    active?: boolean;
    onClick?: () => void;
}

const DesktopItem: React.FC<DesktopItemProps> = ({ 
    label, 
    icon: Icon, 
    href, 
    active, 
    onClick 
}) => {

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <li onClick={handleClick}>
            <Link href={href}
                className={clsx(`
                            group 
                            flex
                            gap-x-4
                            p-2 
                            text-sm 
                            font-semibold 
                            rounded-md 
                            leading-3
                            text-gray-900 
                            hover:text-gray-200 
                            hover:bg-gray-900 
                            focus:outline-none 
                            focus:bg-gray-900  
                            focus:text-gray-200 
                            transition 
                            ease-in-out`,
                active && "bg-gray-100 text-black")}
            >
                <Icon className="h2 w2 shrink-0"/>
                <span className="sr-only">{label}</span>
            </Link>
        </li>
    );
}
export default DesktopItem;
