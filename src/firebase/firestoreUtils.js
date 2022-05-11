import { firestore } from "./firebaseConfig";

export const usersCollection = firestore.collection("adminPanelUsers");
export const ordersCollection = firestore.collection("orders");

export const deleteOrderFromFirestore = (ordersToDelete) => {
  ordersToDelete.forEach((orderId) => {
    ordersCollection.doc(orderId).delete();
  });
};

export const editOrderFromFirestore = (
  orderId,
  status,
  totalPrice,
  createdAt
) => {
  ordersCollection.doc(orderId).update({ status, totalPrice, createdAt });
};
