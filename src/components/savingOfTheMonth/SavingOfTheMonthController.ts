import { Temporal } from "@js-temporal/polyfill";
import { getTotal } from "../../utils/Utils";
import { SavingOfTheMonthProps } from "./SavingOfTheMonth"
import { useEffect, useState } from "react";

export const SavingOfTheMonthController = (props: SavingOfTheMonthProps) => {
    const { transactions } = props;
      const now = Temporal.Now.plainDateISO();
      const [totalPrice, setTotalPrice] = useState<number>();
    
      useEffect(() => {
        if (transactions.length > 0) {
          pricePerMonth();
        }
      }, [transactions]);
    
      const monthDate = (dateOr: string) => {
        const date = Temporal.PlainDate.from(dateOr);
        return date.month;
      };
      const pricePerMonth = () => {
        const priceMonthNow = transactions.filter(
          (trans) => monthDate(trans.date) === now.month && trans.type === "gasto"
        );
        setTotalPrice(getTotal(priceMonthNow));
      };
  return {
    totalPrice
  }
}
