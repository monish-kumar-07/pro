import React, { useState } from "react";
import CustomerNavbar from "../components/CustomerNavbar";
//import bg from '../components/pexels.jpg';
import styled from 'styled-components';

const ReservationPage = () => {

const [reservationStatus, setReservationStatus] = useState(""); // Track reservation status
 const [availableTables, setAvailableTables] = useState(4); // Track the number of available tables

 const [formData, setFormData] = useState({
  name: '',
  date: '',
   time: '',
  tables: 1,
  });

 const handleReserveTable = (e) => {
   e.preventDefault();
   // Check if there are enough tables available
   if (availableTables >= formData.tables) {
   // Reserve the tables
   setAvailableTables(availableTables - formData.tables);
   setReservationStatus("success");

 // Reset the animation after 1 second
   setTimeout(() => {
     setReservationStatus("");
    }, 1000);
 } else {
 // If not enough tables are available, show unsuccessful message
   setReservationStatus("failure");
 }
 };

 // Function to handle input changes
 const handleChange = (e) => {
  setFormData({
    ...formData,
 [e.target.name]: e.target.value,
 });
 };

 const ReservationsContainer = styled.div`
   padding: 20px;
   background-color: ${(props) => props.theme.colors.accent};
   width: 400px;
   border-radius: 10px;
   justify-content: center;
   align-items: center;
   font-family: ${(props) => props.theme.fonts.secondary};
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
 `;

 const ReservationsWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   min-height: 0vh;
   padding: 0px;
   background-color: ${(props) => props.theme.colors.lightSand};
   background-image: url(${(props) => props.bg});
   background-size: cover;
   background-position: center;
 `;

 const TableInfo = styled.div`
   margin: 20px 0;
   background-color: ${(props) => props.theme.colors.accent};
   padding: 10px;
   border-radius: 10px;
   font-family: ${(props) => props.theme.fonts.secondary};
`;

 const Message = styled.p`
   color: ${(props) => props.theme.colors.primary};
   font-weight: bold;
 `;

 return (
  <><CustomerNavbar />
      <TableInfo>
      <h1>Table Reservation</h1>
       <Message>Available Tables: {availableTables}</Message>
       <Message>Timings: 6:00 PM - 10:00 PM</Message>
       <Message>Chairs per Table: 4</Message>
    </TableInfo>
     <ReservationsWrapper>
 <ReservationsContainer>
   <h1>Make Reservation</h1>
  <form onSubmit={handleReserveTable}>
  <div>
  <label htmlFor="name">Name: </label>
  <input
     type="text"
     id="name"
     name="name"
     value={formData.name}
     onChange={handleChange}
     required
  />
  </div>
   <div>
     <label htmlFor="date">Date: </label>
       <input
        type="date"
         id="date"
         name="date"
        value={formData.date}
         onChange={handleChange}
         required
    />
   </div>
   <div>
   <label htmlFor="time">Time: </label>
   <input
   type="time"
   id="time"
   name="time"
   value={formData.time}
   onChange={handleChange}
   required
   />
  </div>
 <div>
 <label htmlFor="tables">Number of Tables: </label>
 <input
  type="number"
  id="tables"
  name="tables"
  value={formData.tables}
  onChange={handleChange}
  min="1"
  required
 />
 </div>
                                <button type="submit">Reserve</button>
 </form>
   {reservationStatus === "success" && (
     <div>
    🎉Reservation Successful🎉
    </div>
)}
 {reservationStatus === "failure" && (
 <div className="unsuccessful-reservation">
 <img
src="https://example.com/unsuccessful-image.png" // Replace with your unsuccessful image URL
 alt="Unsuccessful Reservation"
style={{ width: "200px", marginTop: "20px" }}
/>
<p style={{ color: "red" }}>Sorry, your reservation was unsuccessful!</p>
 </div>
)}
 </ReservationsContainer>
 </ReservationsWrapper>
</>
 );
};

export default ReservationPage;



// // src/pages/ReservationPage.js
// import React, { useState } from 'react';
// import styled, { keyframes } from 'styled-components';
// import CustomerNavbar from '../components/CustomerNavbar';
// import './st1.css';

// // Party-Pooper Animation
// const pooperAnimation = keyframes`
//   0% { transform: scale(0); opacity: 1; }
//   100% { transform: scale(1); opacity: 0; }
// `;

// const Pooper = styled.div`
//   position: absolute;
//   width: 20px;
//   height: 20px;
//   background-color: #ffcc00;
//   border-radius: 50%;
//   animation: ${pooperAnimation} 1s ease-out forwards;
// `;

// const ReservationContainer = styled.div`
//   padding: 0px;
//   background-color: ${(props) => props.theme.colors.secondary};
//   min-height: 100vh;
//   font-family: ${(props) => props.theme.fonts.primary};
//   position: relative;
// `;

// const TableInfo = styled.div`
//   margin: 20px 0;
//   background-color: ${(props) => props.theme.colors.accent};
//   padding: 10px;
//   border-radius: 10px;
//   font-family: ${(props) => props.theme.fonts.secondary};
// `;

// const Message = styled.p`
//   color: ${(props) => props.theme.colors.primary};
//   font-weight: bold;
// `;

// const SadMessage = styled.p`
//   color: red;
//   font-weight: bold;
// `;

// // const ReservationPage = () => {
// //   const [reserved, setReserved] = useState(false);
// //   const [showParty, setShowParty] = useState(false);
// //   const [booked, setBooked] = useState(false);

// //   const handleReservation = () => {
// //     if (reserved) {
// //       setBooked(true);
// //     } else {
// //       setReserved(true);
// //       setShowParty(true);
// //       setTimeout(() => setShowParty(false), 1000);
// //     }
// //   };

// const ReservationPage = () => {
//     const [showPartyPop, setShowPartyPop] = useState(false);
  
//     const handleReserveTable = () => {
//       // Logic for reserving a table goes here
  
//       // Trigger the party pop animation
//       setShowPartyPop(true);
  
//       // Remove the animation after a certain time (e.g., 1 second)
//       setTimeout(() => {
//         setShowPartyPop(false);
//       }, 1000);
//     };

//   return (
//       <><CustomerNavbar />
//     <ReservationContainer>
//       <h1>Table Reservation</h1>
//       <TableInfo>
//         <Message>Available Tables: 5</Message>
//         <Message>Timings: 6:00 PM - 10:00 PM</Message>
//         <Message>Chairs per Table: 4</Message>
//         <button onClick={handleReserveTable}>Reserve a Table</button>
//       </TableInfo>
//       {/* {showParty && <Pooper style={{ left: '50%', top: '50%' }} />} */}
//       {showPartyPop && (
//         <div className="party-pop">
//           🎉🎊🎉
//         </div>
//       )}
//       {booked && <SadMessage>😔 Sorry that Table is Already Booked</SadMessage>}
//     </ReservationContainer></>
//   );
// };

// export default ReservationPage;
