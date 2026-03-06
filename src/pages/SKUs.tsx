import React from 'react';
import { Link } from 'react-router-dom';

const SKUs: React.FC = () => {
  const skus = [
    { id: 1, sku: 'SKU123', description: 'Product A', category: 'Category 1', forecast30: 100, forecast60: 200, forecast90: 300, committedQty: 150, onHand: 120, available: 100, daysOfCover: 30 },
    { id: 2, sku: 'SKU456', description: 'Product B', category: 'Category 2', forecast30: 200, forecast60: 300, forecast90: 400, committedQty: 250, onHand: 220, available: 200, daysOfCover: 40 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">SKUs</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">SKU</th>
            <th className="py-2">Description</th>
            <th className="py-2">Category</th>
            <th className="py-2">Forecast (30/60/90 days)</th>
            <th className="py-2">Committed Qty</th>
            <th className="py-2">On Hand</th>
            <th className="py-2">Available</th>
            <th className="py-2">Days of Cover</th>
          </tr>
        </thead>
        <tbody>
          {skus.map(sku => (
            <tr key={sku.id} className="text-center">
              <td className="py-2"><Link to={`/skus/${sku.id}`} className="text-blue-500 hover:underline">{sku.sku}</Link></td>
              <td className="py-2">{sku.description}</td>
              <td className="py-2">{sku.category}</td>
              <td className="py-2">{sku.forecast30}/{sku.forecast60}/{sku.forecast90}</td>
              <td className="py-2">{sku.committedQty}</td>
              <td className="py-2">{sku.onHand}</td>
              <td className="py-2">{sku.available}</td>
              <td className="py-2">{sku.daysOfCover}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SKUs;