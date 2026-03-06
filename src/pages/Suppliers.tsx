import React from 'react';
import { Link } from 'react-router-dom';

const Suppliers: React.FC = () => {
  const suppliers = [
    { id: 1, name: 'Supplier A', tier: 'Tier 1', contact: 'John Doe', avgResponseTime: '2 hrs', commitCoverage: '80%', openReservations: 5, lastCommunication: '2023-10-01' },
    { id: 2, name: 'Supplier B', tier: 'Tier 2', contact: 'Jane Smith', avgResponseTime: '3 hrs', commitCoverage: '75%', openReservations: 3, lastCommunication: '2023-09-30' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Suppliers</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Select</th>
            <th className="py-2">Supplier Name</th>
            <th className="py-2">Tier</th>
            <th className="py-2">Primary Contact</th>
            <th className="py-2">Avg Response Time</th>
            <th className="py-2">Commit Coverage</th>
            <th className="py-2">Open Reservations</th>
            <th className="py-2">Last Communication</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map(supplier => (
            <tr key={supplier.id} className="text-center">
              <td className="py-2"><input type="checkbox" /></td>
              <td className="py-2"><Link to={`/suppliers/${supplier.id}`} className="text-blue-500 hover:underline">{supplier.name}</Link></td>
              <td className="py-2">{supplier.tier}</td>
              <td className="py-2">{supplier.contact}</td>
              <td className="py-2">{supplier.avgResponseTime}</td>
              <td className="py-2">{supplier.commitCoverage}</td>
              <td className="py-2">{supplier.openReservations}</td>
              <td className="py-2">{supplier.lastCommunication}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Suppliers;