import { Text } from "@components/typography/Text";
import { LoginGradient, SymbolLogo } from "@svgs/index";
import { motion } from "framer-motion";
import GoogleButton from "../components/GoogleButton/GoogleButton";
import KakaoButton from "../components/kakaoButton/KakaoButton";

const Login = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      {/* 로고 */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.1,
          duration: 0.4,
          ease: [0.68, -0.55, 0.27, 1.55],
        }}
        className="mr-[0.88rem]"
      >
        <SymbolLogo />
      </motion.div>

      {/* 그라디언트 */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          delay: 0.3,
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="mr-[3.31rem] origin-left"
      >
        <LoginGradient />
      </motion.div>

      {/* 소셜 로그인 버튼 */}
      <motion.div
        className="flex flex-col gap-4 items-center mt-[2rem]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.4,
          duration: 0.7,
          ease: [0.68, -0.55, 0.27, 1.55],
        }}
      >
        <KakaoButton />
        <GoogleButton />
        <Text variant="body2" className="text-gray-450">
          소셜 계정으로 간편하게 시작하세요.
        </Text>
      </motion.div>
    </div>
  );
};

export default Login;
