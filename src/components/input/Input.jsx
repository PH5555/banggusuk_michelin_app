import React from 'react';
import Styled, {css} from 'styled-components';

const Input = ({long}) => {
  return (
    <Container long={long}></Container>
  )
}

const Container = Styled.input`
    ${props => css`
        width: calc(100vw - 60px);
    `};
    height: ${(props) => props.long ? '76px' : '44px'};
    background-color: #F3F3F3;
    border-radius: 10px;
    margin-top: 8px;
    border: none;
    font-size: 16px;
`;

export default Input;
