import React from 'react';
import Styled, {css} from 'styled-components';
import { IoIosSearch } from "react-icons/io";

const Input = ({onChange, value, name, type, long, search, searchEvent}) => {
  return (
    <Wrapper>
      <Container type={type} onChange={onChange} value={value} long={long} name={name}></Container>
      {
        search? (<Icon onClick={()=>searchEvent()}>
          <IoIosSearch size={24}/>
        </Icon>) : null
      }
    </Wrapper>
  )
}

const Wrapper = Styled.div`
  position: relative
`

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

const Icon = Styled.div`
  position: absolute;
  right: 40px;
  top: 20px;
  cursor: pointer;
`

export default Input;
