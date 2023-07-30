import AuthForm from './components/AuthForm';

export default function Home() {
    return (
      <div
      className="
        flex
        min-h-full
        flex-col
        justify-center
        py-11
        sm:px-6
        lg:px-8
        bg-gray-100"
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img
                alt="Logo"
                height="48"
                width="48"
                className="mx-auto h-14 w-auto" 
                src="images/chat.png" 
            />
            <h2 
            className="
                mt-6 
                text-center 
                text-3xl 
                font-bold
                tracking-tight
                text-gray-900">
                Sign in to your account!
            </h2>
        </div>
        <AuthForm/>
      </div>
    )
  }