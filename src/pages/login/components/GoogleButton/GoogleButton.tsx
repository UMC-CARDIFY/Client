import { GoogleLoginButton } from "@svgs/index";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;
const GOOGLE_URL = `${SERVER_URL}/oauth2/authorization/google`;

const GoogleButton = () => {
  const handleLogin = () => {
    window.location.href = GOOGLE_URL;
  };

  return <GoogleLoginButton className="cursor-pointer" onClick={handleLogin} />;
};

export default GoogleButton;
