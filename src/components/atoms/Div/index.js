import React from 'react';
import { StyledDiv } from './StyledDiv';

const Div = ({ children, background, form }) => {
  return (
    <StyledDiv background={background} form={form}>
      {children}
    </StyledDiv>
  );
};

export default Div;
