import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AdminNavbar from '../components/AdminNavbar';
// Styled component for the Reservations Page
const ReservationsContainer = styled.div`
  padding: 20px;
  font-family: 'Merriweather', serif;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  background-color: #001f3f; /* Primary Color */
  color: white;
  padding: 10px;
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

// ReservationsPage component
const ReservationsPage = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    // Dummy data for reservations
    const dummyReservations = [
      { name: 'John Doe', date: '2024-10-20', time: '19:00', guests: 4, tableNumber: 1 },
      { name: 'Jane Smith', date: '2024-10-21', time: '20:00', guests: 2, tableNumber: 2 },
      { name: 'Alice Johnson', date: '2024-10-22', time: '18:30', guests: 6, tableNumber: 3 },
    ];

    // Simulate fetching data
    setReservations(dummyReservations);
  }, []);

  return (
    <><AdminNavbar/>
    <ReservationsContainer>
      <h1>Reservations</h1>
      <Table>
        <thead>
          <tr>
            <TableHeader>Name</TableHeader>
            <TableHeader>Date</TableHeader>
            <TableHeader>Time</TableHeader>
            <TableHeader>Number of Guests</TableHeader>
            <TableHeader>Table Number</TableHeader>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation, index) => (
            <tr key={index}>
              <TableCell>{reservation.name}</TableCell>
              <TableCell>{reservation.date}</TableCell>
              <TableCell>{reservation.time}</TableCell>
              <TableCell>{reservation.guests}</TableCell>
              <TableCell>{reservation.tableNumber}</TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
    </ReservationsContainer></>
  );
};

export default ReservationsPage;
