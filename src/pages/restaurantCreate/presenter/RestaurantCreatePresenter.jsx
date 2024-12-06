import React from 'react';
import * as Style from './RestaurantCreatePresenter.style'
import Button from '../../../components/button/Button';
import Input from '../../../components/input/Input';
import TopBar from '../../../components/topBar/TopBar';
import { IoIosCloudUpload } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import Modal from 'react-modal';
import { IoMdCheckmark } from "react-icons/io";

const RestaurantCreatePresenter = ({name, comment, onChange, inputEl, file, menuItems, onClickMenuItem, searchEvent, isVisiblePopUp, setIsVisiblePopUp}) => {
	return (
		<Style.Container>
			<TopBar/>
			<Style.Text>음식점 이름</Style.Text>
			<Input searchEvent={searchEvent} search onChange={onChange} value={name} name="name"/>
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

			<Modal isOpen={isVisiblePopUp} onRequestClose={() => setIsVisiblePopUp(false)} style={Style.Modal}>
				<Style.ModalWrapper>
					<Style.ModalTextContainer>
						<Style.ModalText size={16} color={"black"} bottom={2}>스시 오마카세 봉천점</Style.ModalText>
						<Style.ModalText size={12} color={"#929292"}>서울특별시 성동구 용답동 26-8</Style.ModalText>
					</Style.ModalTextContainer>
					<IoMdCheckmark size={24}/>
				</Style.ModalWrapper>
				<Style.ModalDivider/>
			</Modal>  
		</Style.Container>
	)
}

export default RestaurantCreatePresenter;