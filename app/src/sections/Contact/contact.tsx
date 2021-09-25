import { HeaderContainer, SectionDesc, SectionName } from "../Services/styles";

export const ContactSection = () => {
  return (
    <div
      id="contact"
      className="w-full xl:px-48 px-6 py-8 md:py-24 bg-white dark:bg-black-dark"
    >
      <HeaderContainer>
        <SectionName>Get in touch!</SectionName>
        <SectionDesc>
          Contact us directly or fill out the form and I will get back to you
          promptly.
        </SectionDesc>
      </HeaderContainer>
    </div>
  );
};
