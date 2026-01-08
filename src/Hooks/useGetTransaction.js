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
  const [totalTransaction, setTotalTransaction] = useState({
    bal: 0.0,
    income: 0.0,
    expense: 0.0,
  });

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
        let totalIncome = 0;
        let totalExpenses = 0;
        snapshot.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;
          docs.push({ ...data, id });
          if (data.transactionType === "expense") {
            totalExpenses += Number(data.transactionAmount);
          } else {
            totalIncome += Number(data.transactionAmount);
          }
        });
        let balance = totalIncome - totalExpenses;

        setTransaction(docs);
        setTotalTransaction({
          bal: balance,
          income: totalIncome,
          expense: totalExpenses,
        });
      });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getTransaction();
  }, []);

  return { transaction, totalTransaction };
}
