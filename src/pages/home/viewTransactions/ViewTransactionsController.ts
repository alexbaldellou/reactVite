import { useState } from "react";
import { Transaction } from "../../../interface/Transaction";
import { deleteTransactionService } from "../../../services/transaction.service";
import { ViewTransactionsProps } from "./ViewTransactions"

export const ViewTransactionsController = (props: ViewTransactionsProps) => {
    const { transactions, onChangeTransactions } = props;
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 14;
    const totalPages = Math.ceil(transactions.length / itemsPerPage);
    const currentData = transactions.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );

    const deleteTransaction = async (transactionID: Transaction) =>{
        await deleteTransactionService(transactionID.id);
        const updateTransaction = transactions.filter((trans) => trans.id !== transactionID.id);
        onChangeTransactions(updateTransaction);
    }
  
  return {
    totalPages,
    currentData,
    currentPage,
    deleteTransaction,
    setCurrentPage
  }
}
