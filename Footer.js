import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 2rem 0;
  background-color: var(--primary-color);
  border-top: 1px solid rgba(100, 255, 218, 0.1);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
`;

const SocialLink = styled.a`
  color: var(--text-secondary);
  font-size: 1.5rem;
  margin: 0 1rem;
  transition: var(--transition);
  
  &:hover {
    color: var(--secondary-color);
    transform: translateY(-3px);
  }
`;

const Copyright = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <SocialLinks>
          <SocialLink href="https://www.linkedin.com/in/aman-chauhan-642576267/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </SocialLink>
          <SocialLink href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </SocialLink>
          <SocialLink href="mailto:amanchauhan246761@gmail.com" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </SocialLink>
        </SocialLinks>
        <Copyright>
          &copy; {currentYear} Aman Chauhan. All rights reserved.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 