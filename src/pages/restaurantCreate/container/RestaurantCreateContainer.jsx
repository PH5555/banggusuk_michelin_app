import React, {useState, useCallback, useRef, useEffect} from 'react';
import RestaurantCreatePresenter from '../presenter/RestaurantCreatePresenter'

const RestaurantCreateContainer = () => {
  const [inputs, setInputs] = useState({
    name: "",
    comment: "",
  });

  const inputEl = useRef(null);
  const [file, setFile] = useState();
  const [menuItems, setMenuItems] = useState([true, false, false]);
  const { name, comment } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
 
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

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
    onClickMenuItem
  };

  return (
    <RestaurantCreatePresenter {...props}/>
  )
}

export default RestaurantCreateContainer;