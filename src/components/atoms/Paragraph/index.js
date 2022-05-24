import React from "react";
import { StyledParagraph } from "./StyledParagraph";

const Paragraph = ({ children, size, align, color }) => {
  return (
    <StyledParagraph size={size} align={align} color={color}>
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
