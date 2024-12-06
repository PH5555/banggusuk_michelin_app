import React, {useState}  from 'react';
import GroupJoinPresenter from '../presenter/GroupJoinPresenter';
import { useNavigate } from 'react-router-dom';
import { useAxios } from '../../../hook/useAxios';

const GroupJoinContainer = () => {
  const navigate = useNavigate();
  const [axiosData, isLoading] = useAxios();
	
  const [inputs, setInputs] = useState({
    name: "",
    password: "",
  });

  const { name, password } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
 
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const joinGroup = () => {

  }

  const props = {
    name,
    password,
    onChange,
    joinGroup,
    isLoading
  };

  return (
    <GroupJoinPresenter {...props}/>
  )
}

export default GroupJoinContainer;