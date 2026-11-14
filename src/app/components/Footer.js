import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { ContactPopup } from "./ContactPopup";
import {
  business,
  contactLinks,
  routes,
  services,
  socialLinks,
} from "@/app/data/site";
import logo from "#/logo.webp";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showContactPopup, setShowContactPopup] = useState(false);

  return (
    <DisplayWrapper>
      <ColumnsWrapper>
        <ContactColumn>
          <ContactSentence>Ready To Build Your Dream Home?</ContactSentence>
          <ContactBtn
            data-aos="fade-right"
            onClick={() => setShowContactPopup(true)}
          >
            Contact Now
          </ContactBtn>
        </ContactColumn>
        <ServicesColumn>
          <SectionHeading>Services</SectionHeading>
          <ServicesWrapper>
            {services.map((service, index) => (
              <Service key={index} data-aos="fade-up">
                <i className="bi bi-check-circle"></i> {service.name}
              </Service>
            ))}
          </ServicesWrapper>
        </ServicesColumn>
        <PagesColumn>
          <SectionHeading>Pages</SectionHeading>
          <PagesWrapper>
            {routes.map((page, index) => (
              <Page key={index} href={page.path} data-aos="fade-up">
                {page.label}
              </Page>
            ))}
          </PagesWrapper>
        </PagesColumn>
      </ColumnsWrapper>
      <ColumnsWrapper>
        <NameColumn>
          <LogoNameWrapper href="/">
            <Logo src={logo} alt="Vikas Enterprises" />
            <Name data-aos="fade-right">
              Vikas
              <br />
              Enterprises
            </Name>
          </LogoNameWrapper>
          <Description>{business.description}</Description>
        </NameColumn>
        <AddressColumn>
          <SocialLinksWrapper>
            {contactLinks.map((link, index) => (
              <SocialLink
                key={index}
                href={link.href}
                target="_blank"
                data-aos="fade-up"
              >
                <SocialIcon
                  className={link.className}
                  aria-label={link.label}
                />
                {link.text}
              </SocialLink>
            ))}
          </SocialLinksWrapper>
        </AddressColumn>
        <SocialColumn>
          <SocialLinksWrapper>
            {socialLinks.map((link, index) => (
              <SocialLink
                key={index}
                href={link.href}
                target="_blank"
                data-aos="fade-up"
              >
                <SocialIcon
                  className={link.className}
                  aria-label={link.label}
                />
                {link.label}
              </SocialLink>
            ))}
          </SocialLinksWrapper>
        </SocialColumn>
      </ColumnsWrapper>
      <BottomWrapper>
        <LeftSide>
          <p>
            © {currentYear} <span>Vikas Enterprises</span>. All rights
            reserved.
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
      {showContactPopup && (
        <ContactPopup handleClose={() => setShowContactPopup(false)} />
      )}
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 50px 5%;
  border-radius: 40px 40px 0 0;
  background-color: ${({ theme }) => theme.colors.primary};
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

const SectionHeading = styled.p`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.primaryLight};
  margin-bottom: 10px;
  transition: all 0.5s ease-in-out;
`;

const ContactColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ContactSentence = styled.p`
  font-size: 36px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryLight};
  transition: all 0.5s ease-in-out;
`;

const ContactBtn = styled.button`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.primaryLight};
  filter: ${({ theme }) => theme.shadows.dropLg};
  border-radius: 40px;
  width: 220px;
  height: 50px;
  transition: all 0.5s ease-in-out;
`;

const ServicesColumn = styled.div`
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
  color: ${({ theme }) => theme.colors.primaryLight};
  transition: all 0.5s ease-in-out;
`;

const PagesColumn = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const PagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 0.5s ease-in-out;
`;

const Page = styled(Link)`
  width: 100%;
  font-size: 15px;
  display: flex;
  gap: 5px;
  padding: 10px 0px;
  color: ${({ theme }) => theme.colors.primaryLight};
  text-decoration: none;
  transition: all 0.5s ease-in-out;

  &:hover {
    font-weight: 500;
  }
`;

const NameColumn = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const LogoNameWrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  transition: all 0.5s ease-in-out;
`;

const Logo = styled(Image)`
  width: auto;
  height: 70px;
  transition: all 0.5s ease-in-out;
`;

const Name = styled.p`
  font-size: 32px;
  font-weight: 600;
  line-height: 33px;
  color: ${({ theme }) => theme.colors.primaryLight};
  transition: all 0.5s ease-in-out;
`;

const Description = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.primaryLight};
  transition: all 0.5s ease-in-out;
`;

const AddressColumn = styled.div`
  width: 31%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SocialColumn = styled.div`
  width: 29%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SocialLinksWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: all 0.5s ease-in-out;
`;

const SocialLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.primaryLight};
  transition: all 0.5s ease-in-out;

  &:hover {
    font-weight: 500;
  }
`;

const SocialIcon = styled.i`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 18px;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.primaryLight};
  background-color: ${({ theme }) => theme.colors.whiteTranslucent};
  transition: all 0.5s ease-in-out;
`;

const BottomWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: 15px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 750px) {
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
    color: ${({ theme }) => theme.colors.primaryLight};
    text-decoration: none;
    transition: all 0.5s ease-in-out;

    font-weight: 600;
    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;
