import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { firestore } from "./firebaseConfig";

export const usersCollection = collection(firestore, "adminPanelUsers");
export const ordersCollection = collection(firestore, "orders");
export const deletedOrders = collection(firestore, "deletedOrders");

export const deleteOrderFromFirestore = (ordersToDelete) => {
  ordersToDelete.forEach((orderId) => {
    getDoc(doc(ordersCollection, orderId))
      .then((doc) => {
        const orderToDelete = doc.data();

        addDoc(deletedOrders, orderToDelete)
          .then(() => console.log("add order"))
          .catch((err) => console.log(err));
      })
      .then(() => deleteDoc(doc(ordersCollection, orderId)))
      .catch((err) => console.log(err));
  });
};

// export const deleteOrderFromFirestore = (ordersToDelete) => {
//   ordersToDelete.forEach((orderId) => {
//     console.log(orderId);
//     // deleteDoc(doc(ordersCollection, orderId));
//   });
// };

export const editOrderFromFirestore = (
  orderId,
  status,
  totalPrice,
  createdAt
) => {
  updateDoc(doc(ordersCollection, orderId), {
    status,
    totalPrice,
    createdAt,
  });
};
