import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../Config/firebase-config";
import { useGetInfo } from "./useGetInfo";

export function useGetTransaction() {
  const [transaction, setTransaction] = useState([]);

  const { userID } = useGetInfo();
  const transactionCollectionRef = collection(db, "transactions");
  async function getTransaction() {
    try {
      const queryTransaction = query(
        transactionCollectionRef,
        where("userID", "==", userID),
        orderBy("createdAt")
      );

      onSnapshot(queryTransaction, (snapshot) => {
        const docs = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;
          docs.push({ ...data, id });
        });
        setTransaction(docs);
      });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getTransaction();
  }, []);

  return { transaction };
}
