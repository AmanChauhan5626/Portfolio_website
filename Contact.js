import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto;
  padding: 5rem 0 2rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--secondary-color);
`;

const ContactDetails = styled.div`
  margin-bottom: 2rem;
  color: var(--text-secondary);
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Input = styled.input`
  padding: 0.8rem 1rem;
  border-radius: 4px;
  border: 1px solid var(--bg-light);
  background: var(--primary-color);
  color: var(--text-primary);
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 0.8rem 1rem;
  border-radius: 4px;
  border: 1px solid var(--bg-light);
  background: var(--primary-color);
  color: var(--text-primary);
  font-size: 1rem;
  min-height: 120px;
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: var(--secondary-color);
  color: #000000;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  margin-top: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(100, 255, 218, 0.2);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

const SuccessMsg = styled.p`
  color: var(--secondary-color);
  margin-top: 1rem;
`;

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <ContactSection className="section">
      <SectionTitle className="section-title">Contact</SectionTitle>
      <ContactDetails>
        <div>Email: <a href="mailto:amanchauhan246761@gmail.com">amanchauhan246761@gmail.com</a></div>
        <div>Phone: <a href="tel:8077596997">8077596997</a></div>
        <div>LinkedIn: <a href="https://www.linkedin.com/in/aman-chauhan-642576267/" target="_blank" rel="noopener noreferrer">linkedin.com/in/aman-chauhan-642576267</a></div>
      </ContactDetails>
      <ContactForm onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
        <Input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
        <TextArea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required />
        <SubmitButton type="submit">Send Message</SubmitButton>
        {submitted && <SuccessMsg>Thank you! Your message has been sent.</SuccessMsg>}
      </ContactForm>
    </ContactSection>
  );
};

export default Contact; 