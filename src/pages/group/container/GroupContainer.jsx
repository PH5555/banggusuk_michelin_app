import React from 'react';
import GroupPresenter from '../presenter/GroupPresenter'
import { useNavigate } from 'react-router-dom';

const GroupContainer = () => {
  const navigate = useNavigate();
  const navigateTo = (url) => {
    navigate(url);
  }
	
  const props = {
	navigateTo
  };

  return (
    <GroupPresenter {...props}/>
  )
}

export default GroupContainer;