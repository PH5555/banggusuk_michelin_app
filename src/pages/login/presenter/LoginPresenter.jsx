import React from 'react';
import { Button } from '../../../components/button/Button';
import * as Style from './LoginPresenter.style';
import {logo} from '../../../assets/images/logo.png';

const LoginPresenter = () => {
	return (
	<Style.Container>
		<img src={require('../../../assets/images/logo.png')} width={107} height={107}/>
		<Style.Text size={20} top={27}>우리들만의</Style.Text>
		<Style.Text size={16} bottom={86}>미슐랭 가이드 만들기</Style.Text>
		<Button backgroundColor={'#FEE500'} color={'#000000'}>카카오로 로그인</Button>
	</Style.Container>
	)
}

export default LoginPresenter;