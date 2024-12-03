import React from 'react';
import * as Style from './Loading.style';

const Loading = () => {
  return (
    <Style.Background>
      <img src={require('../../assets/images/rolling.gif')} alt="로딩중" width="50px" />
    </Style.Background>
  );
};

export default Loading