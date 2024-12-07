import React from 'react';
import Styled, {css} from 'styled-components';
import { IoIosSearch } from "react-icons/io";

const TextArea = ({onChange, value, name, type, long, search, searchEvent}) => {
  return (
      <Container onChange={onChange} value={value} name={name}></Container>
  )
}

const Container = Styled.textarea`
    ${props => css`
        width: calc(100vw - 60px);
    `};
    height: 76px;
    background-color: #F3F3F3;
    border-radius: 10px;
    margin-top: 8px;
    border: none;
    font-size: 16px;
`;

export default TextArea;
