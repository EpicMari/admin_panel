import React from 'react';
import { StyledParagraph } from './StyledParagraph';

const Paragraph = ({ children, size, align, color, bold }) => {
  return (
    <StyledParagraph size={size} align={align} color={color} bold={bold}>
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
