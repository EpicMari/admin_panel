import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleContext } from '../context';
import { countUnreadThreads, fetchEmails, formatThreads } from '../google';
import { setGoogleAcc, setMessages, setUndeadQuantity } from '../redux/actions';

const GoogleProvider = ({ children }) => {
  const gapi = window.gapi;
  const google = window.google;
  const dispatch = useDispatch();
  const [gapiInited, setGapiInited] = useState(false);
  const [gisInited, setGisInited] = useState(false);

  const CLIENT_ID = `${process.env.REACT_APP_GOOGLE_CLIENT_ID}`;
  const API_KEY = `${process.env.REACT_APP_FIREBASE_API_KEY}`;
  const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest';
  const SCOPES =
    'https://www.googleapis.com/auth/gmail.readonly https://mail.google.com/ https://www.googleapis.com/auth/gmail.compose https://www.googleapis.com/auth/gmail.modify';

  let tokenClient;

  const gapiLoaded = () => {
    gapi && gapi.load('client', intializeGapiClient);
  };

  const intializeGapiClient = async () => {
    await gapi.client.init({
      apiKey: API_KEY,
      discoveryDocs: [DISCOVERY_DOC],
    });
    setGapiInited(true);
  };

  const gisLoaded = () => {
    tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: SCOPES,
      callback: '', // defined later
    });
    setGisInited(true);
  };

  const handleAuthClick = () => {
    tokenClient.callback = async (resp) => {
      if (resp.error !== undefined) {
        throw resp;
      }
      getProfile();
      fetchEmails()
        .then((emails) => {
          const unreadThreadsQuantity = countUnreadThreads(emails);
          const formattedThreads = formatThreads(emails);
          dispatch(setMessages(formattedThreads));
          dispatch(setUndeadQuantity(unreadThreadsQuantity));
        })
        .catch((err) => console.log(err));
      await listLabels();
    };

    if (gapi.client.getToken() === null) {
      // Prompt the user to select a Google Account and ask for consent to share their data
      // when establishing a new session.
      tokenClient.requestAccessToken({ prompt: 'consent' });
    } else {
      // Skip display of account chooser and consent dialog for an existing session.
      tokenClient.requestAccessToken({ prompt: '' });
    }
  };

  const handleSignoutClick = () => {
    dispatch(setGoogleAcc(null));
  };

  const getProfile = () => {
    return gapi.client.gmail.users
      .getProfile({
        userId: 'me',
      })
      .then((res) => dispatch(setGoogleAcc(res)))

      .catch((err) => console.log(err));
  };

  const listLabels = async () => {
    let response;
    try {
      response = await gapi.client.gmail.users.labels.list({
        userId: 'me',
      });
    } catch (err) {
      console.log(err);
      return;
    }
    const labels = response.result.labels;
    if (!labels || labels.length === 0) {
      console.log('No labels found.');
      return;
    }

    const output = labels.reduce((str, label) => `${str}${label.name}\n`, 'Labels:\n');
  };

  return (
    <GoogleContext.Provider value={{ gapiLoaded, gisLoaded, handleSignoutClick, handleAuthClick }}>
      {children}
    </GoogleContext.Provider>
  );
};

export default GoogleProvider;
