import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { usePathname } from "next/navigation";
import logo from "../../../public/assets/logo.png";

export const Header = () => {
  const pathName = usePathname();

  const routesData = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/projects", label: "Projects" },
    { path: "/gallery", label: "Gallery" },
    { path: "/aboutus", label: "About Us" },
  ];

  return (
    <DisplayWrapper>
      <ContentWrapper>
        <RoutesWrapper>
          {routesData.map((page, index) => (
            <Route
              key={page.path}
              href={page.path}
              className={pathName === page.path ? "active" : ""}
              data-aos="fade-right"
              data-aos-delay={`${(index + 1) * 100}`}
            >
              {page.label}
            </Route>
          ))}
        </RoutesWrapper>
        <LogoNameWrapper href="/">
          <Logo src={logo} alt="Vikas Enterprises" />
          <Name data-aos="fade-right" data-aos-delay="500">
            Vikas Enterprises
          </Name>
        </LogoNameWrapper>
        <ContactBtn data-aos="fade-right" data-aos-delay="600">
          Contact
        </ContactBtn>
      </ContentWrapper>
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div`
  width: 95%;
  max-width: calc(1440px - 10%);
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 40px;
  background: #ffffff90;
  box-shadow: 0 4px 30px rgba(225, 225, 225, 0.5);
  backdrop-filter: blur(10.1px);
  -webkit-backdrop-filter: blur(10.1px);
  border: 1px solid rgba(225, 225, 225, 1);
  z-index: 2;
  transition: all 0.5s ease-in-out;
`;

const ContentWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoNameWrapper = styled(Link)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  transition: all 0.5s ease-in-out;
`;

const Logo = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: all 0.5s ease-in-out;
`;

const Name = styled.p`
  font-size: 30px;
  font-weight: 600;
  color: #4889e5;
  transition: all 0.5s ease-in-out;
`;

const RoutesWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.5s ease-in-out;
`;

const Route = styled(Link)`
  position: relative;
  font-size: 16px;
  color: #4889e5;
  text-decoration: none;
  padding-bottom: 3px;

  @media (max-width: 1024px) {
    font-size: 15px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

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
    height: 2px;
    background-color: #4889e5;
    width: 0;
    transition: width 0.3s ease-in-out, background-color 0.3s ease-in-out;
  }

  &:hover::before {
    width: 100%;
  }

  &.active {
    font-weight: 600;
  }
`;

const ContactBtn = styled.button`
  font-size: 20px;
  font-weight: 600;
  color: white;
  background-color: #4889e5;
  border-radius: 40px;
  width: 180px;
  height: 50px;
  transition: all 0.5s ease-in-out;

  &:hover {
    letter-spacing: 2px;
    transition-delay: 0s !important;
    transition: all 0.5s ease-in-out !important;
  }
`;
