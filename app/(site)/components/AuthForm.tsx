'use client';

import { useCallback, useState } from 'react';  // React hooks
import { FieldValues, useForm, SubmitHandler } from 'react-hook-form'; // form validation

import Input from '../../components/inputs/Input'; // Input component
import Button from '@/app/components/Button'; // Button component
import AuthSocialButton from './AuthSocialButton'; // Social Button component
import { FaFacebookF } from 'react-icons/fa'; // Facebook icon
import { BsGoogle } from 'react-icons/bs'; // Google icon

type Variant = 'LOGIN' | 'REGISTER'; 
// use as client component
const AuthForm = () => {
    // defining states
    const [variant, setVariant] = useState<Variant>('LOGIN'); // default state is LOGIN
    const [isLoading, setIsLoading] = useState(false); // disable buttons and inputs when loading
 
    // toggle between LOGIN and REGISTER
    const toggleVariant = useCallback(() => { // memoize the function
        if (variant === 'LOGIN') {
            setVariant('REGISTER');
        } else {
            setVariant('LOGIN');
        }
    }, [variant]);
 
    // handle form submission
    const {
        register,
        handleSubmit,
        formState: { 
            errors, 
        } // form validation errors
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    }); // TODO: add form validation
     
 
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true); // enable loading after submission
            if (variant === 'REGISTER') {
                // Axios call to REGISTER route
            } 
             
            if (variant === 'LOGIN') {
                // NextAuth Sign In
            }
    }   
 
    const socialAction = (action: string) => {
        setIsLoading(true);
 
         // NextAuth Social Sign In
    }
 
    return (
    <div
        className="
            mt-8
            sm:mx-auto
            sm:w-full
            sm:max-w-md"
        >
            <div 
                className="
                bg-white 
                px-4 
                py-8 
                shadow 
                sm:rounded-lg 
                sm:px-10
                "
            >
                <form
                    className="space-y-6"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {variant === 'REGISTER' && (
                        <Input 
                        id="name" 
                        label="Name" 
                        register={register}
                        errors={errors}
                        disabled={isLoading}    
                        />
                    )}
                        <Input 
                        id="email" 
                        label="Email" 
                        type="email"
                        register={register}
                        errors={errors}
                        disabled={isLoading}      
                        />

                        <Input 
                        id="password" 
                        label="Password" 
                        type="password"
                        register={register}
                        errors={errors}
                        disabled={isLoading}      
                        />
                        <div>
                            <Button
                                disabled={isLoading}
                                fullWidth
                                type="submit"
                            >
                                {variant === 'LOGIN' ? 'Sign In' : 'Register'}
                            </Button>
                        </div>
                </form>

                <div className="mt-6">
                    <div className="relative">
                        <div 
                        className="
                            absolute 
                            inset-0 
                            flex 
                            items-center
                        "
                        >
                            <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-white px-2 text-gray-500">
                                Or continue with
                            </span>
                        </div>
                    </div>

                    <div className="mt-6 flex gap-2">
                        <AuthSocialButton 
                            icon={FaFacebookF}
                            onClick={() => socialAction('facebook')}
                        />
                        <AuthSocialButton 
                            icon={BsGoogle}
                            onClick={() => socialAction('google')}
                        />
                    </div>
                </div>

                <div className="
                    flex
                    gap-2
                    justify-center
                    text-sm
                    mt-4
                    text-gray-400"
                >
                    <div>
                        {variant === 'LOGIN' ? 'New here?' : 'Already have an account?'}
                    </div>
                    <div
                        onClick={toggleVariant}
                        className="underline cursor-pointer"
                    >
                        {variant === 'LOGIN' ? 'Create an account' : 'Sign in'}
                    </div>
                </div>
        </div>
    </div>
    );
}

export default AuthForm;