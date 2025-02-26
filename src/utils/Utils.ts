import { Transaction } from "../interface/Transaction";

export const generateId = () =>{
    return Math.random().toString(36).substr(2, 8);
}

export const getTotal = (transactions:Transaction[]) => {
    const total = transactions.reduce(
      (sum, transaction) => sum + transaction.price,
      0
    );
    return total;
  };

export const formatDateTemporal = (date:string) =>{
  // Reorganizar al formato correcto (YYYY-MM-DD)
  if(!date){
    return '';
  }
  const parts = date.split("-");
    if (parts[0].length === 4) {
      return date
    }else{
      const [day, month, year] = date.split("/");
      return `${year}-${month}-${day}`;
    }
}

export const formatNumber = (number:any) =>{
  if(number) {
    const haveComa = number.includes(",");
    const numberFormat = haveComa ? number.replace(",", ".") : number;
    return Number(parseFloat(numberFormat));
  }else{return 0}
}
  