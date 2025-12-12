import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Screening from './pages/Screening';
import ScreeningResult from './pages/ScreeningResult';
import Learn from './pages/Learn';
import AdminDashboard from './pages/AdminDashboard';
import Privacy from './pages/Privacy'; 
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/screening" element={<Screening />} />
        <Route path="/screening/result" element={<ScreeningResult />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/privacy" element={<Privacy />} /> 
        <Route
          path="/admin"
          element={
            <ProtectedRoute requireAdmin={true}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;