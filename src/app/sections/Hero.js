import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import backgroundImage from "../../../public/assets/hero-background.png";

export const Hero = () => {
  const phoneNumber = "+917021739604";

  const sectionData = {
    heading: "Elevating Spaces Crafting Dreams",
    description:
      "We specialize in transforming visions into reality. Explore our work of innovative architectural.",
  };

  const socialLinks = [
    {
      className: "bi bi-whatsapp",
      href: `https://wa.me/${phoneNumber}`,
      tooltip: "WhatsApp",
      ariaLabel: "WhatsApp",
    },
    {
      className: "bi bi-facebook",
      href: "https://www.facebook.com/MukeshSharma400",
      tooltip: "Facebook",
      ariaLabel: "Facebook",
    },
    {
      className: "bi bi-instagram",
      href: "https://www.instagram.com/mukesh_sharma400",
      tooltip: "Instagram",
      ariaLabel: "Instagram",
    },
    {
      className: "bi bi-threads",
      href: "https://www.threads.net/mukesh_sharma400",
      tooltip: "Threads",
      ariaLabel: "Threads",
    },
    {
      className: "bi bi-twitter-x",
      href: "https://twitter.com/mukesh_sharma36",
      tooltip: "Twitter / X",
      ariaLabel: "Twitter / X",
    },
  ];

  return (
    <DisplayWrapper>
      <BackgroundImageWrapper>
        <BackgroundImage src={backgroundImage} alt="Background Image" />
      </BackgroundImageWrapper>
      <ContentWrapper>
        <InnerContentWrapper data-aos="fade-up">
          <Heading>{sectionData.heading}</Heading>
          <Description>{sectionData.description}</Description>
          <ButtonsWrapper>
            <PrimaryBtn>Call Now</PrimaryBtn>
            <SecondaryBtn>Copy Email</SecondaryBtn>
          </ButtonsWrapper>
          <SocialLinksWrapper>
            {socialLinks.map((link, index) => (
              <SocialLink
                key={index}
                className={link.className}
                href={link.href}
                target="_blank"
                data-bs-toggle="tooltip"
                data-bs-title={link.tooltip}
                data-bs-custom-class="custom-tooltip"
                aria-label={link.ariaLabel}
              ></SocialLink>
            ))}
          </SocialLinksWrapper>
        </InnerContentWrapper>
      </ContentWrapper>
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 850px;
  position: relative;
  transition: all 0.5s ease-in-out;
`;

const BackgroundImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease-in-out;
`;

const BackgroundImage = styled(Image)`
  width: 100%;
  height: 100vh;
  max-height: 850px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    object-fit: cover;
  }
`;

const ContentWrapper = styled.div`
  width: 90%;
  max-width: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 16px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    max-width: 90%;
    left: 5%;
  }
`;

const InnerContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 16px;
  transition: all 0.5s ease-in-out;
`;

const Heading = styled.h1`
  font-size: 60px;
  color: white;
  transition: all 0.5s ease-in-out;

  @media (max-width: 550px) {
    font-size: 40px;
  }
  @media (max-width: 490px) {
    font-size: 35px;
  }
  @media (max-width: 430px) {
    font-size: 30px;
  }
  @media (max-width: 366px) {
    font-size: 28px;
  }
  @media (max-width: 342px) {
    font-size: 26px;
  }
  @media (max-width: 300px) {
    font-size: 22px;
  }
`;

const Description = styled.p`
  font-size: 20px;
  color: white;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    font-size: 15px;
  }
  @media (max-width: 768px) {
    font-size: 13px;
  }
  @media (max-width: 426px) {
    font-size: 12px;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const PrimaryBtn = styled.button`
  font-size: 20px;
  font-weight: 600;
  color: white;
  background-color: #4889e5;
  border-radius: 40px;
  width: 180px;
  min-width: 180px;
  height: 50px;
  transition: all 0.5s ease-in-out;

  &:hover {
    letter-spacing: 2px;
    transition-delay: 0s !important;
    transition: all 0.5s ease-in-out !important;
  }
`;

const SecondaryBtn = styled.button`
  font-size: 20px;
  font-weight: 600;
  color: #4889e5;
  background-color: transparent;
  border: 2px solid #4889e5 !important;
  border-radius: 40px;
  width: 180px;
  min-width: 180px;
  height: 50px;
  transition: all 0.5s ease-in-out;

  &:hover {
    letter-spacing: 2px;
    transition-delay: 0s !important;
    transition: all 0.5s ease-in-out !important;
  }
`;

const SocialLinksWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.5s ease-in-out;
`;

const SocialLink = styled(Link)`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 20px;
  border-radius: 50%;
  color: white;
  background-color: #79a9ec;
  transition: all 0.5s ease-in-out;
`;
