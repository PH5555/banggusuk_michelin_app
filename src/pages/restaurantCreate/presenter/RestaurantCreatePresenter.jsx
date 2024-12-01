import React from 'react';
import * as Style from './RestaurantCreatePresenter.style'
import Button from '../../../components/button/Button';
import Input from '../../../components/input/Input';
import TopBar from '../../../components/topBar/TopBar';
import { IoIosCloudUpload } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";

const RestaurantCreatePresenter = () => {
	return (
		<Style.Container>
			<TopBar/>
			<Style.Text>음식점 이름</Style.Text>
			<Input></Input>
			<Style.Text top={38}>미슐랭 랭킹</Style.Text>
			<Style.StarBox>
				<Style.Star>
					<IoIosStar size={24} color={'#FFF600'}/>
				</Style.Star>
				<Style.Star>
					<IoIosStar size={24} color={'#FFF600'}/>
				</Style.Star>
				<Style.Star>
					<IoIosStarOutline size={24} color={'#FFF600'}/>
				</Style.Star>
			</Style.StarBox>
			<Style.Text top={38}>코멘트(최대 100자)</Style.Text>
			<Input long={true}></Input>
			<Style.Text top={38}>사진</Style.Text>
			<Style.ImageBox>
				<IoIosCloudUpload size={24}/>
				<Style.IamgeText>갤러리에서</Style.IamgeText>
				<Style.IamgeText>가져오기</Style.IamgeText>
			</Style.ImageBox>
			<Style.Box/>
			<Button backgroundColor={'#FF4F26'} color={'#ffffff'}>맛집 등록하기</Button>
		</Style.Container>
	)
}

export default RestaurantCreatePresenter;