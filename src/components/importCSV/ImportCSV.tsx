import Papa from "papaparse";
import { useEffect, useRef, useState } from "react";
import { Transaction } from "../../interface/Transaction";
import { formatNumber, generateId } from "../../utils/Utils";

interface ImportCSVProps {
  onChangeTransaction: (transactions: Transaction[]) => void;
}
export const ImportCSV = (props: ImportCSVProps) => {
  const { onChangeTransaction } = props;
  const [csvData, setCsvData] = useState([]);
  const [jsonData, setJsonData] = useState([] as Transaction[]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (csvData) {
      const newData = csvData
        .map((csv: Transaction) => {
          csv.id = generateId();
          csv.price = formatNumber(csv.price);
          csv.type = csv.price < 0 ? "gasto" : "ingreso";
          return csv;
        })
        .filter((csv: Transaction) => csv.date !== "");
      conversionToJSON(newData);
    }
  }, [csvData]);

  useEffect(() => {
    if (jsonData.length > 0) {
      onChangeTransaction(jsonData);
    }
  }, [jsonData]);

  const csvUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const fileType = file?.name.split(".").pop()?.toLowerCase();
    if (fileType !== "csv") {
      alert("Please upload a CSV file.");
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
  const conversionToJSON = (data: Transaction[]) => {
    setJsonData(data);
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };
  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        onChange={csvUpload}
        accept=".csv"
        style={{ display: "none" }}
      />
      <button
        onClick={handleButtonClick}
        className="bg-blue-950 text-white px-4 py-2 rounded w-xs"
      >
        Importar CSV
      </button>
    </>
  );
};
