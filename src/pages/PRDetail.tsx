import React from 'react';
import { useParams } from 'react-router-dom';

function PRDetail() {
  const { prId } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">PR/PO Detail - {prId}</h1>
      {/* Add form and details here */}
    </div>
  );
}

export default PRDetail;