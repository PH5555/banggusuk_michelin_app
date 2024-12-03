import React, {useEffect, useState} from 'react';
import LoginPresenter from '../presenter/LoginPresenter';
import { useSearchParams } from 'react-router-dom';

const LoginContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  const REST_API_KEY='56834518a399e1ca8247d5f53449c20a'
	const REDIRECT_URI = 'https://banggusuk-michelin-wzhif.run.goorm.site/login'
	const kakaoURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`

	const handleLogin = ()=>{
		window.location.href = kakaoURL;
	}

  useEffect(() => {
    if (code) {
      setIsLoading(true);
      // 카카오 서버에 code를 전달하여 access token을 발급받는 등의 추가적인 처리
      // 성공적으로 access token을 발급받았다면, 원하는 코드 실행
      console.log('카카오 로그인 성공!', code);
      setIsLoading(false);
    }
  }, [code]);

  const props = {
    handleLogin,
    isLoading
  };

  return (
    <LoginPresenter {...props}/>
  )
}

export default LoginContainer;