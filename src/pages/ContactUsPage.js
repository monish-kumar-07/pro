// src/pages/ContactUsPage.js
import React, { useState } from 'react';
import styled from 'styled-components';
import CustomerNavbar from '../components/CustomerNavbar';
import axios from 'axios';

const ContactContainer = styled.div`
  padding: 0px;
  background-color: ${(props) => props.theme.colors.secondary};
  min-height: 100vh;
  font-family: ${(props) => props.theme.fonts.primary};
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  font-family: ${(props) => props.theme.fonts.secondary};
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors.accent};
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

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/contact', formData);
      setMessage('Thank you for contacting us!');
    } catch (error) {
      setMessage('Error submitting your message. Please try again.');
    }
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <ContactContainer>
      <CustomerNavbar />
      <h1>Contact Us</h1>
      <ContactForm onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <TextArea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          placeholder="Your Message"
          required
        />
        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>
      {message && <p>{message}</p>}
    </ContactContainer>
  );
};

export default ContactUsPage;
