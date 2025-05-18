import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 5rem 0 2rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--secondary-color);
`;

const SubTitle = styled.h3`
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-top: 2rem;
  margin-bottom: 0.5rem;
`;

const List = styled.ul`
  margin-bottom: 1.5rem;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  color: var(--text-primary);
`;

const About = () => (
  <AboutSection className="section">
    <SectionTitle className="section-title">About Me</SectionTitle>
    <p>
      Highly motivated and detail-oriented IT professional with a strong educational background and skilled in programming languages, software development, and data analysis. Proven ability to develop innovative projects and solutions. Certified by top organizations with a strong passion for driving technological innovation.
    </p>
    <SubTitle>Education</SubTitle>
    <List>
      <ListItem><b>Galgotias University</b> — Master Of Computer Application (Sep 2023 – July 2025)</ListItem>
      <ListItem><b>MJP Rohilkhand University</b> — Bachelor of Science in Computer Science (Sep 2020 – July 2023)</ListItem>
    </List>
    <SubTitle>Technical Skills</SubTitle>
    <List>
      <ListItem><b>Software/Tools:</b> MS Excel; MS Word; MS PowerPoint; Android Studio; PyCharm; Canva</ListItem>
      <ListItem><b>Programming Languages:</b> C; Java; Python; SQL; HTML; CSS; JavaScript; React; Node.js; MongoDB</ListItem>
    </List>
  </AboutSection>
);

export default About; 