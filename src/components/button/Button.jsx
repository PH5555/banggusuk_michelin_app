import React from 'react';
import styled, { css } from "styled-components";

const Button = ({backgroundColor, color, shadow, children}) => {
  return (
    <Container backgroundColor={backgroundColor} color={color} shadow={shadow}>{children}</Container>
  )
}

const Container = styled.div`
    ${props => css`
        width: calc(100vw - 60px);
    `};
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
	  justify-content: center;
    color: ${(props) => props.color};
    background-color: ${(props) => props.backgroundColor};
    box-shadow: ${(props) => props.shadow ? '4px 4px 23px 2px rgba(0, 0, 0, 0.25)' : ''};
    border-radius: 10px;
`;

export default Button;