import { firestore } from "./firebaseConfig";

export const usersCollection = firestore.collection("adminPanelUsers");
export const ordersCollection = firestore.collection("orders");
