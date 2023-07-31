import AuthForm from './components/AuthForm';

export default function Home() {
    return (
      <div
      className="
        flex
        min-h-screen
        flex-col
        justify-center
        lg:px-10
        bg-gray-200"
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img
                alt="Logo"
                height="48"
                width="48"
                className="mx-auto h-16 w-auto" 
                src="images/logo.png" 
            />
            <h5 className="mt-0 py-2 text-sm text-center font-semibold text-gray-800">
              Welcome to buZZtalk...
            </h5>
            <h2 
            className="
                mt-2 
                text-center 
                text-2xl 
                font-bold
                tracking-tight
                text-gray-800">
                Sign in to your account!
            </h2>
        </div>
        <AuthForm/>
      </div>
    )
  }