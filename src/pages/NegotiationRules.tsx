import React, { useState } from 'react';

const NegotiationRules = () => {
  const [rules, setRules] = useState([
    { id: 1, name: 'Auto-create PR at 70% forecast coverage', threshold: 70 },
  ]);

  const addRule = () => {
    setRules([...rules, { id: rules.length + 1, name: 'New Rule', threshold: 0 }]);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Negotiation Rules</h1>
      <button onClick={addRule} className="bg-blue-500 text-white px-4 py-2 rounded">Add Rule</button>
      <ul>
        {rules.map(rule => (
          <li key={rule.id} className="mt-2">
            {rule.name} - {rule.threshold}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NegotiationRules;