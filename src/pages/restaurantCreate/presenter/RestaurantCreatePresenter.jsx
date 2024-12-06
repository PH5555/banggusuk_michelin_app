import React from 'react';
import * as Style from './RestaurantCreatePresenter.style'
import Button from '../../../components/button/Button';
import Input from '../../../components/input/Input';
import TopBar from '../../../components/topBar/TopBar';
import { IoIosCloudUpload } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";

const RestaurantCreatePresenter = ({name, comment, onChange, inputEl, file, menuItems, onClickMenuItem}) => {
	return (
		<Style.Container>
			<TopBar/>
			<Style.Text>음식점 이름</Style.Text>
			<Input onChange={onChange} value={name} name="name"/>
			<Style.Text top={38}>미슐랭 랭킹</Style.Text>
			<Style.StarBox>
				<Style.Star onClick={()=>onClickMenuItem(0)}>
					{
						menuItems[0]? <IoIosStar size={24} color={'#FFF600'}/> : <IoIosStarOutline size={24} color={'#E0E0E0'}/>
					}
				</Style.Star>
				<Style.Star onClick={()=>onClickMenuItem(1)}>
					{
						menuItems[1]? <IoIosStar size={24} color={'#FFF600'}/> : <IoIosStarOutline size={24} color={'#E0E0E0'}/>
					}
				</Style.Star>
				<Style.Star onClick={()=>onClickMenuItem(2)}>
					{
						menuItems[2]? <IoIosStar size={24} color={'#FFF600'}/> : <IoIosStarOutline size={24} color={'#E0E0E0'}/>
					}
				</Style.Star>
			</Style.StarBox>
			<Style.Text top={38}>코멘트(최대 100자)</Style.Text>
			<Input long={true} onChange={onChange} value={comment} name="comment"/>
			<Style.Text top={38}>사진</Style.Text>
			<Style.ImageBox for="file">
				<IoIosCloudUpload size={24}/>
				<Style.IamgeText>{file ? file.name : '갤러리에서\n가져오기'}</Style.IamgeText>
			</Style.ImageBox>
			<Style.File type="file" name="file" id="file" ref={inputEl}/>

			<Style.Box/>
			<Button backgroundColor={'#FF4F26'} color={'#ffffff'}>맛집 등록하기</Button>
		</Style.Container>
	)
}

export default RestaurantCreatePresenter;