import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Workbench from './pages/Workbench';
import PRDetail from './pages/PRDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/workbench" element={<Workbench />} />
        <Route path="/workbench/:prId" element={<PRDetail />} />
      </Routes>
    </div>
  );
}

export default App;