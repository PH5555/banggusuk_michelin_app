import React, {useState, useCallback, useRef, useEffect} from 'react';
import RestaurantCreatePresenter from '../presenter/RestaurantCreatePresenter'
import { getCookie } from '../../../util/Cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RestaurantCreateContainer = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    comment: "",
  });
  const inputEl = useRef(null);
  const [file, setFile] = useState();
  const [menuItems, setMenuItems] = useState([true, false, false]);
  const [searchedRestaurant, setSearchedRestaurant] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState({});
  const [isVisiblePopUp , setIsVisiblePopUp] = useState(false);
  const { name, comment } = inputs;
  const [isLoading, setIsLoading] = useState();

  const onChange = (e) => {
    const { name, value } = e.target;
 
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const searchRestaurant = () => {	
    const kakao = window.kakao;
    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(name, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        let temp = []
        for (let i = 0; i < data.length; i++) {
          temp.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: {
              name: data[i].place_name,
              address: data[i].address_name
            },
          })
        }
        setSearchedRestaurant(temp);
      }
    });	  
	  
	setIsVisiblePopUp(true);

  }

  const selectRestaurant = (id) =>{
	  setSelectedRestaurant(searchedRestaurant[id]);
    setInputs({
      ...inputs,
      name : searchedRestaurant[id].content.name,
    });
    setIsVisiblePopUp(false);
  }

  const onClickMenuItem = (id) => {
    let temp = [...menuItems];
    for(let i = 0; i <= id; i++){
      temp[i] = true;
    }
    for(let i = 2; i > id; i--){
      temp[i] = false;
    }
    setMenuItems(temp);
  }
  
  const createRestaurant = async() => {
    setIsLoading(true);
    let count = menuItems.filter(element => true === element).length;
    const formData = new FormData();
	  formData.append("file", file);
	  formData.append("restaurantName", name);
	  formData.append("comment", comment);
	  formData.append("rating", count);
	  formData.append("address", selectedRestaurant);
	  formData.append("groupId", getCookie('groupId'));
	  formData.append("latitude", selectedRestaurant.position.lat);
	  formData.append("longitude", selectedRestaurant.position.lng);

	  setIsLoading(true);
	  axios.post('https://banggusuk-michelin.onrender.com/restaurant', formData, {
		  headers: {'X-AUTH-TOKEN': getCookie('accessToken')},
		  
	  }).then((response) => {
		  const res = response.data;
      console.log(res);
		  if(res.status === "success"){
        navigate(-1);
        console.log('장소 만들기 성공!');
		  }
		  else {
			  console.log('장소 만들기 실패!');
		  }
	  }).catch((error) => {
		  console.log(error);
	  }).finally(()=>{
		  setIsLoading(false);
	  });
  }

  const fileInputHandler = useCallback((event) => {
    const files = event.target && event.target.files;
    if (files && files[0]) {
      setFile(event.target.files[0]);
    }
  }, []);


  useEffect(() => {
    if (inputEl.current !== null) {
      inputEl.current.addEventListener("input", fileInputHandler);
    }
    return () => {
      inputEl.current && inputEl.current.removeEventListener("input", fileInputHandler);
    };
  }, [inputEl, fileInputHandler]);

  const props = {
    name,
    comment,
    onChange, 
    file,
    inputEl,
    menuItems,
    searchRestaurant,
    onClickMenuItem,
    isVisiblePopUp,
    setIsVisiblePopUp,
    searchedRestaurant,
    selectRestaurant,
    selectedRestaurant,
    isLoading,
    createRestaurant
  };

  return (
    <RestaurantCreatePresenter {...props}/>
  )
}

export default RestaurantCreateContainer;