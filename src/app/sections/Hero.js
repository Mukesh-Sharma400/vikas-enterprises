import Link from "next/link";
import Image from "next/image";
import copy from "clipboard-copy";
import styled from "styled-components";
import { Toast } from "../components/Toast";
import { useEffect, useRef, useState } from "react";
import CircularText from "../components/CircularRotatingText";
import backgroundImage from "../../../public/assets/hero-background.png";

export const Hero = () => {
  const timeoutRef = useRef(null);
  const phoneNumber = "+917021739604";
  const emailAddress = "vikasenterprises201@gmail.com";
  const [toast, setToast] = useState({ visible: false, message: "" });

  const showToastMethod = (message) => {
    setToast({ visible: true, message });
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setToast({ visible: false, message: "" });
    }, 3000);
  };

  const handleOpenDialer = () => {
    const telUrl = `tel:${phoneNumber}`;
    window.location.href = telUrl;
  };

  const handleCopyEmail = () => {
    const emailToCopy = `${emailAddress}`;
    copy(emailToCopy);
    showToastMethod("Email copied to clipboard");
  };

  useEffect(() => {
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    const tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => {
      return new window.bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

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
      href: "https://www.facebook.com/profile.php?id=61558255354262",
      tooltip: "Facebook",
      ariaLabel: "Facebook",
    },
    {
      className: "bi bi-instagram",
      href: "https://www.instagram.com/vikas_enterprises201",
      tooltip: "Instagram",
      ariaLabel: "Instagram",
    },
    {
      className: "bi bi-threads",
      href: "https://www.threads.net/@vikas_enterprises201",
      tooltip: "Threads",
      ariaLabel: "Threads",
    },
    {
      className: "bi bi-twitter-x",
      href: "https://twitter.com/VikasEnter55562",
      tooltip: "Twitter / X",
      ariaLabel: "Twitter / X",
    },
  ];

  return (
    <DisplayWrapper>
      <ToastWrapper showToast={toast.visible}>
        <Toast message={toast.message} />
      </ToastWrapper>
      <BackgroundImageWrapper>
        <BackgroundImage src={backgroundImage} alt="Background Image" />
      </BackgroundImageWrapper>
      <ContentWrapper>
        <InnerContentWrapper data-aos="fade-up">
          <CircularRotatingTextWrapper
            data-aos="zoom-out"
            data-aos-delay="1000"
          >
            <CircularText />
          </CircularRotatingTextWrapper>
          <Heading>{sectionData.heading}</Heading>
          <Description>{sectionData.description}</Description>
          <ButtonsWrapper>
            <PrimaryBtn onClick={handleOpenDialer}>Call Now</PrimaryBtn>
            <SecondaryBtn onClick={handleCopyEmail}>Copy Email</SecondaryBtn>
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

const ToastWrapper = styled.div`
  position: fixed;
  top: ${(props) => (props.showToast ? "10%" : "-20%")};
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
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
`;

const InnerContentWrapper = styled.div`
  position: relative;
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
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))
    drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
  transition: all 0.5s ease-in-out;

  @media (max-width: 1200px) {
    font-size: 55px;
  }
  @media (max-width: 1050px) {
    font-size: 50px;
  }
  @media (max-width: 950px) {
    font-size: 45px;
  }
  @media (max-width: 850px) {
    font-size: 40px;
  }
  @media (max-width: 768px) {
    font-size: 35px;
  }
`;

const Description = styled.p`
  font-size: 20px;
  color: white;
  filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1))
    drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
  transition: all 0.5s ease-in-out;

  @media (max-width: 1050px) {
    max-width: 500px;
    font-size: 18px;
  }
  @media (max-width: 768px) {
    max-width: 400px;
    font-size: 15px;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 426px) {
    gap: 1rem;
  }
`;

const PrimaryBtn = styled.button`
  font-size: 20px;
  font-weight: 600;
  color: white;
  background-color: #1877f2;
  border-radius: 40px;
  width: 180px;
  min-width: 180px;
  height: 50px;
  filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1))
    drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    width: 150px;
    min-width: 150px;
    height: 45px;
    font-size: 18px;
  }
`;

const SecondaryBtn = styled.button`
  font-size: 20px;
  font-weight: 600;
  color: #1877f2;
  background-color: transparent;
  border: 2px solid #1877f2 !important;
  border-radius: 40px;
  width: 180px;
  min-width: 180px;
  height: 50px;
  filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1))
    drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    width: 150px;
    min-width: 150px;
    height: 45px;
    font-size: 18px;
  }
`;

const SocialLinksWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  transition: all 0.5s ease-in-out;
`;

const SocialLink = styled(Link)`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 25px;
  border-radius: 50%;
  color: white;
  background-color: #1877f270;
  filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1))
    drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
  transition: all 0.5s ease-in-out;
`;

const CircularRotatingTextWrapper = styled.div`
  position: absolute;
  top: 40px;
  right: 20px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 675px) {
    right: 40px;
  }
  @media (max-width: 635px) {
    right: 50px;
  }
  @media (max-width: 600px) {
    right: 60px;
  }
  @media (max-width: 450px) {
    right: 80px;
  }
`;
