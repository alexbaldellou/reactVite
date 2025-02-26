import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { DataByMonth } from "../../../interface/ChartResumenPerMonth.interface";

interface HistogramProps {
  data: DataByMonth[];
  isCartesianGrid?: boolean;
  isLegend?: boolean;
  dataKeyX?: string;
  dataKeyY?: string;
  dataKeyBar1: string;
  dataKeyBar2?: string;
}
export const Histogram = (props: HistogramProps) => {
  const {
    data,
    isCartesianGrid,
    isLegend,
    dataKeyX,
    dataKeyY,
    dataKeyBar1,
    dataKeyBar2,
  } = props;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        {isCartesianGrid && <CartesianGrid strokeDasharray="3 3" />}
        {dataKeyX && <XAxis dataKey={dataKeyX} />}
        {dataKeyY && <YAxis dataKey={dataKeyY} />}
        <Tooltip />
        {isLegend && <Legend />}
        <Bar dataKey={dataKeyBar1} fill="#8884d8" />
        {dataKeyBar2 && <Bar dataKey={dataKeyBar2} fill="#82ca9d" />}
      </BarChart>
    </ResponsiveContainer>
  );
};
