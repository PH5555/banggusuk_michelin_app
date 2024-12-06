import React from 'react';
import Button from '../../../components/button/Button';
import Input from '../../../components/input/Input';
import * as Style from './GroupJoinPresenter.style';
import TopBar from '../../../components/topBar/TopBar';
import Loading from '../../../components/loading/Loading';

const GroupJoinPresenter = ({name, password, onChange, joinGroup, isLoading}) => {
	return (
		<Style.Container>
			{isLoading? <Loading/> : null}
			<TopBar/>
			<Style.Text>그룹 이름</Style.Text>
			<Input onChange={onChange} value={name} name={"name"}/>
			<Style.Text top={38}>비밀번호</Style.Text>
			<Input type={"password"} onChange={onChange} value={password} name={"password"}/>
			<Style.Box/>
			<Button onClick={joinGroup} backgroundColor={'#FF4F26'} color={'#ffffff'}>그룹 가입하기</Button>
		</Style.Container>
	)
}

export default GroupJoinPresenter;