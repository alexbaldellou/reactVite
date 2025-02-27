import { TrashIcon } from "@heroicons/react/24/outline";
import { Transaction } from "../../../interface/Transaction";
import { ViewTransactionsController } from "./ViewTransactionsController";
import Pagination from "../../../components/pagination/Pagination";
import { FilterByAge } from "./filter/FilterByAge";

export interface ViewTransactionsProps {
  transactions: Transaction[];
  onChangeTransactions: (transactions: Transaction[]) => void;
}
const ViewTransactions = (props: ViewTransactionsProps) => {
  const {
    totalPages,
    currentData,
    currentPage,
    transactions,
    deleteTransaction,
    setCurrentPage,
    onChangeCurrent,
  } = ViewTransactionsController(props);

  return (
    <>
      <FilterByAge
        transactions={transactions}
        onChangeCurrentData={onChangeCurrent}
      />
      <table className="min-w-full bg-slate-800 text-white border-gray-200 shadow-md  rounded-lg">
        <thead>
          <tr className="bg-gray-100 border-b text-slate-800">
            <th className="py-2 px-4 text-left">Nombre</th>
            <th className="py-2 px-4 text-left">Categoría</th>
            <th className="py-2 px-4 text-left">Fecha</th>
            <th className="py-2 px-4 text-right">Precio</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((trans: Transaction) => {
            const priceFormated = trans.price.toLocaleString("es-ES");
            return (
              <tr
                key={trans.id}
                className="hover:bg-gray-50 hover:text-slate-800"
              >
                <td className="py-2 px-4">{trans.name}</td>
                <td className="py-2 px-4">{trans.category}</td>
                <td className="py-2 px-4">{trans.date}</td>
                <td className="py-2 px-4 text-right">{priceFormated} €</td>
                <td>
                  <TrashIcon
                    className="h-6 w-6 cursor-pointer hover:text-red-500"
                    onClick={() => deleteTransaction(trans)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        onChangePage={setCurrentPage}
        totalPages={totalPages}
      />
    </>
  );
};

export default ViewTransactions;
