import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthContext from "../context";
import { auth } from "../firebase/firebaseConfig";
import { usersCollection } from "../firebase/firestoreUtils";
import { setUser } from "../redux/actions";

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.userReducer.currentUser);

  const createAcc = (email, password, firstName, lastName) => {
    dispatch(setUser(null));
    createUserWithEmailAndPassword(auth, email, password)
      .then((item) => {
        console.log(item);
        usersCollection
          .doc(item.user.uid)
          .set({
            firstName,
            lastName,
            email,
            password,
          })
          .then((r) => console.log(r))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  const signIn = (email, password) => {
    dispatch(setUser(null));
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user, "signIn");
      })
      .catch((err) => console.log(err));
  };

  const signOut = () => {
    auth.signOut().then(() => window.location.reload());
  };

  useEffect(() => {
    const verificationUser = auth.onAuthStateChanged((user) => {
      if (user) {
        // const userByUid = usersCollection.doc(user.uid);
        const userByUid = getDoc(doc(usersCollection, user.uid));
        userByUid.then((doc) => {
          if (doc.exists) {
            const userData = doc.data();
            const userAcc = {
              id: user.uid,
              email: userData.email,
              firstName: userData.firstName,
              lastName: userData.lastName,
            };
            dispatch(setUser(userAcc));
          }
        });
      } else {
        dispatch(setUser("signedout"));
      }
    });
    return verificationUser;
  }, []);

  // useEffect(() => {
  //   const verificationUser = auth.onAuthStateChanged((user) => {
  //     if (user) {
  // const userByUid = usersCollection.doc(user.uid);
  //       userByUid.get().then((doc) => {
  //         if (doc.exists) {
  //           const userData = doc.data();
  //           const userAcc = {
  //             id: user.uid,
  //             email: userData.email,
  //             firstName: userData.firstName,
  //             lastName: userData.lastName,
  //           };
  //           dispatch(setUser(userAcc));
  //         }
  //       });
  //     } else {
  //       dispatch(setUser("signedout"));
  //     }
  //   });
  //   return verificationUser;
  // }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut, createAcc, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
