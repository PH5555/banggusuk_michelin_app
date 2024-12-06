import React, {useState, useEffect} from 'react';
import { Map, CustomOverlayMap } from "react-kakao-maps-sdk";
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';
import SimpleImageSlider from "react-simple-image-slider";
import * as Style from "./HomePresenter.style";
import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { IoMdPin } from "react-icons/io";
import { IoMdFunnel } from "react-icons/io";

const HomePresenter = ({windowWidth, open, menuOpen, onClickMenu, onClickMenuItem, setOpen, menuItems}) => {
	return (
		<div>
			{open? <Style.SheetBackground onClick={() => setOpen(false)}/> : null}
			<Style.SearchBox>
				<Style.MenuButton onClick={() => onClickMenu()}>
					<IoMdFunnel size={24}/>
				</Style.MenuButton>
			</Style.SearchBox>
			{menuOpen? <Style.Menu>
				<Style.Text top={12} bottom={12}>별점</Style.Text>
				<Style.StarContainer>
					<Style.Radio selected={menuItems[0]} onClick={() => onClickMenuItem(0)}/>
					<Style.StarBox>
							<Style.Star>
								<IoIosStar size={24} color={'#FFF600'}/>
							</Style.Star>
							<Style.Star>
								<IoIosStar size={24} color={'#FFF600'}/>
							</Style.Star>
							<Style.Star>
								<IoIosStar size={24} color={'#FFF600'}/>
							</Style.Star>
					</Style.StarBox>
				</Style.StarContainer>
				<Style.StarContainer>
					<Style.Radio selected={menuItems[1]} onClick={() => onClickMenuItem(1)}/>
					<Style.StarBox>
							<Style.Star>
								<IoIosStar size={24} color={'#FFF600'}/>
							</Style.Star>
							<Style.Star>
								<IoIosStar size={24} color={'#FFF600'}/>
							</Style.Star>
							<Style.Star>
								<IoIosStarOutline size={24} color={'#E0E0E0'}/>
							</Style.Star>
					</Style.StarBox>
				</Style.StarContainer>
				<Style.StarContainer>
					<Style.Radio selected={menuItems[2]} onClick={() => onClickMenuItem(2)}/>
					<Style.StarBox>
							<Style.Star>
								<IoIosStar size={24} color={'#FFF600'}/>
							</Style.Star>
							<Style.Star>
								<IoIosStarOutline size={24} color={'#E0E0E0'}/>
							</Style.Star>
							<Style.Star>
								<IoIosStarOutline size={24} color={'#E0E0E0'}/>
							</Style.Star>
					</Style.StarBox>
				</Style.StarContainer>
				<Style.Box/>
			</Style.Menu> : null}
			
			<Map
			center={{ lat: 33.5563, lng: 126.79581 }}
			style={{ width: "100%", height: "100vh" }}
			>
				<CustomOverlayMap position={{ lat: 33.55635, lng: 126.795841 }}>
					<Style.Cursor onClick={() => setOpen(true)}>
						<IoMdPin size={40} color={'#FF4F26'}/>
					</Style.Cursor>
				</CustomOverlayMap>

			</Map>
			<BottomSheet blocking={false} open={open}>
				<Style.BottomSheetContent>
					<SimpleImageSlider
						style={{borderRadius: '10px'}}
						width={(windowWidth-60) + "px"}
						height={"166px"}
						images={[require('../../../assets/images/logo.png')]}
						navSize={30}
						showBullets={true}
						showNavs={true}
						navMargin={10}
					/>
					<Style.TextBox>
						<Style.Text>스시 초밥</Style.Text>
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
					</Style.TextBox>
					<Style.StaticText color={'#FF4F26'} top={4} bottom={24}>강남구 삼성동 24길 6-6 5층</Style.StaticText>
					<Style.StaticText bottom={6}>· 제가 야채의 익힘을 중요시하게 보거덩여? 청경채의 익힘이 굉장히 타이트했어여</Style.StaticText>
					<Style.StaticText bottom={6}>· 제가 야채의 익힘을 중요시하게 보거덩여? 청경채의 익힘이 굉장히 타이트했어여</Style.StaticText>
					<Style.Box/>
				</Style.BottomSheetContent>
			</BottomSheet>
		</div>
		

	)
}

export default HomePresenter;