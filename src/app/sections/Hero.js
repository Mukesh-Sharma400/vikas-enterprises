"use client";

import Link from "next/link";
import Image from "next/image";
import copy from "clipboard-copy";
import styled from "styled-components";
import { Toast } from "@/app/components/Toast";
import { business, socialLinks } from "@/app/data/site";
import { useEffect, useRef, useState } from "react";
import { CircularRotatingText } from "@/app/components/CircularRotatingText";
import heroBackground from "#/hero-background.webp";

export const Hero = () => {
  const timeoutRef = useRef(null);
  const socialLinksRef = useRef(null);
  const [toast, setToast] = useState({ visible: false, message: "" });

  const showToast = (message) => {
    setToast({ visible: true, message });
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setToast({ visible: false, message: "" });
    }, 3000);
  };

  const handleOpenDialer = () => {
    const telUrl = `tel:${business.phone}`;
    window.location.href = telUrl;
  };

  const handleCopyEmail = () => {
    const emailToCopy = business.email;
    copy(emailToCopy);
    showToast("Email copied to clipboard");
  };

  useEffect(() => {
    // Load Bootstrap's Tooltip from the npm package instead of relying on the
    // CDN script having set window.bootstrap before this effect runs.
    let cancelled = false;
    let tooltipList = [];

    import("bootstrap/dist/js/bootstrap.bundle.min.js").then(({ Tooltip }) => {
      if (cancelled || !socialLinksRef.current) return;
      tooltipList = Array.from(
        socialLinksRef.current.querySelectorAll('[data-bs-toggle="tooltip"]'),
      ).map((el) => Tooltip.getOrCreateInstance(el));
    });

    // Dispose tooltips on unmount so none are left stuck on screen
    return () => {
      cancelled = true;
      tooltipList.forEach((tooltip) => tooltip.dispose());
    };
  }, []);

  const sectionData = {
    heading: "Elevating Spaces Crafting Dreams",
    description:
      "We specialize in transforming visions into reality. Explore our innovative interior and architectural work.",
  };

  return (
    <DisplayWrapper>
      <ToastWrapper $showToast={toast.visible}>
        <Toast message={toast.message} />
      </ToastWrapper>
      <BackgroundImageWrapper>
        <BackgroundImage
          src={heroBackground}
          alt=""
          priority
          sizes="100vw"
          placeholder="blur"
        />
      </BackgroundImageWrapper>
      <ContentWrapper>
        <InnerContentWrapper data-aos="fade-up">
          <CircularRotatingTextWrapper
            data-aos="zoom-out"
            data-aos-delay="1000"
          >
            <CircularRotatingText />
          </CircularRotatingTextWrapper>
          <Heading>{sectionData.heading}</Heading>
          <Description>{sectionData.description}</Description>
          <ButtonsWrapper>
            <PrimaryBtn onClick={handleOpenDialer}>Call Now</PrimaryBtn>
            <SecondaryBtn onClick={handleCopyEmail}>Copy Email</SecondaryBtn>
          </ButtonsWrapper>
          <SocialLinksWrapper ref={socialLinksRef}>
            {socialLinks.map((link, index) => (
              <SocialLink
                key={index}
                className={link.className}
                href={link.href}
                target="_blank"
                data-bs-toggle="tooltip"
                data-bs-title={link.label}
                data-bs-custom-class="custom-tooltip"
                aria-label={link.label}
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
  top: ${(props) => (props.$showToast ? "10%" : "-20%")};
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
  width: fit-content;
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
  color: ${({ theme }) => theme.colors.primaryLight};
  filter: ${({ theme }) => theme.shadows.dropLg};
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
  @media (max-width: 900px) {
    font-size: 42.5px;
  }
  @media (max-width: 850px) {
    font-size: 40px;
  }
  @media (max-width: 768px) {
    font-size: 35px;
  }
  @media (max-width: 700px) {
    max-width: 450px;
  }
`;

const Description = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primaryLight};
  filter: ${({ theme }) => theme.shadows.dropSm};
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
  color: ${({ theme }) => theme.colors.primaryLight};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 40px;
  width: 180px;
  min-width: 180px;
  height: 50px;
  filter: ${({ theme }) => theme.shadows.dropSm};
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
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.primaryLight};
  border-radius: 40px;
  width: 180px;
  min-width: 180px;
  height: 50px;
  filter: ${({ theme }) => theme.shadows.dropSm};
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
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.primaryLight};
  filter: ${({ theme }) => theme.shadows.dropSm};
  transition: all 0.5s ease-in-out;
`;

const CircularRotatingTextWrapper = styled.div`
  position: absolute;
  top: 40px;
  right: 20px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 700px) {
    right: 60px;
  }
  @media (max-width: 650px) {
    right: 65px;
  }
  @media (max-width: 600px) {
    right: 70px;
  }
  @media (max-width: 450px) {
    right: 75px;
  }
  @media (max-width: 400px) {
    right: 80px;
  }
`;
