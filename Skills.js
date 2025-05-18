import React from 'react';
import styled from 'styled-components';

const SkillsSection = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 5rem 0 2rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--secondary-color);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
`;

const Card = styled.div`
  background: var(--bg-light);
  color: var(--text-primary);
  border-radius: 8px;
  padding: 1.5rem 1rem;
  text-align: center;
  font-weight: 600;
  font-size: 1.1rem;
  box-shadow: 0 2px 8px rgba(10, 25, 47, 0.1);
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 4px 12px rgba(10, 25, 47, 0.15);
  }
`;

const skills = [
  'C', 'Java', 'Python', 'SQL', 'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB',
  'MS Excel', 'MS Word', 'MS PowerPoint', 'Android Studio', 'PyCharm', 'Canva'
];

const Skills = () => (
  <SkillsSection className="section">
    <SectionTitle className="section-title">Skills</SectionTitle>
    <Grid>
      {skills.map(skill => (
        <Card key={skill}>{skill}</Card>
      ))}
    </Grid>
  </SkillsSection>
);

export default Skills; 