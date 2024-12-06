import React, {useState, useRef, useEffect, useCallback} from 'react';
import GroupCreatePresenter from '../presenter/GroupCreatePresenter'
import { useNavigate } from 'react-router-dom';
import { useAxios } from '../../../hook/useAxios';

const GroupCreateContainer = () => {
  const navigate = useNavigate();
  const [axiosData, isLoading] = useAxios();
	
  const [inputs, setInputs] = useState({
    name: "",
    password: "",
	  passwordConfirm: ""
  });
  const inputEl = useRef(null);
  const [file, setFile] = useState();
  const { name, password, passwordConfirm } = inputs;
	
  const onChange = (e) => {
    const { name, value } = e.target;
 
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
	
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

  const createGroup = async () => {
      const response = await axiosData("useToken", "POST", "/group/create", {
		  groupName: name,
		  groupImage: file,
		  password: password
	  });
	  
	  // group id 저장
	  console.log(name);
	  console.log(password);
	  console.log(file);
  }
	
  const navigateTo = (url) => {
    navigate(url);
  }
  
  const props = {
    onChange,
    name,
    password,
    inputEl,
    file,
    createGroup,
    isLoading
  };

  return (
    <GroupCreatePresenter {...props}/>
  )
}

export default GroupCreateContainer;