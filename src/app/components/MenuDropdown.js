import styled from "styled-components";
import { ContactPopup } from "./ContactPopup";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export const MenuDropdown = ({ menuOpened, setMenuOpened }) => {
  const menuRef = useRef();
  const router = useRouter();
  const pathName = usePathname();
  const [showContactPopup, setShowContactPopup] = useState(false);

  const routesData = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/projects", label: "Projects" },
    { path: "/gallery", label: "Gallery" },
    { path: "/aboutus", label: "About Us" },
  ];

  const handleRouteClick = ({ page }) => {
    setTimeout(() => {
      router.push(page);
    }, 500);
    setMenuOpened(false);
  };

  const handleButtonClick = () => {
    setMenuOpened(false);
    setShowContactPopup(true);
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        menuOpened &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setMenuOpened(false);
      }
    };

    const handleScroll = () => {
      setMenuOpened(false);
    };

    document.addEventListener("click", handleDocumentClick);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpened]);

  return (
    <>
      <DisplayWrapper ref={menuRef} menuOpened={menuOpened}>
        <RoutesWrapper>
          {routesData.map((page, index) => (
            <Route
              key={index}
              className={pathName === page.path ? "active" : ""}
              onClick={() => handleRouteClick({ page: page.path })}
            >
              {page.label}
            </Route>
          ))}
          <ContactBtn onClick={handleButtonClick}>Contact</ContactBtn>
        </RoutesWrapper>
      </DisplayWrapper>
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
  top: ${(props) => (props.menuOpened ? "100px" : "-400px")};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.globalColors.ternaryColor};
  box-shadow: 0 4px 30px rgba(225, 225, 225, 0.5);
  backdrop-filter: blur(10.1px);
  -webkit-backdrop-filter: blur(10.1px);
  border: 1px solid rgba(225, 225, 225, 1);
  z-index: 2;
  transition: all 0.5s ease-in-out;

  @media (max-width: 600px) {
    top: ${(props) => (props.menuOpened ? "90px" : "-400px")};
  }
`;

const RoutesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 16px;
  transition: all 0.5s ease-in-out;
`;

const Route = styled.button`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: ${({ theme }) => theme.globalColors.primaryColor};
  background-color: ${({ theme }) => theme.globalColors.ternaryColor};
  text-decoration: none;
  transition: all 0.5s ease-in-out;

  &.active {
    font-weight: 600;
  }
`;

const ContactBtn = styled.button`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.globalColors.ternaryColor};
  background-color: ${({ theme }) => theme.globalColors.primaryColor};
  border-radius: 15px;
  width: 100%;
  height: 40px;
  transition: all 0.5s ease-in-out;
`;
