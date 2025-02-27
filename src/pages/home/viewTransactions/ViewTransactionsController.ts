import { useEffect, useState } from "react";
import { Transaction } from "../../../interface/Transaction";
import { deleteTransactionService } from "../../../services/transaction.service";
import { ViewTransactionsProps } from "./ViewTransactions"

export const ViewTransactionsController = (props: ViewTransactionsProps) => {
    const { transactions, onChangeTransactions } = props;
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState<Transaction[]>([]);
    const itemsPerPage = 25;
    const totalPages = Math.ceil(data.length / itemsPerPage);

    useEffect(() =>{
      if(transactions){
        setData(transactions)
      }
    }, [transactions])

    const currentData = data.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    )

    const onChangeCurrent = (data:Transaction[]) =>{
      setData(data)
    }

    const deleteTransaction = async (transactionID: Transaction) =>{
        await deleteTransactionService(transactionID.id);
        const updateTransaction = transactions.filter((trans) => trans.id !== transactionID.id);
        onChangeTransactions(updateTransaction);
    }
  
  return {
    totalPages,
    currentData,
    currentPage,
    transactions,
    deleteTransaction,
    setCurrentPage,
    onChangeCurrent
  }
}
