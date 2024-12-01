import React from 'react';
import * as Style from './GroupCreatePresenter.style';
import Button from '../../../components/button/Button';
import Input from '../../../components/input/Input';
import { IoIosCloudUpload } from "react-icons/io";

const GroupCreatePresenter = () => {
	return (
		<Style.Container>
			<Style.Text>그룹 이름</Style.Text>
			<Input></Input>
			<Style.Text top={38}>그룹 사진(선택)</Style.Text>
			<Style.ImageBox>
				<IoIosCloudUpload width={24} height={24}/>
				<Style.IamgeText>갤러리에서 가져오기</Style.IamgeText>
			</Style.ImageBox>
			<Style.Box/>
			<Button backgroundColor={'#FF4F26'} color={'#ffffff'}>그룹 만들기</Button>
		</Style.Container>
	)
}

export default GroupCreatePresenter;