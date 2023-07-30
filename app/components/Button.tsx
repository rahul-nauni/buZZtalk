'use client';

import clsx from 'clsx';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  fullWidth?: boolean;
  children?: string;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  fullWidth,
  children,
  onClick,
  secondary,
  danger,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(`
        flex
        justify-center
        rounded-md
        px-2
        py-2
        text-sm
        font-semibold
        focus-visible:outline-2
        focus-visible:outline-offset-2`,
        disabled && "opacity-50 cursor-not-allowed",
        fullWidth && "w-full",
        secondary ? "text-gray-800" : "text-white",
        danger && "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-500",
        !secondary && !danger && "bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-500"
      )}
    >
      {children}
    </button>
  )
}

export default Button;