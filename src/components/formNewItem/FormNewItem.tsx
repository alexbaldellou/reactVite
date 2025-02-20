import FormNewItemController from "./FormNewItemController";
import { Transaction } from "../../interface/Transaction";
import { ImportCSV } from "../importCSV/ImportCSV";

export interface FormNewItemProps {
  transactions: Transaction[];
  onChangeTransactions: (transactions: Transaction[]) => void;
}

const FormNewItem = (props: FormNewItemProps) => {
  const { transactions, handleSubmit, handleChange, onChangeTransactions } =
    FormNewItemController(props);
  return (
    <div className="bg-white p-4 shadow rounded-lg flex space-x-3 w-full">
      <form onSubmit={handleSubmit} className="flex w-full space-x-3">
        <input
          name="name"
          placeholder="Nombre"
          className="border p-2 w-full rounded-md border-slate-900 placeholder:text-slate-900 text-slate-900"
          onChange={handleChange}
          required
        />
        <select
          name="category"
          className="border p-2 w-full rounded-md border-slate-900 placeholder:text-slate-900 text-slate-900"
          onChange={handleChange}
          required
        >
          <option>Selecciona categoría</option>
          <option value={"comida"}>Comida</option>
          <option value={"compra"}>Compra</option>
          <option value={"transferencia"}>Transferencia</option>
          <option value={"luz"}>Luz</option>
          <option value={"calefaccion"}>Calefacción</option>
          <option value={"hipoteca"}>Hipoteca</option>
          <option value={"internet"}>Internet</option>
          <option value={"nomina"}>Nomina</option>
        </select>
        <input
          name="date"
          type="date"
          placeholder="Fecha"
          className="border p-2 w-full rounded-md border-slate-900 placeholder:text-slate-900 text-slate-900"
          onChange={handleChange}
          required
        />
        <input
          name="price"
          type="number"
          placeholder="Precio"
          className="border p-2 w-full rounded-md border-slate-900 placeholder:text-slate-900 text-slate-900"
          onChange={handleChange}
          required
        />
        <select
          name="type"
          className="border p-2 w-full rounded-md border-slate-900 placeholder:text-slate-900 text-slate-900"
          onChange={handleChange}
          required
        >
          <option value="ingreso">Ingreso</option>
          <option value="gasto">Gasto</option>
        </select>
        <button
          className="bg-blue-950 text-white px-4 py-2 rounded"
          type="submit"
        >
          Guardar
        </button>
      </form>
      <ImportCSV
        onChangeTransaction={onChangeTransactions}
        transactions={transactions}
      />
    </div>
  );
};

export default FormNewItem;
