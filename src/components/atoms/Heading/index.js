import React from 'react';
import { H1, H2, H3, H4, H5, H6 } from './StyledHeading';

const Heading = ({ children, headingType }) => {
  const _renderHeading = () => {
    switch (headingType) {
      case 'h1':
        return <H1>{children}</H1>;
      case 'h2':
        return <H2>{children}</H2>;
      case 'h3':
        return <H3>{children}</H3>;
      case 'h4':
        return <H4>{children}</H4>;
      case 'h5':
        return <H5>{children}</H5>;
      default:
        return <H6>{children}</H6>;
    }
  };
  return <>{_renderHeading()}</>;
};

export default Heading;
