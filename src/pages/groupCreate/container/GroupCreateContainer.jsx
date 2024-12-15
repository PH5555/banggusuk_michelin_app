import React, {useState, useRef, useEffect, useCallback} from 'react';
import GroupCreatePresenter from '../presenter/GroupCreatePresenter'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getCookie, setCookie } from '../../../util/Cookie';


const GroupCreateContainer = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
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

  const createGroup = () => {
	  const formData = new FormData();
	  formData.append("file", file);
	  formData.append("groupName", name);
	  formData.append("password", password);
	  setIsLoading(true);
	  axios.post('https://banggusuk-michelin.onrender.com/group/create', formData, {
		  headers: {'X-AUTH-TOKEN': getCookie('accessToken')},
		  
	  }).then((response) => {
		  const res = response.data;
		  if(res.status === "success"){
			const groupId = res.data.groupId;
			setCookie('groupId', groupId);
			navigate('/home');
			console.log('그룹 만들기 성공!', groupId);
		  }
		  else {
			console.log('그룹 만들기 실패!');
		  }
	  }).catch((error) => {
		  console.log(error);
	  }).finally(()=>{
		  setIsLoading(false);
	  });
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