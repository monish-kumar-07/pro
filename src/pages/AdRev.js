import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AdminNavbar from '../components/AdminNavbar';
// Styled component for the Reviews Page
const ReviewsContainer = styled.div`
  padding: 20px;
  font-family: 'Merriweather', serif;
`;

const ReviewCard = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

const ReviewAuthor = styled.h4`
  margin: 0;
`;

const ReviewContent = styled.p`
  margin: 5px 0 0;
`;

// ReviewsPage component
const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Dummy data for reviews
    const dummyReviews = [
      { author: 'Emily Roberts', content: 'Great food and wonderful atmosphere! Will definitely come back.' },
      { author: 'Michael Brown', content: 'The pasta was delicious, and the service was exceptional!' },
      { author: 'Sarah Wilson', content: 'Had an amazing time celebrating my birthday here. Highly recommend!' },
    ];

    // Simulate fetching data
    setReviews(dummyReviews);
  }, []);

  return (
    <><AdminNavbar/>
    <ReviewsContainer>
      <h1>Customer Reviews</h1>
      {reviews.map((review, index) => (
        <ReviewCard key={index}>
          <ReviewAuthor>{review.author}</ReviewAuthor>
          <ReviewContent>{review.content}</ReviewContent>
        </ReviewCard>
      ))}
    </ReviewsContainer></>
  );
};

export default ReviewsPage;
