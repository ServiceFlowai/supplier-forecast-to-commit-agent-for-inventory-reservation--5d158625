import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Suppliers from './pages/Suppliers';
import SupplierDetail from './pages/SupplierDetail';
import SKUs from './pages/SKUs';
import SKUDetail from './pages/SKUDetail';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/suppliers/:supplierId" element={<SupplierDetail />} />
        <Route path="/skus" element={<SKUs />} />
        <Route path="/skus/:skuId" element={<SKUDetail />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </div>
  );
};

export default App;