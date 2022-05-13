import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { ordersCollection } from "../firebase/firestoreUtils";
import { GlobalStyle } from "../globalStyle/GlobalStyle";
import Router from "../routing";
import { themes } from "../themes/themes";
import { useDispatch } from "react-redux";
import { setOrders } from "../redux/actions";
import AuthProvider from "../providers/AuthProvider";
import { onSnapshot } from "firebase/firestore";

const Root = () => {
  const dispatch = useDispatch();

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

  // useEffect(() => {
  //   const subscribe = ordersCollection.onSnapshot((snapshot) => {
  //     const dataFromOrdersCollection = snapshot.docs.map((doc) => {
  //       return {
  //         docId: doc.id,
  //         ...doc.data(),
  //       };
  //     });

  //     console.log(dataFromOrdersCollection);

  //     dispatch(setOrders(dataFromOrdersCollection));
  //   });

  //   return () => {
  //     subscribe();
  //   };
  // }, []);

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
