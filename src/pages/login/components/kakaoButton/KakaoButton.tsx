import { KaKaoLoginButton } from "@svgs/index";

const KakaoButton = () => {
  const KAKAO_URL = `http://localhost:8080/oauth2/authorization/kakao`;

  const handleLogin = () => {
    window.location.href = KAKAO_URL;
  };

  return <KaKaoLoginButton className="cursor-pointer" onClick={handleLogin} />;
};

export default KakaoButton;
