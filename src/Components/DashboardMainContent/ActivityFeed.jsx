//ActivityGraph.jsx
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", activity: 30 },
  { day: "Tue", activity: 45 },
  { day: "Wed", activity: 28 },
  { day: "Thu", activity: 60 },
  { day: "Fri", activity: 50 },
  { day: "Sat", activity: 75 },
  { day: "Sun", activity: 40 },
];

const ActivityGraph = () => {
  return (
    <div className="mt-6 p-4 bg-white rounded-lg shadow w-full" style={{ height: 250 }}>
      <h2 className="text-lg font-semibold mb-4">Weekly Activity</h2>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={data}>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="activity" stroke="#3b82f6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityGraph;
