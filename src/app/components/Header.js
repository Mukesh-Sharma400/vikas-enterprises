import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { usePathname } from "next/navigation";
import { MenuDropdown } from "./MenuDropdown";
import { ContactPopup } from "./ContactPopup";
import logo from "../../../public/assets/logo.png";
import { useEffect, useRef, useState } from "react";

export const Header = () => {
  const menuRef = useRef();
  const pathName = usePathname();
  const [menuOpened, setMenuOpened] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [pagesDropdown, setPagesDropdown] = useState(false);

  const [opacity, setOpacity] = useState(false);

  const handleCloseDropdown = () => {
    setTimeout(() => {
      setPagesDropdown(false);
    }, 1000);
    setOpacity(false);
  };

  const handleOpenDropdown = () => {
    setTimeout(() => {
      setOpacity(true);
    }, 100);
    setPagesDropdown(true);
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        pagesDropdown &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        handleCloseDropdown();
      }
    };

    const handleScroll = () => {
      handleCloseDropdown();
    };

    document.addEventListener("click", handleDocumentClick);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pagesDropdown]);

  const routesData = [
    { path: "/", label: "Home", width: 50 },
    { path: "/services", label: "Services", width: 70 },
    { path: "/projects", label: "Projects", width: 65 },
    { path: "/gallery", label: "Gallery", width: 60 },
    { path: "/aboutus", label: "About Us", width: 75 },
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
                key={index}
                href={page.path}
                className={pathName === page.path ? "active" : ""}
                data-aos="fade-right"
                data-aos-delay={`${(index + 1) * 100}`}
              >
                {page.label}
              </Route>
            ))}
            <PagesDropdownWrapper>
              <PagesDropdown
                data-aos="fade-right"
                onClick={
                  pagesDropdown ? handleCloseDropdown : handleOpenDropdown
                }
              >
                All Pages <i class="bi bi-caret-down-fill"></i>
              </PagesDropdown>
              {pagesDropdown ? (
                <PagesDropdownContentWrapper ref={menuRef} opacity={opacity}>
                  {routesData.map((page, index) => (
                    <Route2
                      key={index}
                      href={page.path}
                      className={pathName === page.path ? "active" : ""}
                      data-aos="fade-down"
                      data-aos-delay={`${(index + 1) * 100}`}
                      style={{ width: page.width }}
                    >
                      {page.label}
                    </Route2>
                  ))}
                </PagesDropdownContentWrapper>
              ) : null}
            </PagesDropdownWrapper>
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
  background: #eaf1fb90;
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
  color: ${({ theme }) => theme.globalColors.primaryColor};
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
  font-size: 16px;
  color: ${({ theme }) => theme.globalColors.primaryColor};
  text-decoration: none;

  &:hover {
    font-weight: 500;
  }

  &.active {
    font-weight: 600;
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
  color: ${({ theme }) => theme.globalColors.ternaryColor};
  background-color: ${({ theme }) => theme.globalColors.primaryColor};
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
    background-color: ${({ theme }) => theme.globalColors.primaryColor};
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

const PagesDropdownWrapper = styled.div`
  position: relative;
  display: none;

  @media (max-width: 1200px) {
    display: block;
  }
`;

const PagesDropdown = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.globalColors.primaryColor};
  cursor: pointer;
`;

const PagesDropdownContentWrapper = styled.div`
  position: absolute;
  top: 60px;
  left: 0px;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 10px;
  border-radius: 20px;
  background: ${({ theme }) => theme.globalColors.ternaryColor};
  box-shadow: 0 4px 30px rgba(225, 225, 225, 0.5);
  backdrop-filter: blur(10.1px);
  -webkit-backdrop-filter: blur(10.1px);
  border: 1px solid rgba(225, 225, 225, 1);
  opacity: ${(props) => (props.opacity === false ? 0 : 1)};
  z-index: 2;
  transition: all 0.5s ease-in-out;
`;

const Route2 = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: ${({ theme }) => theme.globalColors.primaryColor};
  text-decoration: none;

  &:hover {
    font-weight: 500;
  }

  &.active {
    font-weight: 600;
  }
`;
