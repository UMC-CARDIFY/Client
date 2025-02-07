import { KaKaoLoginButton } from "@svgs/index";

const KakaoButton = () => {
  const redirect_uri = "http://localhost:8080/login/oauth2/code/kakao";
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${import.meta.env.VITE_KAKAO_CLIENT_ID}&redirect_uri=${redirect_uri}&response_type=code`;

  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  return <KaKaoLoginButton className="cursor-pointer" onClick={handleLogin} />;
};

export default KakaoButton;
