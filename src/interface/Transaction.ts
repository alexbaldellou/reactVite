export interface Transaction {
  id: string;
  name: string;
  date: string;
  price: number;
  type: "gasto" | "ingreso";
}