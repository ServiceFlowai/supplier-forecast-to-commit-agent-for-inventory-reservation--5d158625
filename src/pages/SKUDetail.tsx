import React from 'react';
import { useParams } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const SKUDetail: React.FC = () => {
  const { skuId } = useParams<{ skuId: string }>();
  const sku = {
    id: skuId,
    description: 'Product A',
    category: 'Category 1',
    leadTime: '5 days',
    minOrderQty: 50,
    critical: true,
    forecastData: [
      { date: '2023-01-01', forecast: 100, committed: 80, inventory: 90 },
      { date: '2023-02-01', forecast: 120, committed: 100, inventory: 110 },
      { date: '2023-03-01', forecast: 140, committed: 130, inventory: 120 },
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">SKU Detail: {sku.description}</h1>
      <div className="bg-white p-4 shadow rounded mb-4">
        <h2 className="text-lg font-semibold">SKU Information</h2>
        <p>Category: {sku.category}</p>
        <p>Lead Time: {sku.leadTime}</p>
        <p>Min Order Qty: {sku.minOrderQty}</p>
        <p>Critical: {sku.critical ? 'Yes' : 'No'}</p>
      </div>
      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-lg font-semibold">Forecast & Inventory</h2>
        <AreaChart
          width={600}
          height={300}
          data={sku.forecastData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="forecast" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="committed" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="inventory" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </div>
    </div>
  );
};

export default SKUDetail;