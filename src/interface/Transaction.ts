export interface Transaction {
  id: string;
  name: string;
  category: string;
  date: string;
  price: number;
  type: "gasto" | "ingreso";
}