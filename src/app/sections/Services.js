import Image from "next/image";
import Slider from "react-slick";
import styled from "styled-components";
import turnkey from "../../../public/assets/turnkey.jpg";
import painting from "../../../public/assets/painting.png";
import civilWork from "../../../public/assets/civil-work.png";
import electrical from "../../../public/assets/electrical.jpg";
import carpenters from "../../../public/assets/carpenters.jpg";
import modular from "../../../public/assets/modular-kitchen.jpg";
import fabrication from "../../../public/assets/fabrication.jpg";
import interior from "../../../public/assets/interior-design.jpg";
import flooring from "../../../public/assets/tiling-flooring.jpg";
import falseCeiling from "../../../public/assets/false-ceiling.jpg";

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

  const servicesData = [
    {
      image: interior,
      title: "Interior Designing",
    },
    {
      image: civilWork,
      title: "Civil Work",
    },
    {
      image: flooring,
      title: "Tiling & Flooring",
    },
    {
      image: electrical,
      title: "Electrical Work",
    },
    {
      image: fabrication,
      title: "Fabrication Work",
    },
    {
      image: painting,
      title: "Painting Work",
    },
    {
      image: falseCeiling,
      title: "False Ceiling",
    },
    {
      image: carpenters,
      title: "Carpenter Work",
    },
    {
      image: modular,
      title: "Modular Kitchen",
    },
    {
      image: turnkey,
      title: "Turnkey Contractor",
    },
  ];

  return (
    <DisplayWrapper>
      <Header data-aos="fade-up">
        <ServicesHeading>{sectionData.smallHeading}</ServicesHeading>
        <Heading>{sectionData.heading}</Heading>
        <Description>{sectionData.description}</Description>
      </Header>
      <MySlider {...settings}>
        {servicesData.map((service, index) => (
          <MySlideWrapper key={index}>
            <MySlide>
              <SlideImageWrapper>
                <SlideImage src={service.image} alt={service.title} />
              </SlideImageWrapper>
              <SlideTitle>{service.title}</SlideTitle>
            </MySlide>
          </MySlideWrapper>
        ))}
      </MySlider>
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div`
  width: 100%;
  margin-top: 50px;
  padding-bottom: 50px;
  border-radius: 40px;
  background-color: ${({ theme }) => theme.globalColors.primaryColor};
  transition: all 0.5s ease-in-out;
`;

const Header = styled.div`
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
  color: ${({ theme }) => theme.globalColors.ternaryColor};
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.5s ease-in-out;
`;

const Heading = styled.h1`
  color: ${({ theme }) => theme.globalColors.ternaryColor};
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
  color: ${({ theme }) => theme.globalColors.ternaryColor};
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    font-size: 16px;
  }
  @media (max-width: 376px) {
    font-size: 14px;
  }
`;

const MySlider = styled(Slider)`
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

const MySlideWrapper = styled.div`
  transition: all 0.5s ease-in-out;
`;

const MySlide = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.globalColors.ternaryColor};
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))
    drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
  transition: all 0.5s ease-in-out;
`;

const SlideImageWrapper = styled.div`
  width: 100%;
  height: auto;
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 15px;
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
  font-size: 25px;
  color: black;
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
  color: ${({ theme }) => theme.globalColors.ternaryColor};
  background-color: transparent;
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
    <i class="bi bi-caret-right-fill"></i>
  </StyledArrowButton>
);

const StyledPrevArrow = ({ onClick }) => (
  <StyledArrowButton className="prev" onClick={onClick}>
    <i class="bi bi-caret-left-fill"></i>
  </StyledArrowButton>
);
