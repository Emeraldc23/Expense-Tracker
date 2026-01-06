import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../Config/firebase-config";
import { useGetInfo } from "./useGetInfo";

export function useAddTransaction() {
  const transactionCollectionRef = collection(db, "transactions");
  const { userID } = useGetInfo();
  async function addTransaction({
    transactionAmount,
    description,
    category,
    transactionType,
  }) {
    await addDoc(transactionCollectionRef, {
      userID,
      transactionAmount: Number(transactionAmount),
      description,
      transactionType,
      category,
      createdAt: serverTimestamp(),
    });
  }
  return { addTransaction };
}
