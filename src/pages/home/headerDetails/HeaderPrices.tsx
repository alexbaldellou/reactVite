import { Transaction } from "../../../interface/Transaction";
import ChartResumenPerMonth from "./chartResumenPerMonth/ChartResumenPerMonth";
import { PriceTotal } from "./priceTotal/PriceTotal";
import { SavingOfTheMonth } from "./savingOfTheMonth/SavingOfTheMonth";

interface HeaderPricesProps {
  transactions: Transaction[];
}

export const HeaderPrices = (props: HeaderPricesProps) => {
  const { transactions } = props;
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 w-full">
      <div className="bg-gray-800 p-4 rounded-lg">
        <p className="text-gray-400">Cuenta</p>
        <p className="text-xl font-bold">
          <PriceTotal transactions={transactions} />
        </p>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg">
        <p className="text-gray-400">Gasto en el mes</p>
        <p className="text-xl font-bold">
          <SavingOfTheMonth transactions={transactions} />
        </p>
      </div>
      <div className="bg-gray-800 rounded-lg">
        <p className="text-gray-400"></p>
        <ChartResumenPerMonth data={transactions} />
      </div>
      <div className="bg-gray-800 p-4 rounded-lg">
        <p className="text-gray-400"></p>
        <p className="text-xl font-bold"></p>
      </div>
    </div>
  );
};
