import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Navber from '../components/Navber';
import { useSelector } from 'react-redux';
import Loader from '../components/Loader';

const Layout = () => {
  const { user, loading } = useSelector(state => state.auth);

  if (loading) return <Loader />;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navber />
      <Outlet />
    </div>
  );
};

export default Layout;
