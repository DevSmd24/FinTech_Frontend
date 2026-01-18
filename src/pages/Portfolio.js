import { LineChart, Line, XAxis, YAxis } from "recharts";

const data = [
  { price: 100 },
  { price: 105 },
  { price: 110 },
];

export default function Portfolio() {
  return (
    <>
      <h2>Investment Portfolio</h2>
      <LineChart width={500} height={300} data={data}>
        <Line dataKey="price" />
        <XAxis />
        <YAxis />
      </LineChart>
    </>
  );
}
