import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Achievements from './components/Achievements';
import Skills from './components/Skills';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: var(--bg-primary);
  color: var(--text-primary);
`;

const Main = styled.main`
  padding-top: 80px;
  overflow-x: hidden;
`;

const Section = styled.section`
  padding: 5rem 0;
  scroll-margin-top: 80px;
`;

const App = () => {
  return (
    <AppContainer>
      <Header />
      <Main>
        <Section id="home">
          <Home />
        </Section>
        <Section id="about">
          <About />
        </Section>
        <Section id="skills">
          <Skills />
        </Section>
        <Section id="experience">
          <Experience />
        </Section>
        <Section id="projects">
          <Projects />
        </Section>
        <Section id="achievements">
          <Achievements />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
      </Main>
      <Footer />
    </AppContainer>
  );
};

export default App; 