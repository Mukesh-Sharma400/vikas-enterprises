import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { ContactPopup } from "../components/ContactPopup";
import aboutus from "../../../public/assets/aboutus-section.jpg";

export const AboutUs = () => {
  const [showContactPopup, setShowContactPopup] = useState(false);

  const sectionData = {
    smallHeading: "About Us",
    heading: "Modernity paired with the beauty of simplicity.",
    description:
      "Vikas Enterprises is a team of skilled interior designers we have a knack for seeing the world in a beautiful light. Our expertise allows us to transform spaces into captivating environments that reflect our unique style and perspective, delighting all who encounter our work.",
  };

  return (
    <>
      <DisplayWrapper>
        <AboutUsImage src={aboutus} alt="About Us" />
        <ContentWrapper>
          <InnerContentWrapper data-aos="zoom-in-up">
            <AboutUsHeading>{sectionData.smallHeading}</AboutUsHeading>
            <Heading>{sectionData.heading}</Heading>
            <Description>{sectionData.description}</Description>
          </InnerContentWrapper>
        </ContentWrapper>
      </DisplayWrapper>
      {showContactPopup && (
        <ContactPopup
          handleClose={() => {
            setShowContactPopup(false);
          }}
        />
      )}
    </>
  );
};

const DisplayWrapper = styled.div`
  width: 100%;
  height: 90vh;
  max-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 5% 50px;
  position: relative;
  background-color: ${({ theme }) => theme.globalColors.ternaryColor};
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
    max-height: 700px;
  }
`;

const AboutUsImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 40px;
  object-fit: cover;
  transition: all 0.5s ease-in-out;
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: calc(5% + 20px);
  width: 50%;
  height: calc(100% - 90px);
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    width: 84.7%;
    height: fit-content;
    top: unset;
    bottom: 70px;
  }
`;

const InnerContentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  border-radius: 20px;
  background: #eaf1fb90;
  box-shadow: 0 4px 30px rgba(225, 225, 225, 0.5);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  border: 1px solid rgba(225, 225, 225, 1);
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const AboutUsHeading = styled.p`
  font-size: 20px;
  color: black;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1200px) {
    font-size: 18px;
  }
  @media (max-width: 1024px) {
    font-size: 16px;
  }
  @media (max-width: 376px) {
    font-size: 14px;
  }
`;

const Heading = styled.h1`
  color: ${({ theme }) => theme.globalColors.primaryColor};
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    font-size: 30px;
  }
  @media (max-width: 376px) {
    font-size: 25px;
  }
`;

const Description = styled.p`
  font-size: 20px;
  letter-spacing: 1px;
  color: black;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1200px) {
    font-size: 18px;
  }
  @media (max-width: 1024px) {
    font-size: 16px;
  }
  @media (max-width: 376px) {
    font-size: 14px;
  }
`;
