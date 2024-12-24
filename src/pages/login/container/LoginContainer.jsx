import React, {useEffect, useState} from 'react';
import LoginPresenter from '../presenter/LoginPresenter';
import { useSearchParams } from 'react-router-dom';
import { setCookie } from '../../../util/Cookie';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginContainer = () => {
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const code = searchParams.get('code');
  const navigate = useNavigate();
  const REST_API_KEY='56834518a399e1ca8247d5f53449c20a'
  const REDIRECT_URI = 'https://banggusuk-michelin-wzhif.run.goorm.site'
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`

  const handleLogin = ()=>{
	window.location.href = kakaoURL;
  }
  
  const getAccessToken = () => {
	  if(code){
		  setIsLoading(true);
		  axios.post('https://banggusuk-michelin.onrender.com/auth/login', null, {params:{'code': code}}).then((response) => {
			  const res = response.data;
			  if(res.status === "success"){
				const token = res.data.token;
				setCookie('accessToken', token);
				navigate('/group');
				console.log('카카오 로그인 성공!', code);
			  }
			  else {
				console.log('카카오 로그인 실패!', code);
			  }
		  }).catch((error) => {
			  console.log(error);
		  }).finally(()=>{
			  setIsLoading(false);
		  });
	  }
  }

  useEffect(()=>{getAccessToken()},[code]);

  const props = {
    handleLogin,
    isLoading
  };

  return (
    <LoginPresenter {...props}/>
  )
}

export default LoginContainer;