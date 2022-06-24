import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Email from '../../components/organisms/Email';
import { StyledWrapper } from './StyledMessages';
import GoogleIcon from '@mui/icons-material/Google';
import LoginIcon from '@mui/icons-material/Login';
import { useContext } from 'react';
import { GoogleContext } from '../../context';

const Messages = () => {
  const { handleSignoutClick, handleAuthClick } = useContext(GoogleContext);

  const [messagesToView, setMessagesToView] = useState(null);

  const googleAcc = useSelector(({ userReducer }) => userReducer.googleAcc);
  const messages = useSelector(({ utilsReducer }) => utilsReducer.messages);
  const messagesLabel = useSelector(({ utilsReducer }) => utilsReducer.messagesLabel);

  useEffect(() => {
    const getMessages = (label = 'INBOX') =>
      messages.filter((message) => message.messagesArr[0].labelIds.includes(label));
    setMessagesToView(getMessages(messagesLabel));
  }, [messagesLabel, messages]);

  return (
    <StyledWrapper>
      {!googleAcc && (
        <Button
          id="authorize_button"
          variant="contained"
          endIcon={<GoogleIcon />}
          onClick={() => handleAuthClick()}
        >
          Authorize
        </Button>
      )}
      {googleAcc && (
        <Button
          id="signout_button"
          variant="contained"
          endIcon={<LoginIcon />}
          onClick={() => handleSignoutClick()}
        >
          Sign Out
        </Button>
      )}
      <Email messages={messagesToView} googleAcc={googleAcc} />
    </StyledWrapper>
  );
};

export default Messages;
