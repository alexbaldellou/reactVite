import { Transaction } from "../../interface/Transaction";
import { SavingOfTheMonthController } from "./SavingOfTheMonthController";

export interface SavingOfTheMonthProps {
  transactions: Transaction[];
}
export const SavingOfTheMonth = (props: SavingOfTheMonthProps) => {
  const { totalPrice } = SavingOfTheMonthController(props);
  return `${totalPrice} €`;
};
