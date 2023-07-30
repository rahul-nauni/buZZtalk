// Input component
'use client'; // use this as interactive client component

import clsx from 'clsx'; // classnames
import { FieldValues, FieldErrors, useForm, SubmitHandler, UseFormRegister } from 'react-hook-form'; // form validation

interface InputProps {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>,
  errors: FieldErrors
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({ 
  id, 
  label, 
  type = 'text', 
  required, 
  register, 
  errors, 
  disabled,
  }) => {
  return (
    <div>
      <label 
      htmlFor={id}
        className="
          block 
          text-sm 
          font-medium 
          text-gray-500"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          type={type}
          autoComplete={id}
          disabled={disabled}
          {... register(id, { required })}
          className={clsx(`
            form-input
            block
            w-full
            rounded=md
            border-gray-200
            py-2
            text-gray-900
            shadow-sm
            ring-1
            ring-inset
            ring-gray-200
            placeholder:text-gray-400
            focus:ring-2
            focus:ring-inset
            focus:ring-sky-200
            sm:text-sm
            sm:leadding-6`,
            errors[id] && "focus:ring-red-500",
            disabled && "opacity=50 cursor-default"
          )}
        />
      </div>
    </div>
  );
}

export default Input;