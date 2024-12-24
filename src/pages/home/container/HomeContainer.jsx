import React, {useState, useEffect} from 'react';
import HomePresenter from '../presenter/HomePresenter'
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../../../util/Cookie';
import axios from 'axios';

const HomeContainer = () => {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([false, false, false]);
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState({      
    lat: 33.450701,
    lng: 126.570667,});
  const geolocationOptions = {
    enableHighAccuracy: true,
    timeout: 1000 * 10,
    maximumAge: 1000 * 3600 * 24,
  };

  useEffect(() => {
    const handleResize = () => {
    setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(()=>{
    setIsLoading(true);
    let count = menuItems.filter(element => true === element).length;
    const groupId = getCookie('groupId');
    axios.get(`https://banggusuk-michelin.onrender.com/restaurant?rating=${count}&groupId=${groupId}`, {
		  headers: {'X-AUTH-TOKEN': getCookie('accessToken')}, 
	  }).then((response) => {
		  const res = response.data;
		  if(res.status === "success"){
        console.log(res.data)
        console.log('식당 가져오기 성공');
		  }
		  else {
			  console.log('식당 가져오기 실패');
		  }
	  }).catch((error) => {
		  console.log(error);
	  }).finally(()=>{
		  setIsLoading(false);
	  });
  }, [menuItems]);

  const handleSuccess = (pos) => {
    const { latitude, longitude } = pos.coords

    setLocation({...location,
      lat : parseFloat(latitude),
      lng : parseFloat(longitude),
    })
  }

  const handleError = (err) => {
    console.log(err.message)
  }

  useEffect(() => {
    const { geolocation } = navigator;

    if (!geolocation) {
      console.log("gps error");
      return;
    }

    geolocation.getCurrentPosition(handleSuccess, handleError, geolocationOptions)
  }, []);


  const onClickMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const createRestaurant = () => {
    navigate('/restaurant');
  }

  const onClickMenuItem = (id) => {
    let temp = [...menuItems];
    temp[id] = !temp[id];
    setMenuItems(temp);
  }

  const props = {
    windowWidth,
    open,
    menuOpen,
    onClickMenu,
    onClickMenuItem,
    setOpen,
    menuItems,
    createRestaurant,
    location
  };

  return (
    <HomePresenter {...props}/>
  )
}

export default HomeContainer;