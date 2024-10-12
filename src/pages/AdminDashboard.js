import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from '../components/AdminNavbar';
import { FaDollarSign, FaUtensils, FaConciergeBell } from 'react-icons/fa';
import {  Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './Dashboard.css';


const sectionStyle = {
  width: '100%',
  height: '100vh',
//  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
};

const AdminDashboard = () => {
  


  const [dashboardData, setDashboardData] = useState({
    totalSales: 0,
    reservationsToday: 0,
    activeOrders: 0,
    recentReservations: [],
    activeOrdersList: [],
  });

  useEffect(() => {
    axios.get('/api/dashboard')
      .then(response => setDashboardData(response.data))
      .catch(error => console.error('Error fetching dashboard data:', error));
  }, []);

  const data = {
    labels: ['Sales', 'Reservations', 'Orders'],
    datasets: [{
      label: 'Statistics',
      data: [dashboardData.totalSales, dashboardData.reservationsToday, dashboardData.activeOrders],
      backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe'],
    }],
  };


  return (
    <>
        <div style={sectionStyle}>
      <AdminNavbar />
     
        <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="dashboard-overview">
        <div className="overview-item">
          <FaDollarSign className="icon" />
          <h2>Total Sales</h2>
          <p>${dashboardData.totalSales}</p>
        </div>
        <div className="overview-item">
          <FaConciergeBell className="icon" />
          <h2>Reservations Today</h2>
          <p>{dashboardData.reservationsToday}</p>
        </div>
        <div className="overview-item">
          <FaUtensils className="icon" />
          <h2>Active Orders</h2>
          <p>{dashboardData.activeOrders}</p>
        </div>
      </div>
      <div className="dashboard-charts">
        <h3>Sales and Reservations Overview</h3>
        <Line data={data} />
      </div>
    </div>
        </div>
    </>
  );
};

export default AdminDashboard;




// // src/pages/AdminDashboard.js
// import React from 'react';
// import styled from 'styled-components';
// import AdminNavbar from '../components/AdminNavbar';

// const DashboardContainer = styled.div`
//   padding: 20px;
//   background-color: ${(props) => props.theme.colors.secondary};
//   min-height: 100vh;
//   font-family: ${(props) => props.theme.fonts.primary};
// `;

// const Section = styled.div`
//   margin: 20px 0;
//   background-color: ${(props) => props.theme.colors.accent};
//   padding: 15px;
//   border-radius: 10px;
//   font-family: ${(props) => props.theme.fonts.secondary};
// `;

// const SectionTitle = styled.h3`
//   color: ${(props) => props.theme.colors.primary};
//   margin-bottom: 10px;
// `;

// const AdminDashboard = () => {
//   return (
//     <DashboardContainer>
//       <AdminNavbar />
//       <h1>Admin Dashboard</h1>
//       <Section>
//         <SectionTitle>Sales Overview</SectionTitle>
//         <p>Total Sales: $5,000</p>
//       </Section>
//       <Section>
//         <SectionTitle>Reservations Received</SectionTitle>
//         <p>Total Reservations: 35</p>
//       </Section>
//       <Section>
//         <SectionTitle>Order Details</SectionTitle>
//         <p>Pending Orders: 12</p>
//         <p>Completed Orders: 50</p>
//       </Section>
//       <Section>
//         <SectionTitle>Review Details</SectionTitle>
//         <p>Total Reviews: 25</p>
//       </Section>
//     </DashboardContainer>
//   );
// };

// export default AdminDashboard;
