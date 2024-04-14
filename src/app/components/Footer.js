import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import logo from "../../../public/assets/logo.png";

export const Footer = () => {
  const phoneNumber = "+919321048241";
  const currentYear = new Date().getFullYear();

  const sectionData = {
    description:
      "Vikas Enterprises, founded in 2001, has become a trusted leader in Navi Mumbai's renovation scene. We specialize in all aspects of interior decoration, in Navi Mumbai to beyond.",
  };

  const addressData = [
    {
      className: "bi bi-geo-alt-fill",
      href: "https://maps.google.com?q=Ghansoli, Navi Mumbai",
      tooltip: "Address",
      ariaLabel: "Address",
      data: "Ghansoli, Navi Mumbai",
    },
    {
      className: "bi bi-telephone-fill",
      href: "tel:+919321048241",
      tooltip: "Phone",
      ariaLabel: "Phone",
      data: "+91 9321048241",
    },
    {
      className: "bi bi-envelope-at-fill",
      href: "mailto:vikasenterprises201@gmail.com",
      tooltip: "Email",
      ariaLabel: "Email",
      data: "vikasenterprises201@gmail.com",
    },
  ];

  const socialLinks = [
    {
      className: "bi bi-whatsapp",
      href: `https://wa.me/${phoneNumber}`,
      tooltip: "WhatsApp",
      ariaLabel: "WhatsApp",
    },
    {
      className: "bi bi-facebook",
      href: "https://www.facebook.com/vikasenterprises201",
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
      href: "https://twitter.com/vikas_enter201",
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
        <ContactColumn>
          <ContactSentence>Ready To Build Your Dream Home?</ContactSentence>
          <ContactBtn data-aos="fade-right">Contact Now</ContactBtn>
        </ContactColumn>
        <ServicesColumn>
          <SectionHeading>Services</SectionHeading>
          <ServicesWrapper>
            {servicesData.map((service, index) => (
              <Service key={index} data-aos="fade-up">
                <i class="bi bi-check-circle"></i> {service}
              </Service>
            ))}
          </ServicesWrapper>
        </ServicesColumn>
        <PagesColumn>
          <SectionHeading>Pages</SectionHeading>
          <PagesWrapper>
            {routesData.map((page, index) => (
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
          <Description>{sectionData.description}</Description>
        </NameColumn>
        <AddressColumn>
          <SocialLinksWrapper>
            {addressData.map((link, index) => (
              <SocialLink
                key={index}
                href={link.href}
                target="_blank"
                data-aos="fade-up"
              >
                <SocialIcon
                  className={link.className}
                  aria-label={link.ariaLabel}
                />
                {link.data}
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
                  aria-label={link.ariaLabel}
                />
                {link.ariaLabel}
              </SocialLink>
            ))}
          </SocialLinksWrapper>
        </SocialColumn>
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
  background-color: ${({ theme }) => theme.globalColors.primaryColor};
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
  color: white;
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
    width: 85%;
  }

  @media (max-width: 426px) {
    width: 100%;
  }
`;

const ContactSentence = styled.p`
  font-size: 36px;
  font-weight: 600;
  color: white;
  transition: all 0.5s ease-in-out;
`;

const ContactBtn = styled.button`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.globalColors.primaryColor};
  background-color: ${({ theme }) => theme.globalColors.ternaryColor};
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

  @media (max-width: 426px) {
    width: 100%;
  }
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
`;

const PagesColumn = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    width: 35%;
  }

  @media (max-width: 426px) {
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
  color: white;
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
  line-height: 33px;
  color: white;
  transition: all 0.5s ease-in-out;
`;

const Description = styled.p`
  font-size: 15px;
  color: white;
  transition: all 0.5s ease-in-out;
`;

const AddressColumn = styled.div`
  width: 31%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 426px) {
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

  @media (max-width: 426px) {
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
  color: white;
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
  color: white;
  background-color: rgba(255, 255, 255, 0.2);
  transition: all 0.5s ease-in-out;
`;

const BottomWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-size: 15px;
  transition: all 0.5s ease-in-out;

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
