import React from 'react';
import Button from '../../../components/button/Button';
import Input from '../../../components/input/Input';
import * as Style from './GroupJoinPresenter.style';

const GroupJoinPresenter = () => {
	return (
		<Style.Container>
			<Style.Text>그룹 이름</Style.Text>
			<Input></Input>
			<Style.Text top={38}>비밀번호</Style.Text>
			<Input></Input>
			<Style.Box/>
			<Button backgroundColor={'#FF4F26'} color={'#ffffff'}>그룹 가입하기</Button>
		</Style.Container>
	)
}

export default GroupJoinPresenter;