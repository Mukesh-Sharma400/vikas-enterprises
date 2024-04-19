"use client";

import Image from "next/image";
import styled from "styled-components";
import BaseLayout from "@/app/components/BaseLayout";
import turnkey from "../../../../public/assets/turnkey.jpg";
import painting from "../../../../public/assets/painting.png";
import civilWork from "../../../../public/assets/civil-work.jpg";
import electrical from "../../../../public/assets/electrical.jpg";
import carpenters from "../../../../public/assets/carpenters.jpg";
import modular from "../../../../public/assets/modular-kitchen.jpg";
import fabrication from "../../../../public/assets/fabrication.jpg";
import interior from "../../../../public/assets/interior-design.jpg";
import flooring from "../../../../public/assets/tiling-flooring.jpg";
import falseCeiling from "../../../../public/assets/false-ceiling.jpg";

export default function Services() {
  const pageHeader = {
    heading: "Services",
    description:
      "Dive into the realm of excellence with our tailored services, meticulously crafted for every space and vision. Discover the unparalleled quality of our offerings.",
  };

  const servicesData = [
    {
      image: interior,
      name: "Interior Designing",
      description:
        "Transform your space with our expert interior designing services. From concept to completion, we'll bring your vision to life.",
    },
    {
      image: civilWork,
      name: "Civil Work",
      description:
        "From building foundations to structural frameworks, we ensure that every project is completed to the highest standards.",
    },
    {
      image: flooring,
      name: "Tiling And Flooring",
      description:
        "Enhance your space with our tiling and flooring solutions. Our experts will help you choose and install the perfect materials.",
    },
    {
      image: electrical,
      name: "Electrical Work",
      description:
        "Ensure the safety and functionality of your electrical systems with our professional services.",
    },
    {
      image: fabrication,
      name: "Fabrication Work",
      description:
        "Get custom metal parts or structural components with our fabrication work services, delivered on time and within budget.",
    },
    {
      image: painting,
      name: "Painting Work",
      description:
        "Refresh your walls or give your exterior a makeover with our professional painting services.",
    },
    {
      image: falseCeiling,
      name: "False Ceiling",
      description:
        "Achieve stunning architectural details with our false ceiling work services.",
    },
    {
      image: carpenters,
      name: "Carpenter Work",
      description:
        "From furniture making to cabinetry, our skilled carpenters will bring your woodworking projects to life.",
    },
    {
      image: modular,
      name: "Modular Kitchen",
      description:
        "Experience the convenience and functionality of a modular kitchen tailored to suit your lifestyle.",
    },
    {
      image: turnkey,
      name: "Turnkey Contractor",
      description:
        "Sit back and relax while we manage every aspect of your project as your turnkey contractor.",
    },
  ];

  return (
    <BaseLayout>
      <HeaderWrapper>
        <Header data-aos="zoom-in">
          <Heading>{pageHeader.heading}</Heading>
          <Description>{pageHeader.description}</Description>
        </Header>
      </HeaderWrapper>
      <ServicesWrapper>
        {servicesData.map((service, index) => (
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
  background-image: url("assets/hero-background.png");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0 0 40px 40px;
  transition: all 0.5s ease-in-out;
`;

const Header = styled.div`
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
  color: white;
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
  color: white;
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
  background: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
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
  color: black;
  transition: all 0.5s ease-in-out;

  @media (max-width: 376px) {
    font-size: 23px;
  }
`;

const ServiceDescription = styled.p`
  color: grey;
  transition: all 0.5s ease-in-out;

  @media (max-width: 376px) {
    font-size: 14px;
  }
`;
