import React from "react";
import { StyledParagraph } from "./StyledParagraph";

const Paragraph = ({ children, size, align }) => {
  return (
    <StyledParagraph size={size} align={align}>
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
