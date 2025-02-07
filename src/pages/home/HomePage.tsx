import { ChangeEvent, FormEvent, useEffect, useState } from "react";

interface Transaction {
  name: string;
  date: string;
  price: number;
  type: "income" | "expense";
}

export const HomePage = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [form, setForm] = useState<Transaction>({
    name: "",
    date: "",
    price: 0,
    type: "income",
  });

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
    await fetch("http://localhost:5000/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setTransactions([...transactions, form]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-2xl font-bold mb-4">Gestión Financiera</h1>
      <form
        className="bg-white p-4 shadow rounded flex space-x-3 "
        onSubmit={handleSubmit}
      >
        <input
          name="name"
          placeholder="Nombre"
          className="border p-2 w-full rounded-md"
          onChange={handleChange}
        />
        <input
          name="date"
          type="date"
          className="border p-2 w-full rounded-md"
          onChange={handleChange}
        />
        <input
          name="price"
          type="number"
          placeholder="Precio"
          className="border p-2 w-full rounded-md"
          onChange={handleChange}
        />
        <select
          name="type"
          className="border p-2 w-full rounded-md"
          onChange={handleChange}
        >
          <option value="income">Ingreso</option>
          <option value="expense">Gasto</option>
        </select>
        <button
          className="bg-blue-950 text-white px-4 py-2 rounded"
          type="submit"
        >
          Guardar
        </button>
      </form>
      <ul className="mt-4">
        {transactions.map((t, i) => (
          <li key={i} className="p-2 bg-white shadow mb-2">
            {t.name} - {t.date} - ${t.price} - {t.type}
          </li>
        ))}
      </ul>
    </div>
  );
};
