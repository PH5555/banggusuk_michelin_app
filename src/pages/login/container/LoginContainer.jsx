import React, {useEffect, useState} from 'react';
import LoginPresenter from '../presenter/LoginPresenter';
import { useSearchParams } from 'react-router-dom';
import { useAxios } from '../../../hook/useAxios';
import { setCookie } from '../../../util/Cookie';
import { useNavigate } from 'react-router-dom';

const LoginContainer = () => {
  const [searchParams] = useSearchParams();
  const [axiosData, isLoading] = useAxios();
  const code = searchParams.get('code');
  const navigate = useNavigate();
  const REST_API_KEY='56834518a399e1ca8247d5f53449c20a'
  const REDIRECT_URI = 'https://banggusuk-michelin-wzhif.run.goorm.site/login'
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`

  const handleLogin = ()=>{
	window.location.href = kakaoURL;
  }

  useEffect(async() => {
    if (code) {
      const response = await axiosData("default", "POST", "/login", {code: code});
      if(response.status == "success"){
        const token = response.data.token;
        setCookie('accessToken', token);
        navigate('/group');
        console.log('카카오 로그인 성공!', code);
      }
      else {
        console.log('카카오 로그인 실패!', code);
      }
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