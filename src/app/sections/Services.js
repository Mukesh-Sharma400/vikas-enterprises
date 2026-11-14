"use client";

import Image from "next/image";
import Slider from "react-slick";
import styled from "styled-components";
import { services } from "@/app/data/site";

export const Services = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    nextArrow: <StyledNextArrow />,
    prevArrow: <StyledPrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  const sectionData = {
    smallHeading: "Services",
    heading: "Our Best Services",
    description:
      "Dive into the realm of excellence with our tailored services, meticulously crafted for every space and vision. Discover the unparalleled quality of our offerings.",
  };

  return (
    <DisplayWrapper>
      <SectionHeader data-aos="fade-up">
        <ServicesHeading>{sectionData.smallHeading}</ServicesHeading>
        <Heading>{sectionData.heading}</Heading>
        <Description>{sectionData.description}</Description>
      </SectionHeader>
      <ServicesSlider {...settings}>
        {services.map((service, index) => (
          <ServiceSlideWrapper key={index}>
            <ServiceSlide>
              <SlideTitle>{service.name}</SlideTitle>
              <SlideImageWrapper>
                <SlideImage src={service.image} alt={service.name} />
              </SlideImageWrapper>
            </ServiceSlide>
          </ServiceSlideWrapper>
        ))}
      </ServicesSlider>
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div`
  width: 100%;
  margin-top: 50px;
  padding-bottom: 50px;
  border-radius: 40px;
  background-color: ${({ theme }) => theme.colors.primary};
  transition: all 0.5s ease-in-out;
`;

const SectionHeader = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  padding: 50px 0;
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

const ServicesHeading = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primaryLight};
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.5s ease-in-out;
`;

const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.primaryLight};
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
  color: ${({ theme }) => theme.colors.primaryLight};
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    font-size: 16px;
  }
  @media (max-width: 376px) {
    font-size: 14px;
  }
`;

const ServicesSlider = styled(Slider)`
  width: 85%;
  margin: 0 auto;
  transition: all 0.5s ease-in-out;

  & > .slick-list {
    & > .slick-track {
      & > .slick-center {
        padding: 0px !important;
        transition: all 0.5s ease-in-out;
      }
      & > .slick-slide {
        padding: 30px;
        transition: all 0.5s ease-in-out;
      }
    }
  }
`;

const ServiceSlideWrapper = styled.div`
  transition: all 0.5s ease-in-out;
`;

const ServiceSlide = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  filter: ${({ theme }) => theme.shadows.dropLg};
  transition: all 0.5s ease-in-out;
`;

const SlideImageWrapper = styled.div`
  width: 100%;
  height: auto;
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
`;

const SlideImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: contain;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const SlideTitle = styled.p`
  text-align: center;
  font-size: 23px;
  color: ${({ theme }) => theme.colors.text};
  padding-bottom: 10px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    font-size: 20px;
  }
  @media (max-width: 670px) {
    font-size: 18px;
  }
  @media (max-width: 500px) {
    font-size: 16px;
  }
  @media (max-width: 376px) {
    font-size: 14px;
  }
  @media (max-width: 321px) {
    font-size: 12px;
  }
`;

const StyledArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primaryLight};
  background-color: transparent;
  filter: ${({ theme }) => theme.shadows.dropLg};
  border: none;
  cursor: pointer;
  z-index: 1;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-50%) scale(1.1);
  }

  &.next {
    right: -50px;
  }

  &.prev {
    left: -50px;
  }
`;

const StyledNextArrow = ({ onClick }) => (
  <StyledArrowButton className="next" onClick={onClick}>
    <i className="bi bi-caret-right-fill"></i>
  </StyledArrowButton>
);

const StyledPrevArrow = ({ onClick }) => (
  <StyledArrowButton className="prev" onClick={onClick}>
    <i className="bi bi-caret-left-fill"></i>
  </StyledArrowButton>
);
