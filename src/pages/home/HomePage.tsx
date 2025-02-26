import { useEffect, useState } from "react";
import { Transaction } from "../../interface/Transaction";
import { HeaderPrices } from "./headerDetails/HeaderPrices";
import FormNewItem from "./formNewItem/FormNewItem";
import ViewTransactions from "./viewTransactions/ViewTransactions";

export const HomePage = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/transactions")
      .then((res) => res.json())
      .then((data) => setTransactions(data));
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 p-5">
      <h1 className="text-2xl font-bold mb-4">Gestión Financiera</h1>
      <FormNewItem
        transactions={transactions}
        onChangeTransactions={setTransactions}
      />
      <div className="w-full overflow-hidden mt-5">
        <HeaderPrices transactions={transactions} />
        <ViewTransactions
          transactions={transactions}
          onChangeTransactions={setTransactions}
        />
      </div>
    </div>
  );
};
