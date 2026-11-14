"use client";

import Image from "next/image";
import styled from "styled-components";
import { BaseLayout } from "@/app/components/BaseLayout";
import { services } from "@/app/data/site";

export function ServicesContent() {
  const pageHeader = {
    heading: "Services",
    description:
      "Dive into the realm of excellence with our tailored services, meticulously crafted for every space and vision. Discover the unparalleled quality of our offerings.",
  };

  return (
    <BaseLayout>
      <HeaderWrapper>
        <SectionHeader data-aos="zoom-in">
          <Heading>{pageHeader.heading}</Heading>
          <Description>{pageHeader.description}</Description>
        </SectionHeader>
      </HeaderWrapper>
      <ServicesWrapper>
        {services.map((service, index) => (
          <ServiceCard key={index} data-aos="fade-up">
            <ServiceDetails>
              <ServiceName>{service.name}</ServiceName>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceDetails>
            <ServiceImageWrapper>
              <ServiceImage
                src={service.image}
                alt={service.name}
                width={450}
                height={450}
              />
            </ServiceImageWrapper>
          </ServiceCard>
        ))}
      </ServicesWrapper>
    </BaseLayout>
  );
}

const HeaderWrapper = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("/assets/hero-background.webp");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0 0 40px 40px;
  transition: all 0.5s ease-in-out;
`;

const SectionHeader = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    max-width: 750px;
  }
  @media (max-width: 850px) {
    max-width: 90%;
  }
  @media (max-width: 768px) {
    max-width: 85%;
  }
`;

const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.white};
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
  color: ${({ theme }) => theme.colors.white};
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    font-size: 16px;
  }
  @media (max-width: 376px) {
    font-size: 14px;
  }
`;

const ServicesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4rem;
  max-width: 1000px;
  margin: -70px auto 5rem;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const ServiceImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: contain;
  transition: all 0.5s ease-in-out;
`;

const ServiceCard = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.card};
  transition: all 0.5s ease-in-out;

  &:hover {
    ${ServiceImage} {
      transform: scale(1.1);
    }
  }

  @media (max-width: 1024px) {
    width: 400px;
  }
  @media (max-width: 900px) {
    width: 350px;
  }
  @media (max-width: 376px) {
    width: 90%;
  }
`;

const ServiceImageWrapper = styled.div`
  width: 100%;
  height: auto;
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
`;

const ServiceDetails = styled.div`
  transition: all 0.5s ease-in-out;
`;

const ServiceName = styled.p`
  font-size: 25px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.5s ease-in-out;

  @media (max-width: 376px) {
    font-size: 23px;
  }
`;

const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  transition: all 0.5s ease-in-out;

  @media (max-width: 376px) {
    font-size: 14px;
  }
`;
