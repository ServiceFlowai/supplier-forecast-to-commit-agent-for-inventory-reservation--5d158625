import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import NegotiationRules from './pages/NegotiationRules';
import Notifications from './pages/Notifications';
import Login from './pages/Login';
import './styles/tailwind.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/admin/negotiation-rules" element={<NegotiationRules />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;