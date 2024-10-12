// src/pages/ReviewPage.js
import React, { useState } from 'react';
import styled from 'styled-components';
import CustomerNavbar from '../components/CustomerNavbar';
import axios from 'axios';

const ReviewContainer = styled.div`
  padding: 0px;
  background-color: ${(props) => props.theme.colors.secondary};
  min-height: 100vh;
  font-family: ${(props) => props.theme.fonts.primary};
`;

const ReviewForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 20px auto; /* Added top margin */
`;

const TextArea = styled.textarea`
  padding: 10px;
  font-family: ${(props) => props.theme.fonts.secondary};
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors.accent};
`;

const SubmitButton = styled.button`
  padding: 10px;
  font-family: ${(props) => props.theme.fonts.secondary};
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Message = styled.p`
  margin-top: 15px;
  font-family: ${(props) => props.theme.fonts.primary};
  color: ${(props) => props.theme.colors.primary};
`;

const ReviewPage = () => {
  const [review, setReview] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!review.trim()) {
      setMessage('Please enter a review before submitting.');
      return;
    }
    try {
      await axios.post('/api/reviews', { review });
      setMessage('Thank you for your review!');
    } catch (error) {
        console.error('Error submitting review:', error); 
      setMessage('Error submitting your review. Please try again.');
    }
    setReview('');
  };

  return (
    <ReviewContainer>
      <CustomerNavbar />
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Share Your Experience</h1>
      <ReviewForm onSubmit={handleSubmit}>
        <TextArea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          rows="5"
          placeholder="Write your review here..."
        />
        <SubmitButton type="submit">Submit Review</SubmitButton>
      </ReviewForm>
      {message && <Message>{message}</Message>}
    </ReviewContainer>
  );
};

export default ReviewPage;


// // src/pages/ReviewPage.js
// import React, { useState } from 'react';
// import styled from 'styled-components';
// import CustomerNavbar from '../components/CustomerNavbar';
// import axios from 'axios';

// const ReviewContainer = styled.div`
//   padding: 0px;
//   background-color: ${(props) => props.theme.colors.secondary};
//   min-height: 100vh;
//   font-family: ${(props) => props.theme.fonts.primary};
// `;

// const ReviewForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   max-width: 600px;
//   margin: 0 auto;
// `;

// const TextArea = styled.textarea`
//   padding: 10px;
//   font-family: ${(props) => props.theme.fonts.secondary};
//   margin-bottom: 15px;
//   border-radius: 5px;
//   border: 1px solid ${(props) => props.theme.colors.accent};
// `;

// const SubmitButton = styled.button`
//   padding: 10px;
//   font-family: ${(props) => props.theme.fonts.secondary};
//   background-color: ${(props) => props.theme.colors.primary};
//   color: ${(props) => props.theme.colors.secondary};
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// `;

// const ReviewPage = () => {
//   const [review, setReview] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('/api/reviews', { review });
//       setMessage('Thank you for your review!');
//     } catch (error) {
//       setMessage('Error submitting your review. Please try again.');
//     }
//     setReview('');
//   };

//   return (
//     <ReviewContainer>
//       <CustomerNavbar />
//       <h1>Share Your Experience</h1>
//       <ReviewForm onSubmit={handleSubmit}>
//         <TextArea
//           value={review}
//           onChange={(e) => setReview(e.target.value)}
//           rows="5"
//           placeholder="Write your review here..."
//         />
//         <SubmitButton type="submit">Submit Review</SubmitButton>
//       </ReviewForm>
//       {message && <p>{message}</p>}
//     </ReviewContainer>
//   );
// };

// export default ReviewPage;
