import { useEffect, useState } from "react";
import { Transaction } from "../../interface/Transaction";
import { HeaderPrices } from "../../components/headerPrices/HeaderPrices";
import FormNewItem from "../../components/formNewItem/FormNewItem";

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
        <table className="min-w-full bg-slate-800 text-white border-gray-200 shadow-md  rounded-lg">
          <thead>
            <tr className="bg-gray-100 border-b text-slate-800">
              <th className="py-2 px-4 text-left">Nombre</th>
              <th className="py-2 px-4 text-left">Categoría</th>
              <th className="py-2 px-4 text-left">Fecha</th>
              <th className="py-2 px-4 text-right">Precio</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((trans) => (
              <tr
                key={trans.id}
                className="hover:bg-gray-50 hover:text-slate-800"
              >
                <td className="py-2 px-4">{trans.name}</td>
                <td className="py-2 px-4">{trans.category}</td>
                <td className="py-2 px-4">{trans.date}</td>
                <td className="py-2 px-4 text-right">{trans.price} €</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
