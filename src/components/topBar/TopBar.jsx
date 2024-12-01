import React from 'react';
import styled, { css } from "styled-components";
import { IoIosArrowBack } from "react-icons/io";

const TopBar = () => {
  return (
	  <Container>
		  <IoIosArrowBack size={30}/>
	  </Container>
    
  )
}

const Container = styled.div`
  position: fixed;
  top: 30px;
  cursor: pointer;
`;

export default TopBar;