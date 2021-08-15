import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import "./App.css";
import { Navbar } from "./components";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  ServicesSection,
  SkillsSection,
} from "./sections";

const PageContainer = styled.div`
  ${tw`
    min-h-screen
    flex
    flex-col
    items-center
    overflow-x-hidden
    bg-white
    dark:bg-black-dark
    text-gray-700
    dark:text-gray-200
    pt-16
  `}
`;

function App() {
  return (
    <PageContainer>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
    </PageContainer>
  );
}

export default App;
