import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { generateId } from "../../utils/Utils";
import { Transaction } from "../../interface/Transaction";
import { HeaderPrices } from "../../components/headerPrices/HeaderPrices";

export const HomePage = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [form, setForm] = useState<Transaction>({} as Transaction);

  useEffect(() => {
    fetch("http://localhost:5000/transactions")
      .then((res) => res.json())
      .then((data) => setTransactions(data));
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    form.id = generateId();
    form.price =
      form.type === "gasto" ? -Math.abs(form.price) : Number(form.price);
    await fetch("http://localhost:5000/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setTransactions([...transactions, form]);
  };

  return (
    <div className="min-h-screen bg-slate-900 p-5">
      <h1 className="text-2xl font-bold mb-4">Gestión Financiera</h1>
      <form
        className="bg-white p-4 shadow rounded-lg flex space-x-3 "
        onSubmit={handleSubmit}
      >
        <input
          name="name"
          placeholder="Nombre"
          className="border p-2 w-full rounded-md border-slate-900 placeholder:text-slate-900 text-slate-900"
          onChange={handleChange}
          required
        />
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
      <div className="w-full overflow-hidden mt-5 rounded-lg">
        <HeaderPrices transactions={transactions} />
        <table className="min-w-full bg-slate-800 text-white border-gray-200 shadow-md">
          <thead>
            <tr className="bg-gray-100 border-b text-slate-800">
              <th className="py-2 px-4 text-left">Nombre</th>
              <th className="py-2 px-4 text-left">Fecha</th>
              <th className="py-2 px-4 text-right">Precio</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((trans) => (
              <tr
                key={trans.id}
                className="hover:bg-gray-50 hover:text-slate-800"
              >
                <td className="py-2 px-4">{trans.name}</td>
                <td className="py-2 px-4">{trans.date}</td>
                <td className="py-2 px-4 text-right">{trans.price} €</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
