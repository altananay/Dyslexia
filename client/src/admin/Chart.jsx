import React from "react";
import "./scss/Chart.scss";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {name: "1. Sınıf", Toplam: 5},
  {name: "2. Sınıf", Toplam: 6},
  {name: "3. Sınıf", Toplam: 7},
  {name: "4. Sınıf", Toplam: 8},
  {name: "5. Sınıf", Toplam: 9},
  {name: "6. Sınıf", Toplam: 10},
  {name: "7. Sınıf", Toplam: 11},
  {name: "8. Sınıf", Toplam: 12},
  {name: "Lise", Toplam: 13},
  {name: "Yetişkin", Toplam: 14},
]

const Chart = () => {
  return (
    <div className="chart">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Toplam" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
