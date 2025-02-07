import { GoogleLoginButton } from "@svgs/index";

const GoogleButton = () => {
  const GOOGLE_URL = `http://localhost:8080/oauth2/authorization/google`;

  const handleLogin = () => {
    window.location.href = GOOGLE_URL;
  };

  return <GoogleLoginButton className="cursor-pointer" onClick={handleLogin} />;
};

export default GoogleButton;
