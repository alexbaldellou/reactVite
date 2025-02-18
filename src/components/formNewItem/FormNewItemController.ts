import { ChangeEvent, FormEvent, useState } from 'react';
import { FormNewItemProps } from './FormNewItem';
import { Transaction } from '../../interface/Transaction';
import { generateId } from '../../utils/Utils';


const FormNewItemController = (props: FormNewItemProps) => {
    const {transactions, onChangeTransactions} = props;
    const [form, setForm] = useState<Transaction>({} as Transaction);
    
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
        onChangeTransactions([...transactions, form]);
      };

      
  return {
    handleSubmit,
    handleChange,
    onChangeTransactions
  }
}

export default FormNewItemController