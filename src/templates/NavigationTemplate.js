import React from 'react';
import NavBar from '../components/molecules/NavBar';
import Modal from '../components/molecules/Modal';

const NavigationTemplate = ({ children }) => {
  return (
    <>
      <NavBar />
      <Modal />
      {children}
    </>
  );
};

export default NavigationTemplate;
