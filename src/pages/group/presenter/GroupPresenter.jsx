import React from 'react';
import * as Style from './GroupPresenter.style';
import Button from '../../../components/button/Button';

const GroupPresenter = () => {
	return (
		<Style.Container>
			<img src={require('../../../assets/images/logo.png')} width={107} height={107}/>
			<Style.Text size={20} top={27}>우리들만의</Style.Text>
			<Style.Text size={16} bottom={86}>미슐랭 가이드 만들기</Style.Text>
			<Button backgroundColor={'#FF4F26'} color={'#ffffff'}>그룹 만들기</Button>
			<Style.Box/>
			<Button backgroundColor={'#ffffff'} color={'#FF4F26'} shadow={true}>그룹에 가입하기</Button>
		</Style.Container>
	)
}

export default GroupPresenter;