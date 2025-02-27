import { ChangeEvent, useEffect, useState } from "react";
import { Transaction } from "../../../../interface/Transaction";

interface FilterByAgeProps {
  transactions: Transaction[];
  onChangeCurrentData: (transactions: Transaction[]) => void;
}

export const FilterByAge = (props: FilterByAgeProps) => {
  const { transactions, onChangeCurrentData } = props;
  const [age, setAge] = useState<string>("");
  const [selectAges, setSelectAges] = useState<number[]>([]);
  useEffect(() => {
    if (transactions) {
      getAges();
    }
    filterTransactionsByAge();
  }, [transactions, age]);

  //TODO: Filtrar tabla para mostrar datos del año seleccionado
  const filterTransactionsByAge = () => {
    const transactionsByAge = transactions.filter((trans) => {
      const year = new Date(trans.date).getFullYear();
      return year === parseInt(age);
    });
    onChangeCurrentData(transactionsByAge);
  };

  const getAges = () => {
    const w = [
      ...new Set(transactions.map((item) => new Date(item.date).getFullYear())),
    ];
    setSelectAges(w);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setAge(e.target.value);
  };

  return (
    <select
      name="category"
      className="border p-2 w-full rounded-md border-slate-900 placeholder:text-slate-100 text-slate-100"
      onChange={handleChange}
      required
    >
      {selectAges.length > 0 &&
        selectAges.map((val) => {
          return (
            <option key={val} value={val}>
              {val}
            </option>
          );
        })}
    </select>
  );
};
