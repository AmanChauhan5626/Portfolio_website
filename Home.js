import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PortraitContainer = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 5rem 0 2rem 0;
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = styled(motion.div)`
  background: var(--bg-light);
  border-radius: 8px;
  padding: 2rem;
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: var(--card-shadow);
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 4px 12px rgba(2, 12, 27, 0.2);
  }
`;

const ProfileImage = styled(motion.img)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 2rem;
  border: 4px solid var(--secondary-color);
  box-shadow: var(--card-shadow);
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const Name = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
`;

const Title = styled(motion.h2)`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--secondary-color);
  letter-spacing: 0.5px;
`;

const Description = styled(motion.p)`
  color: var(--text-secondary);
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 2.5rem;
  line-height: 1.6;
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1.2rem;
  width: 100%;
  justify-content: center;
`;

const Button = styled(motion.button)`
  padding: 1rem 2rem;
  background: ${props => props.primary ? 'var(--secondary-color)' : 'transparent'};
  color: ${props => props.primary ? 'var(--bg-primary)' : 'var(--secondary-color)'};
  border: 1px solid var(--secondary-color);
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  box-shadow: ${props => props.primary ? 'var(--card-shadow)' : 'none'};

  &:hover {
    transform: translateY(-2px);
    background: ${props => props.primary ? 'var(--accent-color)' : 'rgba(100, 255, 218, 0.1)'};
    color: ${props => props.primary ? 'var(--bg-primary)' : 'var(--secondary-color)'};
  }
`;

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      type: 'spring',
      bounce: 0.4
    } 
  },
};

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <PortraitContainer className="section">
      <Card
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="animate-scaleIn"
      >
        <ProfileImage
          src="/assets/images/profile.png"
          alt="Aman Chauhan"
        />
        <Name
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="animate-fadeInUp delay-200"
        >
          Aman Chauhan
        </Name>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="animate-fadeInUp delay-300"
        >
          Software Engineer
        </Title>
        <Description
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="animate-fadeInUp delay-400"
        >
          I'm a passionate Software Engineer with a strong background in building scalable web applications, modern UIs, and robust backend systems. I love solving problems and driving innovation through technology.
        </Description>
        <ButtonContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="animate-fadeInUp delay-500"
        >
          <Button 
            primary 
            onClick={() => scrollToSection('projects')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="animate-glow"
          >
            View My Work
          </Button>
          <Button 
            onClick={() => scrollToSection('contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </Button>
        </ButtonContainer>
      </Card>
    </PortraitContainer>
  );
};

export default Home; 