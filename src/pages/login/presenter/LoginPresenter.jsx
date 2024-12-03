import React from 'react';
import Button from '../../../components/button/Button';
import Loading from '../../../components/loading/Loading';
import * as Style from './LoginPresenter.style';

const LoginPresenter = ({handleLogin, isLoading}) => {
	return (
		<Style.Container>
			{isLoading? <Loading/> : null}
			<img src={require('../../../assets/images/logo.png')} width={107} height={107}/>
			<Style.Text size={20} top={27}>우리들만의</Style.Text>
			<Style.Text size={16} bottom={86}>미슐랭 가이드 만들기</Style.Text>
			<Button onClick={()=>handleLogin()} backgroundColor={'#FEE500'} color={'#000000'}>카카오로 로그인</Button>
		</Style.Container>
	)
}

export default LoginPresenter;