import React from "react";
import LogoIcon from "../../../assets/mainLayout/data-graph-svgrepo-com.svg";
import { StyledLogo } from "./StyledLogo";

const Logo = ({ size }) => {
  return <StyledLogo src={LogoIcon} alt="logo" size={size} />;
};

export default Logo;
