import React from 'react';
import styled from 'styled-components';

const FloatingButton = ({onClick, children}) => {
  return (
    <Container onClick={() => onClick()}>
        <Text>{children}</Text>
    </Container>
  )
}

const Container = styled.div`
    height: 50px;
    width: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FF4F26;
    border-radius: 30px;
    position: fixed;
    bottom: 50px;
    left: 50%;
    transform: translate(-50%);
    cursor: pointer;
    z-index:2;
`;

const Text = styled.span`
    font-size: 16px;
    color: white;
    white-space:nowrap;
`

export default FloatingButton;