import { useEffect, useRef, useState } from "react";
import { ImportCSVProps } from "./ImportCSV"
import { Transaction } from "../../interface/Transaction";
import { formatNumber, generateId } from "../../utils/Utils";
import Papa from "papaparse";

export const ImportCSVController = (props: ImportCSVProps) => {
    const { transactions, onChangeTransaction } = props;
    const [csvData, setCsvData] = useState([]);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
  
    useEffect(() => {
      if (csvData) {
        setToConversion();
      }
    }, [csvData]);
  
    const csvUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      const fileType = file?.name.split(".").pop()?.toLowerCase();
      if (fileType !== "csv") {
        alert("Debe ser un archivo CSV");
        return;
      }
      if (file) {
        Papa.parse(file, {
          complete: (result: any) => {
            setCsvData(result.data);
          },
          header: true,
        });
      }
    };

    const setToConversion = () =>{
        const newData = csvData
          .map((csv: Transaction) => {
            csv.id = generateId();
            csv.price = formatNumber(csv.price);
            csv.type = csv.price < 0 ? "gasto" : "ingreso";
            return csv;
          })
          .filter((csv: Transaction) => csv.date !== "");
        saveTransactions(newData)
    }

    const saveTransactions = (newData: Transaction[]) =>{
        onChangeTransaction([...transactions, ...newData])
    }
  
    const handleButtonClick = () => {
      fileInputRef.current?.click();
    };
  return {
    fileInputRef, 
    csvUpload, 
    handleButtonClick
  }
}
