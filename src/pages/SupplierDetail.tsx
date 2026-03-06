import React from 'react';
import { useParams } from 'react-router-dom';

const SupplierDetail: React.FC = () => {
  const { supplierId } = useParams<{ supplierId: string }>();
  const supplier = {
    id: supplierId,
    name: 'Supplier A',
    tier: 'Tier 1',
    contact: 'John Doe',
    slaIndicators: 'On-time delivery: 95%',
    commitments: [
      { id: 1, sku: 'SKU123', qty: 100, startDate: '2023-10-01', endDate: '2023-10-31', type: 'VMI', status: 'Confirmed' },
      { id: 2, sku: 'SKU456', qty: 200, startDate: '2023-11-01', endDate: '2023-11-30', type: 'Consignment', status: 'Proposed' },
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{supplier.name}</h1>
      <div className="bg-white p-4 shadow rounded mb-4">
        <h2 className="text-lg font-semibold">Supplier Details</h2>
        <p>Tier: {supplier.tier}</p>
        <p>Contact: {supplier.contact}</p>
        <p>SLA Indicators: {supplier.slaIndicators}</p>
      </div>
      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-lg font-semibold">Commitments</h2>
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="py-2">SKU</th>
              <th className="py-2">Quantity</th>
              <th className="py-2">Start Date</th>
              <th className="py-2">End Date</th>
              <th className="py-2">Type</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {supplier.commitments.map(commitment => (
              <tr key={commitment.id} className="text-center">
                <td className="py-2">{commitment.sku}</td>
                <td className="py-2">{commitment.qty}</td>
                <td className="py-2">{commitment.startDate}</td>
                <td className="py-2">{commitment.endDate}</td>
                <td className="py-2">{commitment.type}</td>
                <td className="py-2">{commitment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SupplierDetail;