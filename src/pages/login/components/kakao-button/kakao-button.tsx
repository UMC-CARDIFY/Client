import { KaKaoLoginButton } from "@svgs/index";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;
const KAKAO_URL = `${SERVER_URL}/oauth2/authorization/kakao`;

const KakaoButton = () => {
  const handleLogin = () => {
    window.location.href = KAKAO_URL;
  };

  return <KaKaoLoginButton className="cursor-pointer" onClick={handleLogin} />;
};

export default KakaoButton;
