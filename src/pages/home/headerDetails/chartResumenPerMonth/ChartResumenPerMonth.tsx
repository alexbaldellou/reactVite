import { Transaction } from "../../../../interface/Transaction";
import { Histogram } from "../../../../components/charts/histogram/Histogram";
import { useEffect, useState } from "react";
import { DataByMonth } from "../../../../interface/ChartResumenPerMonth.interface";

interface ChartResumenPerMonthProps {
  data: Transaction[];
}

const ChartResumenPerMonth = (props: ChartResumenPerMonthProps) => {
  const { data } = props;
  const [dataByMonth, setDataByMonth] = useState<DataByMonth[]>([]);
  useEffect(() => {
    const e = getIncomeSpentByMonth();
    setDataByMonth(e);
  }, [data]);

  const getIncomeSpentByMonth = () => {
    const monthArr: Record<string, DataByMonth> = {};

    data.forEach(({ date, price, type }) => {
      const month = date.substring(0, 7);
      if (!monthArr[month]) {
        monthArr[month] = { month, ingresos: 0, gastos: 0 };
      }
      if (type === "ingreso") {
        monthArr[month].ingresos += price;
      } else {
        monthArr[month].gastos += Math.abs(price);
      }
    });

    return Object.values(monthArr);
  };
  console.log("dataByMonth", dataByMonth);
  return (
    <Histogram
      data={dataByMonth}
      dataKeyBar1="ingresos"
      dataKeyBar2="gastos"
      dataKeyX="month"
    />
  );
};

export default ChartResumenPerMonth;
