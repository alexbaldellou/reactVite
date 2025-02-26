import { Transaction } from "../../../../interface/Transaction";
import { Histogram } from "../../../../components/charts/histogram/Histogram";
import { useEffect, useState } from "react";
import { DataByMonth } from "../../../../interface/ChartResumenPerMonth.interface";
import { Temporal } from "@js-temporal/polyfill";
import { formatDateTemporal } from "../../../../utils/Utils";

interface ChartResumenPerMonthProps {
  data: Transaction[];
}

const ChartResumenPerMonth = (props: ChartResumenPerMonthProps) => {
  const { data } = props;
  const [dataByMonth, setDataByMonth] = useState<DataByMonth[]>([]);

  useEffect(() => {
    const e = getIncomeSpentByMonth();
    setDataByMonth(e.slice(0, 2));
  }, [data]);

  const getIncomeSpentByMonth = () => {
    const monthArr: Record<string, DataByMonth> = {};
    const transactionsAll = data.filter((trans) => trans.date !== undefined);

    transactionsAll.forEach(({ date, price, type }) => {
      const dateTemp = Temporal.PlainDate.from(formatDateTemporal(date));
      const month = dateTemp.toLocaleString("es-ES", { month: "long" });

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
