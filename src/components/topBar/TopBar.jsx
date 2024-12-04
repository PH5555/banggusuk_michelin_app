import React from 'react';
import styled, { css } from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


const TopBar = () => {
  const navigate = useNavigate();
	
  return (
	  <Container onClick={()=>{navigate(-1)}}>
		  <IoIosArrowBack size={30}/>
	  </Container>
    
  )
}

const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  cursor: pointer;
`;

export default TopBar;