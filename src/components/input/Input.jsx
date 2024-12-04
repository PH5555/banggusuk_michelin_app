import React from 'react';
import Styled, {css} from 'styled-components';

const Input = ({onChange, value, name, type, long}) => {
  return (
    <Container type={type} onChange={onChange} value={value} long={long} name={name}></Container>
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
