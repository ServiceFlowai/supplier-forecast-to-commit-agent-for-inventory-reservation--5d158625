import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const mockPRs = [
  { id: 1, status: 'Draft', supplier: 'Supplier A', eta: '2023-11-01', owner: 'User1', lastUpdate: '2023-10-15' },
  { id: 2, status: 'Sent', supplier: 'Supplier B', eta: '2023-11-05', owner: 'User2', lastUpdate: '2023-10-16' }
];

function Workbench() {
  const [prs, setPrs] = useState(mockPRs);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">PR/PO Workbench</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">ID</th>
            <th className="py-2">Status</th>
            <th className="py-2">Supplier</th>
            <th className="py-2">ETA</th>
            <th className="py-2">Owner</th>
            <th className="py-2">Last Update</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {prs.map(pr => (
            <tr key={pr.id}>
              <td className="border px-4 py-2">{pr.id}</td>
              <td className="border px-4 py-2">{pr.status}</td>
              <td className="border px-4 py-2">{pr.supplier}</td>
              <td className="border px-4 py-2">{pr.eta}</td>
              <td className="border px-4 py-2">{pr.owner}</td>
              <td className="border px-4 py-2">{pr.lastUpdate}</td>
              <td className="border px-4 py-2">
                <Link to={`/workbench/${pr.id}`} className="text-blue-500 hover:underline">Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Workbench;