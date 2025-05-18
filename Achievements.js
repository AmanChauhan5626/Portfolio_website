import React from 'react';
import styled from 'styled-components';

const AchievementsSection = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 5rem 0 2rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--secondary-color);
`;

const Card = styled.div`
  background: var(--bg-light);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(10, 25, 47, 0.1);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 4px 12px rgba(10, 25, 47, 0.15);
  }
`;

const List = styled.ul`
  margin-left: 1.5rem;
  color: var(--text-primary);
  width: 100%;
`;

const ListItem = styled.li`
  margin-bottom: 1rem;
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.5;
  position: relative;
  padding-left: 0.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }

  &:before {
    content: "•";
    color: var(--secondary-color);
    font-weight: bold;
    position: absolute;
    left: -1.2rem;
  }
`;

const Achievements = () => (
  <AchievementsSection className="section">
    <SectionTitle className="section-title">Achievements & Certifications</SectionTitle>
    <Card>
      <List>
        <ListItem>Tata Group Data Visualization Job Simulation Certified</ListItem>
        <ListItem>JP Morgan Cybersecurity Job Simulation Certified</ListItem>
        <ListItem>Accenture Data Analytics Job Simulation Certified</ListItem>
        <ListItem>ISRO Cybersecurity Certified</ListItem>
        <ListItem>Cisco Cybersecurity Essential Certified</ListItem>
        <ListItem>IBM Web Development Fundamental Certified</ListItem>
        <ListItem>Generative AI by Microsoft and LinkedIn Certified</ListItem>
      </List>
    </Card>
  </AchievementsSection>
);

export default Achievements; 