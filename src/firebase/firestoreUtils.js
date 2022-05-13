// import { firestore } from "./firebaseConfig";
import { collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { firestore } from "./firebaseConfig";

// export const usersCollection = firestore.collection("adminPanelUsers");
export const usersCollection = collection(firestore, "adminPanelUsers");
// export const ordersCollection = firestore.collection("orders");
export const ordersCollection = collection(firestore, "orders");

// export const deleteOrderFromFirestore = (ordersToDelete) => {
//   ordersToDelete.forEach((orderId) => {
//     ordersCollection.doc(orderId).delete();
//   });
// };
export const deleteOrderFromFirestore = (ordersToDelete) => {
  ordersToDelete.forEach((orderId) => {
    deleteDoc(doc(ordersCollection, orderId));
  });
};

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
// export const editOrderFromFirestore = (
//   orderId,
//   status,
//   totalPrice,
//   createdAt
// ) => {
//   ordersCollection.doc(orderId).update({ status, totalPrice, createdAt });
// };
