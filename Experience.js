import React from 'react';
import styled from 'styled-components';

const ExperienceSection = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 5rem 0 2rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--secondary-color);
`;

const ExperienceCard = styled.div`
  background: var(--bg-light);
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px rgba(10, 25, 47, 0.1);
`;

const ExperienceTitle = styled.h3`
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`;

const ExperiencePeriod = styled.p`
  color: var(--secondary-color);
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const ExperienceList = styled.ul`
  margin-left: 1.5rem;
  color: var(--text-secondary);
`;

const Experience = () => (
  <ExperienceSection className="section">
    <SectionTitle className="section-title">Experience</SectionTitle>
    <ExperienceCard>
      <ExperienceTitle>Web Developer Intern at Null Class Edtech Private Limited</ExperienceTitle>
      <ExperiencePeriod>Aug 2024 - Oct 2024</ExperiencePeriod>
      <ExperienceList>
        <li>Designed and developed a real-time video sharing website using HTML, CSS, JavaScript, and React</li>
        <li>Implemented features like video upload, playback, commenting, liking, and sharing</li>
        <li>Worked on the backend using Node.js, Express, and MongoDB for user authentication, video storage, and data retrieval</li>
      </ExperienceList>
    </ExperienceCard>
    <ExperienceCard>
      <ExperienceTitle>Cybersecurity Intern at Palo Alto Network (EDUSKILL)</ExperienceTitle>
      <ExperiencePeriod>Apr 2024 - Jun 2024</ExperiencePeriod>
      <ExperienceList>
        <li>Hands-on experience with Palo Alto's cybersecurity solutions and technologies</li>
        <li>Worked on threat analysis, incident response, and security policy implementation</li>
      </ExperienceList>
    </ExperienceCard>
  </ExperienceSection>
);

export default Experience; 