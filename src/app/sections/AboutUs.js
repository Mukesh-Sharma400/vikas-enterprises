"use client";

import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { ContactPopup } from "@/app/components/ContactPopup";
import aboutUsImage from "#/about-us.webp";

export const AboutUs = () => {
  const [showContactPopup, setShowContactPopup] = useState(false);

  const sectionData = {
    smallHeading: "About Us",
    heading: "Modernity paired with the beauty of simplicity.",
    description:
      "Vikas Enterprises is a team of skilled interior designers with a knack for seeing the world in a beautiful light. Our expertise allows us to transform spaces into captivating environments that reflect our unique style and perspective, delighting all who encounter our work.",
  };

  return (
    <>
      <DisplayWrapper>
        <AboutUsImage src={aboutUsImage} alt="About Us" />
        <ContentWrapper>
          <InnerContentWrapper data-aos="zoom-in-up" data-aos-delay="1000">
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
  padding: 0px 5%;
  position: relative;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
    max-height: unset;
  }
`;

const AboutUsImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 40px;
  object-fit: cover;
  box-shadow: ${({ theme }) => theme.shadows.card};
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    height: 700px;
  }
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: calc(5% + 20px);
  width: 50%;
  height: calc(100% - 40px);
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    width: calc(100% - (10% + 30px));
    height: fit-content;
    top: unset;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
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
  background: ${({ theme }) => theme.colors.primaryLightTranslucent};
  box-shadow: ${({ theme }) => theme.shadows.glass};
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const AboutUsHeading = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text};
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
  color: ${({ theme }) => theme.colors.primary};
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
  color: ${({ theme }) => theme.colors.text};
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
