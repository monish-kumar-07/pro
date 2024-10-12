// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import WelcomePage from './pages/WelcomePage';
import MenuPage from './pages/MenuPage';
import ReservationPage from './pages/ReservationPage';
import ReviewPage from './pages/ReviewPage';
import ContactUsPage from './pages/ContactUsPage';
import AdminDashboard from './pages/AdminDashboard';
import AdminLoginPage from './pages/AdminLoginPage';
import ReservationsPage from './pages/AdRes';
import ReviewsPage from './pages/AdRev';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/review" element={<ReviewPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/reservations" element={<ReservationsPage />} />
          <Route path="/admin/reviews" element={<ReviewsPage />} />

        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
