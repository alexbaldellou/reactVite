import { Transaction } from "../../interface/Transaction";
import { ImportCSVController } from "./ImportCSVController";

export interface ImportCSVProps {
  transactions: Transaction[];
  onChangeTransaction: (transactions: Transaction[]) => void;
}
export const ImportCSV = (props: ImportCSVProps) => {
  const { fileInputRef, csvUpload, handleButtonClick } =
    ImportCSVController(props);
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
