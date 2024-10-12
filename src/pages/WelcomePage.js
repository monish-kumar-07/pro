import React from 'react';
import styled from 'styled-components';
import CustomerNavbar from '../components/CustomerNavbar';
// Styled components for the welcome page
const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #e6e6e6; /* Light Gray */
  font-family: 'Merriweather', serif;
`;

const WelcomeHeading = styled.h1`
  color: #001f3f; /* Primary Color */
  font-size: 3rem;
  text-align: center;
`;

const WelcomeSlogan = styled.h2`
  color: #0292b7; /* Custom accent color */
  font-size: 2rem;
  margin: 20px 0;
`;

const WelcomeMessage = styled.p`
  color: #333333; /* Charcoal color */
  font-size: 1.2rem;
  max-width: 600px;
  text-align: center;
  padding: 0 20px;
`;

// WelcomePage component
const WelcomePage = () => {
  return (
   <><CustomerNavbar/>
    <WelcomeContainer>
      <WelcomeHeading>Welcome to Da Vinci!</WelcomeHeading>
      <WelcomeSlogan>Experience Authentic Italian Cuisine!</WelcomeSlogan>
      <WelcomeMessage>
        At Da Vinci, we offer a delightful dining experience with a variety of
        Italian dishes made from the freshest ingredients. Join us for a
        memorable meal, whether it’s a casual lunch or a special occasion.
      </WelcomeMessage>
    </WelcomeContainer></> 
  );
};

export default WelcomePage;
