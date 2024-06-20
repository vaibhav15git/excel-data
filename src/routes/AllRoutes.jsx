import React from 'react'
import LoginPage from '../components/LoginPage'
import { Route, Routes } from 'react-router-dom'
import DataTable from '../components/DataTable';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/data-table" element={<DataTable />} />
        {/* <Route path="/signup" element={<SignupPage />} /> */}
        {/* <Route path="/signup" element={<SignupPage />} /> */}
        {/* <Route path="/signup" element={<SignupPage />} /> */}
      </Routes>
    </div>
  );
}

export default AllRoutes