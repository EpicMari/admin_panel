import React from "react";
import { StyledParagraph } from "./StyledParagraph";

const Paragraph = ({ children, size }) => {
  return <StyledParagraph size={size}>{children}</StyledParagraph>;
};

export default Paragraph;
