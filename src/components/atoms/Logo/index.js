import React from 'react';
import LogoIcon from '../../../assets/mainLayout/data-graph-svgrepo-com.svg';
import { StyledLogo, StyledLogoBox, StyledSpan } from './StyledLogo';

const Logo = ({ size }) => {
  return (
    <StyledLogoBox>
      <StyledLogo src={LogoIcon} alt="logo" size={size} />
      <StyledSpan>PanelStar</StyledSpan>
    </StyledLogoBox>
  );
};

export default Logo;
