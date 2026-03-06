import React from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Dashboard: React.FC = () => {
  const data = [
    { name: 'Jan', forecast: 4000, committed: 2400, actual: 2400 },
    { name: 'Feb', forecast: 3000, committed: 1398, actual: 2210 },
    { name: 'Mar', forecast: 2000, committed: 9800, actual: 2290 },
    { name: 'Apr', forecast: 2780, committed: 3908, actual: 2000 },
    { name: 'May', forecast: 1890, committed: 4800, actual: 2181 },
    { name: 'Jun', forecast: 2390, committed: 3800, actual: 2500 },
    { name: 'Jul', forecast: 3490, committed: 4300, actual: 2100 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-semibold">Open Supplier Follow-ups</h2>
          <p className="text-2xl">15</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-semibold">Avg Supplier Follow-up Time</h2>
          <p className="text-2xl">3.5 hrs</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-semibold">OTIF for Top-tier Goods</h2>
          <p className="text-2xl">92%</p>
        </div>
      </div>
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="forecast" stroke="#8884d8" />
        <Line type="monotone" dataKey="committed" stroke="#82ca9d" />
        <Line type="monotone" dataKey="actual" stroke="#ffc658" />
      </LineChart>
      <div className="mt-6">
        <Link to="/suppliers" className="text-blue-500 hover:underline">View Suppliers</Link>
      </div>
    </div>
  );
};

export default Dashboard;