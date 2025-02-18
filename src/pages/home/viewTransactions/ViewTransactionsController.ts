import { Transaction } from "../../../interface/Transaction";
import { deleteTransactionService } from "../../../services/transaction.service";
import { ViewTransactionsProps } from "./ViewTransactions"

export const ViewTransactionsController = (props: ViewTransactionsProps) => {
    const { transactions, onChangeTransactions } = props;

    const deleteTransaction = async (transactionID: Transaction) =>{
        await deleteTransactionService(transactionID.id);
        const updateTransaction = transactions.filter((trans) => trans.id !== transactionID.id);
        onChangeTransactions(updateTransaction);
    }
  return {
    transactions,
    deleteTransaction
  }
}
