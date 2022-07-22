import React from 'react';
import { StyledParagraph } from './StyledCustomErrorMessage';

const CustomErrorMessage = ({ children }) => {
  return <StyledParagraph>{children}</StyledParagraph>;
};

export default CustomErrorMessage;
