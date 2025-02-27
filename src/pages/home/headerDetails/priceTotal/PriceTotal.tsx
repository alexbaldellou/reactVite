import { Transaction } from "../../../../interface/Transaction";
import { PriceTotalController } from "./PriceTotalController";

export interface PriceTotalProps {
  transactions: Transaction[];
}
export const PriceTotal = (props: PriceTotalProps) => {
  const { totalPrice } = PriceTotalController(props);

  return `${totalPrice ? totalPrice.toLocaleString("es-ES") : 0} €`;
};
