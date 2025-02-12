import { useEffect, useState } from "react";
import { PriceTotalProps } from "./PriceTotal";
import { getTotal } from "../../utils/Utils";

export const PriceTotalController = (props:PriceTotalProps) => {
    const { transactions } = props;
  const [totalPrice, setTotalPrice] = useState<number>();

  useEffect(() => {
    if (transactions.length > 0) {
      getTotalPrice();
    }
  }, [transactions]);

  const getTotalPrice = () => {
    setTotalPrice(getTotal(transactions));
  };
  return {
    totalPrice
  }
}
