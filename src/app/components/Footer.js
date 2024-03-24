import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import styled from "styled-components";
import logo from "../../../public/assets/logo.png";

export const Footer = () => {
  const phoneNumber = "+917021739604";
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    const tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => {
      return new window.bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

  const sectionData = {
    description:
      "Vikas Enterprises, founded in 2001, has become a trusted leader in Navi Mumbai's renovation scene. We specialize in all aspects of interior decoration, from Ghansoli to beyond.",
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

  const routesData = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/projects", label: "Projects" },
    { path: "/gallery", label: "Gallery" },
    { path: "/aboutus", label: "About Us" },
  ];

  const servicesData = [
    "Interior Designing",
    "Civil Work",
    "Tiling And Flooring",
    "Electrical Work",
    "Fabrication Work",
    "Painting Work",
    "POP Work",
    "Carpenter Work",
    "Modular Kitchen",
    "Turnkey Contractor",
  ];

  return (
    <DisplayWrapper>
      <ColumnsWrapper>
        <Column1>
          <LogoNameWrapper href="/" data-aos="fade-up">
            <Logo src={logo} alt="MJ Interior" />
            <Name>Vikas Enterprises</Name>
          </LogoNameWrapper>
          <Description data-aos="fade-up">
            {sectionData.description}
          </Description>
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
                data-aos="fade-right"
                data-aos-delay={`${(index + 1) * 100}`}
              ></SocialLink>
            ))}
          </SocialLinksWrapper>
        </Column1>
        <Column2>
          <SectionHeading>Pages</SectionHeading>
          <PagesWrapper>
            {routesData.map((page, index) => (
              <Page
                key={page.path}
                href={page.path}
                data-aos="fade-up"
                data-aos-delay={`${(index + 1) * 100}`}
              >
                {page.label}
              </Page>
            ))}
          </PagesWrapper>
        </Column2>
        <Column3>
          <SectionHeading>Services</SectionHeading>
          <ServicesWrapper>
            {servicesData.map((service, index) => (
              <Service
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${(index + 1) * 100}`}
              >
                <i className="bi bi-check2-circle"></i> {service}
              </Service>
            ))}
          </ServicesWrapper>
        </Column3>
      </ColumnsWrapper>
      <BottomWrapper>
        <LeftSide>
          <p>
            © {currentYear} <span>Vikas Enterprises</span>. All rights reserved.
          </p>
        </LeftSide>
        <RightSide>
          <p>
            Designed and Developed by{" "}
            <a href="https://mukesh-sharma.vercel.app" target="_blank">
              Mukesh Sharma
            </a>
          </p>
        </RightSide>
      </BottomWrapper>
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 50px 5%;
  background-color: #1d7d4d;
  transition: all 0.5s ease-in-out;
`;

const ColumnsWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 100px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    gap: 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const Column1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    width: 85%;
  }

  @media (max-width: 426px) {
    width: 100%;
  }
`;

const LogoNameWrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
`;

const Logo = styled(Image)`
  width: auto;
  height: 70px;
  transition: all 0.5s ease-in-out;
`;

const Name = styled.p`
  font-size: 32px;
  font-weight: 600;
  color: white;
  transition: all 0.5s ease-in-out;
`;

const Description = styled.p`
  font-size: 15px;
  color: white;
  transition: all 0.5s ease-in-out;

  @media (max-width: 950px) {
    font-size: 13px;
  }
`;

const SocialLinksWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
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
  background-color: rgba(255, 255, 255, 0.2);
  transition: all 0.5s ease-in-out;
`;

const SectionHeading = styled.p`
  font-size: 25px;
  color: white;
  margin-bottom: 10px;
  transition: all 0.5s ease-in-out;
`;

const Column2 = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    width: 35%;
  }
`;

const PagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 0.5s ease-in-out;
`;

const Page = styled(Link)`
  position: relative;
  width: 100%;
  font-size: 15px;
  display: flex;
  gap: 5px;
  padding: 10px 0px;
  color: white;
  text-decoration: none;
  transition: all 0.5s ease-in-out;
  border-bottom: 1px solid transparent;

  &:hover {
    font-weight: 500;
    letter-spacing: 1.5px;
    transition-delay: 0s !important;
    transition: all 0.5s ease-in-out !important;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    background-color: transparent;
    width: 0;
    transition: width 0.3s ease-in-out, background-color 0.3s ease-in-out;
  }

  &:hover::before {
    width: 100%;
    background-color: white;
  }

  @media (max-width: 950px) {
    font-size: 13px;
  }
`;

const Column3 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  transition: all 0.5s ease-in-out;
`;

const ServicesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  transition: all 0.5s ease-in-out;
`;

const Service = styled.div`
  width: 50%;
  font-size: 15px;
  display: flex;
  gap: 5px;
  padding: 10px 0px;
  color: white;
  transition: all 0.5s ease-in-out;

  @media (max-width: 950px) {
    font-size: 13px;
  }
`;

const BottomWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-size: 15px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
`;

const LeftSide = styled.div`
  transition: all 0.5s ease-in-out;

  span {
    font-weight: 600;
  }
`;

const RightSide = styled.div`
  transition: all 0.5s ease-in-out;

  a {
    color: white;
    text-decoration: none;
    transition: all 0.5s ease-in-out;

    font-weight: 600;
    &:hover {
      cursor: pointer;
      color: black;
    }
  }
`;
