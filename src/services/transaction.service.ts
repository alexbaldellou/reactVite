import { Transaction } from "../interface/Transaction";

export const setTransaction = async (transaction:Transaction) =>{
    await fetch("http://localhost:5000/transactions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(transaction),
      });
}

export const deleteTransactionService = async (id:string) =>{
    await fetch(`http://localhost:5000/transactions/${id}`, {
        method: "DELETE",
      });
}