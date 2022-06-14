import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { deletedOrders, ordersCollection } from "../firebase/firestoreUtils";
import { GlobalStyle } from "../globalStyle/GlobalStyle";
import Router from "../routing";
import { themes } from "../themes/themes";
import { useDispatch, useSelector } from "react-redux";
import {
  setCoordinates,
  setDeletedOrders,
  setOrders,
  setWeatherData,
} from "../redux/actions";
import AuthProvider from "../providers/AuthProvider";
import { onSnapshot } from "firebase/firestore";
import axios from "axios";
import {
  countUnreadThreads,
  fetchEmails,
  formatThreads,
  mountScripts,
} from "../google";

const Root = () => {
  const dispatch = useDispatch();
  const weatherCords = useSelector(
    ({ utilsReducer }) => utilsReducer.coordinates
  );
  const googleAcc = useSelector(({ userReducer }) => userReducer.googleAcc);

  useEffect(() => {
    mountScripts();
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        dispatch(
          setCoordinates({
            lat: position.coords.latitude,
            lot: position.coords.longitude,
          })
        );
      });
    }
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${weatherCords.lat}&lon=${weatherCords.lot}&units=metric&exclude=alerts,minutely&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      )
      .then((res) => dispatch(setWeatherData(res.data)))
      .catch((err) => console.log(err));
  }, [dispatch, weatherCords]);

  useEffect(() => {
    const subscribe = onSnapshot(ordersCollection, (snapshot) => {
      const dataFromOrdersCollection = snapshot.docs.map((doc) => {
        return {
          docId: doc.id,
          ...doc.data(),
        };
      });
      dispatch(setOrders(dataFromOrdersCollection));
    });
    return () => {
      subscribe();
    };
  }, []);

  useEffect(() => {
    const subscribe = onSnapshot(deletedOrders, (snapshot) => {
      const dataFromDeletedOrders = snapshot.docs.map((doc) => {
        return {
          docId: doc.id,
          ...doc.data(),
        };
      });
      dispatch(setDeletedOrders(dataFromDeletedOrders));
    });
    return () => {
      subscribe();
    };
  }, []);

  // useEffect(() => {
  //   if (googleAcc) {
  //     fetchEmails()
  //       .then((emails) => {
  //         const unreadThreadsQuantity = countUnreadThreads(emails);
  //         const formattedThreads = formatThreads(emails);
  //         console.log(unreadThreadsQuantity);
  //         console.log(formattedThreads);
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // }, [googleAcc]);

  return (
    <AuthProvider>
      <ThemeProvider theme={themes}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </AuthProvider>
  );
};

export default Root;
