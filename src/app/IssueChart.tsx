"use client";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card } from "@radix-ui/themes";
// 接口名首字母大写
interface Props {
  open: number;
  closed: number;
  in_progress: number;
}

const IssueChart = ({ open, closed, in_progress }: Props) => {
  // 使用传入的数据生成图表数据
  const data = [
    { name: "Open", issue_count: open },
    { name: "Closed", issue_count: closed },
    { name: "In Progress", issue_count: in_progress },
  ];

  return (
    <Card>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="issue_count"
            fill="#8884d8"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
            barSize={30}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default IssueChart;
