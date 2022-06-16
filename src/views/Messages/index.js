import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Email from "../../components/organisms/Email";
import { StyledWrapper } from "./StyledMessages";
import { countUnreadThreads, fetchEmails, formatThreads } from "../../google";
import {
  setGoogleAcc,
  setMessages,
  setUndeadQuantity,
} from "../../redux/actions";
import GoogleIcon from "@mui/icons-material/Google";
import LoginIcon from "@mui/icons-material/Login";

const Messages = () => {
  const gapi = window.gapi;
  const dispatch = useDispatch();

  const [messagesToView, setMessagesToView] = useState(null);

  const googleAcc = useSelector(({ userReducer }) => userReducer.googleAcc);
  const messages = useSelector(({ utilsReducer }) => utilsReducer.messages);
  const messagesLabel = useSelector(
    ({ utilsReducer }) => utilsReducer.messagesLabel
  );

  useEffect(() => {
    const getMessages = (label) =>
      messages.filter((message) =>
        message.messagesArr[0].labelIds.includes(label)
      );
    setMessagesToView(getMessages(messagesLabel));
  }, [messagesLabel, messages]);

  const updateSignIn = (isSignIn) => {
    if (isSignIn) {
      const auth2 = gapi.auth2.getAuthInstance();
      const user = auth2.currentUser.get();
      const profile = user.getBasicProfile();

      const userData = {
        id: profile.getId(),
        name: profile.getName(),
        email: profile.getEmail(),
      };

      dispatch(setGoogleAcc(userData));
    } else {
      dispatch(setGoogleAcc(null));
    }
  };

  const authenticate = () => {
    return (
      gapi &&
      gapi.auth2
        .getAuthInstance()
        .signIn({
          scope:
            "https://mail.google.com/ https://www.googleapis.com/auth/gmail.compose https://www.googleapis.com/auth/gmail.modify https://www.googleapis.com/auth/gmail.readonly",
        })
        .then(
          (res) => {
            const auth2 = gapi.auth2.getAuthInstance();
            auth2.isSignedIn.listen(updateSignIn);
            updateSignIn(auth2.isSignedIn.get());
          },
          (err) => {
            console.error("Error signing in", err);
          }
        )
    );
  };
  const loadClient = () => {
    gapi.client.setApiKey(`${process.env.REACT_APP_FIREBASE_API_KEY}`);
    return (
      gapi &&
      gapi.client
        .load("https://gmail.googleapis.com/$discovery/rest?version=v1")
        .then(
          () => {
            fetchEmails()
              .then((emails) => {
                const unreadThreadsQuantity = countUnreadThreads(emails);
                const formattedThreads = formatThreads(emails);
                dispatch(setMessages(formattedThreads));
                dispatch(setUndeadQuantity(unreadThreadsQuantity));
              })
              .catch((err) => console.log(err));
          },
          (err) => {
            console.error("Error loading GAPI client for API", err);
          }
        )
    );
  };

  const execute = () => {
    return (
      gapi &&
      gapi.client.gmail.users
        .getProfile({
          userId: "me",
        })
        .then(
          (res) => {
            dispatch(setGoogleAcc(null));
          },
          (err) => {
            console.error("Execute error", err);
          }
        )
    );
  };
  gapi &&
    gapi.load("client:auth2", function () {
      gapi.auth2.init({
        client_id: `${process.env.REACT_APP_GOOGLE_CLIENT_ID}`,
      });
    });

  return (
    <StyledWrapper>
      {!googleAcc && (
        <Button
          variant="contained"
          onClick={() => authenticate().then(loadClient)}
          endIcon={<GoogleIcon />}
        >
          LOG IN
        </Button>
      )}
      {googleAcc && (
        <Button
          variant="contained"
          onClick={() => execute()}
          endIcon={<LoginIcon />}
        >
          LOG OUT
        </Button>
      )}
      <Email messages={messagesToView} />
    </StyledWrapper>
  );
};

export default Messages;
