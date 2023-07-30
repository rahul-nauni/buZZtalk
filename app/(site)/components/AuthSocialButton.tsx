import { IconType } from "react-icons";

interface AuthSocialButtonProps {
  icon: IconType;
  onClick: () => void;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({ 
  icon: Icon,
  onClick 
}) => {
  return(
    <button
      type="button"
      onClick={onClick}
      className="
        inline-flex
        w-full
        justify-center
        rounded-md
        bg-white
        px-2
        py-2
        text-sm
        shadow-sm
        ring-1
        ring-inset
        ring-gray-200
        text-gray-600
        hover:bg-gray-100
        focus:outline-offset-0"
      >
        <Icon />
    </button>
  );
}

export default AuthSocialButton;