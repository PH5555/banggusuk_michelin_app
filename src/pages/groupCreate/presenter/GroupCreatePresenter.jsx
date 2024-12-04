import React from 'react';
import * as Style from './GroupCreatePresenter.style';
import Button from '../../../components/button/Button';
import Input from '../../../components/input/Input';
import { IoIosCloudUpload } from "react-icons/io";
import TopBar from '../../../components/topBar/TopBar';

const GroupCreatePresenter = ({onChange, name, password, passwordConfirm, inputEl, file, createGroup}) => {
	return (
		<Style.Container>
			<TopBar/>
			<Style.Text>그룹 이름</Style.Text>
			<Input onChange={onChange} value={name} name={"name"}/>
			<Style.Text top={38}>비밀번호</Style.Text>
			<Input type={"password"} onChange={onChange} value={password} name={"password"}/>
			<Style.Text top={38}>비밀번호 확인</Style.Text>
			<Input type={"password"} onChange={onChange} value={passwordConfirm} name={"passwordConfirm"}/>
			<Style.Text top={38}>그룹 사진(선택)</Style.Text>
			<Style.ImageBox for="file">
				<IoIosCloudUpload size={24}/>
				<Style.IamgeText>{file ? file.name : '갤러리에서 가져오기'}</Style.IamgeText>
			</Style.ImageBox>
			<Style.File type="file" name="file" id="file" ref={inputEl}/>
			
			
			<Style.Box/>
			<Button onClick={createGroup} backgroundColor={'#FF4F26'} color={'#ffffff'}>그룹 만들기</Button>
		</Style.Container>
	)
}

export default GroupCreatePresenter;