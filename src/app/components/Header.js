import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { usePathname } from "next/navigation";
import { MenuDropdown } from "./MenuDropdown";
import { ContactPopup } from "./ContactPopup";
import logo from "../../../public/assets/logo.png";

export const Header = () => {
  const pathName = usePathname();
  const [menuOpened, setMenuOpened] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);

  const routesData = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/projects", label: "Projects" },
    { path: "/gallery", label: "Gallery" },
    { path: "/aboutus", label: "About Us" },
  ];

  const handleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <>
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
          <ButtonsWrapper>
            <ContactBtn
              data-aos="fade-right"
              data-aos-delay="600"
              onClick={() => {
                setShowContactPopup(true);
              }}
            >
              Contact
            </ContactBtn>
            <Button onClick={handleMenu} menuOpened={menuOpened}>
              <div className="bar bar--1"></div>
              <div className="bar bar--2"></div>
              <div className="bar bar--3"></div>
            </Button>
          </ButtonsWrapper>
        </ContentWrapper>
      </DisplayWrapper>
      <MenuDropdown menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
      {showContactPopup && (
        <ContactPopup
          handleClose={() => {
            setShowContactPopup(false);
          }}
        />
      )}
    </>
  );
};

const DisplayWrapper = styled.div`
  width: 95%;
  max-width: 1216px;
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

  @media (max-width: 768px) {
    position: unset;
    transform: translate(0%, 0%);
  }
`;

const Logo = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: all 0.5s ease-in-out;

  @media (max-width: 600px) {
    width: 40px;
    height: 40px;
  }
`;

const Name = styled.p`
  font-size: 30px;
  font-weight: 600;
  color: #1877f2;
  transition: all 0.5s ease-in-out;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const RoutesWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Route = styled(Link)`
  position: relative;
  font-size: 16px;
  color: #1877f2;
  text-decoration: none;
  padding-bottom: 3px;

  &:hover {
    font-weight: 500;
  }

  &.active {
    font-weight: 600;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background-color: #1877f2;
    width: 0;
    transition: width 0.3s ease-in-out, background-color 0.3s ease-in-out;
  }

  &:hover::before {
    width: 100%;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.5s ease-in-out;
`;

const ContactBtn = styled.button`
  font-size: 20px;
  font-weight: 600;
  color: white;
  background-color: #1877f2;
  border-radius: 40px;
  width: 180px;
  height: 50px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 600px) {
    display: none;
  }
`;

const Button = styled.button`
  padding: 0;
  --gap: 5px;
  --height-bar: 3px;
  --pos-y-bar-one: 0;
  --pos-y-bar-three: 0;
  --scale-bar: 1;
  --rotate-bar-one: 0;
  --rotate-bar-three: 0;

  display: none;

  @media (max-width: 768px) {
    display: flex;
  }

  width: 30px;
  min-width: 30px;
  max-width: 30px;
  flex-direction: column;
  gap: var(--gap);
  cursor: pointer;
  position: relative;
  background: transparent;

  .bar {
    position: relative;
    height: var(--height-bar);
    width: 100%;
    border-radius: 0.5rem;
    background-color: #1877f2;
  }

  .bar--1 {
    top: var(--pos-y-bar-one);
    transform: rotate(var(--rotate-bar-one));
    transition: top 200ms 100ms, transform 100ms;
  }

  .bar--2 {
    transform: scaleX(var(--scale-bar));
    transition: transform 150ms 100ms;
  }

  .bar--3 {
    bottom: var(--pos-y-bar-three);
    transform: rotate(var(--rotate-bar-three));
    transition: bottom 200ms 100ms, transform 100ms;
  }

  ${(props) =>
    props.menuOpened &&
    `
    --pos-y-bar-one: calc(var(--gap) + var(--height-bar));
    --pos-y-bar-three: calc(var(--gap) + var(--height-bar));
    --scale-bar: 0;
    --rotate-bar-one: 45deg;
    --rotate-bar-three: -45deg;
  `}
`;
