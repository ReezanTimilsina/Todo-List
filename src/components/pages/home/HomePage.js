import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import PasswordsPage from '../passwords/PasswordsPage';

export default function HomePage() {
  return (
    <div>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/passwords" element={<PasswordsPage />} />
      </Routes>
    </div>
  );
}

function Home() {
  return <h1>Welcome to the Home Page!</h1>;
}
