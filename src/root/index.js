import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { ordersCollection } from "../firebase/firestoreUtils";
import { GlobalStyle } from "../globalStyle/GlobalStyle";
import Router from "../routing";
import { themes } from "../themes/themes";
import { useDispatch } from "react-redux";
import { setOrders } from "../redux/actions";

const Root = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const subscribe = ordersCollection.onSnapshot((snapshot) => {
      const dataFromOrdersCollection = snapshot.docs.map((doc) => {
        return {
          docId: doc.id,
          ...doc.data(),
        };
      });

      console.log(dataFromOrdersCollection);

      dispatch(setOrders(dataFromOrdersCollection));
    });

    return () => {
      subscribe();
    };
  }, []);

  return (
    <ThemeProvider theme={themes}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
};

export default Root;
