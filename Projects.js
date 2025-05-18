import React from 'react';
import styled from 'styled-components';

const ProjectsSection = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 5rem 0 2rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--secondary-color);
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
`;

const ProjectCard = styled.div`
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

const ProjectTitle = styled.h3`
  color: var(--text-primary);
  margin-bottom: 1rem;
`;

const ProjectList = styled.ul`
  margin-left: 1.5rem;
  color: var(--text-secondary);
`;

const Projects = () => (
  <ProjectsSection className="section">
    <SectionTitle className="section-title">Projects</SectionTitle>
    <ProjectGrid>
      <ProjectCard>
        <ProjectTitle>Online Complaint Registration for Municipality Corporation</ProjectTitle>
        <ProjectList>
          <li>Web platform for citizens to lodge complaints easily</li>
          <li>Tracks complaint status, assigns complaints to authorities, and generates reports for analysis</li>
          <li>Improves complaint handling efficiency and transparency</li>
        </ProjectList>
      </ProjectCard>
      <ProjectCard>
        <ProjectTitle>Desktop Virtual Assistant</ProjectTitle>
        <ProjectList>
          <li>AI-powered desktop assistant with 30+ functionalities</li>
          <li>Inspired by Google Assistant and Siri</li>
          <li>Controls system settings and applications, voice recognition, and natural language processing</li>
        </ProjectList>
      </ProjectCard>
    </ProjectGrid>
  </ProjectsSection>
);

export default Projects; 