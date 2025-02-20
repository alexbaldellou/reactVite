import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

interface PaginationProps {
  currentPage: number;
  totalPages: any;
  onChangePage: (num: number) => void;
}
const Pagination = (props: PaginationProps) => {
  const { totalPages, currentPage, onChangePage } = props;
  return (
    <div className="flex justify-center mt-4 space-x-2">
      <button
        className="px-3 py-1 border rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-50"
        disabled={currentPage === 1}
        onClick={() => onChangePage(currentPage - 1)}
      >
        <ChevronLeftIcon aria-hidden="true" className="size-5" />
      </button>

      {totalPages &&
        [...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`px-3 py-1 border rounded-lg ${
              currentPage === index + 1
                ? "bg-slate-500 hover:bg-slate-600"
                : "bg-slate-800 hover:bg-slate-700"
            }`}
            onClick={() => onChangePage(index + 1)}
          >
            {index + 1}
          </button>
        ))}

      <button
        className="px-3 py-1 border rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-50"
        disabled={currentPage === totalPages}
        onClick={() => onChangePage(currentPage + 1)}
      >
        <ChevronRightIcon aria-hidden="true" className="size-5" />
      </button>
    </div>
  );
};

export default Pagination;
