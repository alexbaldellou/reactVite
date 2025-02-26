import { Temporal } from "@js-temporal/polyfill";
import { SavingOfTheMonthProps } from "./SavingOfTheMonth"
import { useEffect, useState } from "react";
import { formatDateTemporal, getTotal } from "../../../../utils/Utils";
import { Transaction } from "../../../../interface/Transaction";

export const SavingOfTheMonthController = (props: SavingOfTheMonthProps) => {
    const { transactions } = props;
      const now = Temporal.Now.plainDateISO();
      const [totalPrice, setTotalPrice] = useState<number>();
    
      useEffect(() => {
        if (transactions.length > 0) {
          const transactionsAll = transactions.filter((trans) => trans.date !== undefined)
          pricePerMonth(transactionsAll);
        }
      }, [transactions]);
    
      const monthDate = (dateOr: string) => {
        const formatDate = formatDateTemporal(dateOr);
        const date = Temporal.PlainDate.from(formatDate);
        return date.month;
      };
      const pricePerMonth = (tr:Transaction[]) => {
        const priceMonthNow = tr.filter(
          (trans) => monthDate(trans.date) === now.month && trans.type === "gasto"
        );
        setTotalPrice(getTotal(priceMonthNow));
      };
  return {
    totalPrice
  }
}
