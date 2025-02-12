import { Transaction } from "../interface/Transaction";

export const generateId = () =>{
    return Math.random().toString(36).substr(2, 8);
}

export const getTotal = (transactions:Transaction[]) => {
    const total = transactions.reduce(
      (sum, transaction) => sum + transaction.price,
      0
    );
    return total;
  };