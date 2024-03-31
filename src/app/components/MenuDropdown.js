import Link from "next/link";
import styled from "styled-components";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export const MenuDropdown = ({ menuOpened, setMenuOpened }) => {
  const menuRef = useRef();
  const pathName = usePathname();

  const routesData = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/projects", label: "Projects" },
    { path: "/gallery", label: "Gallery" },
    { path: "/aboutus", label: "About Us" },
  ];

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
    <DisplayWrapper ref={menuRef} menuOpened={menuOpened}>
      <RoutesWrapper>
        {routesData.map((page, index) => (
          <Route
            key={page.path}
            href={page.path}
            className={pathName === page.path ? "active" : ""}
          >
            {page.label}
          </Route>
        ))}
      </RoutesWrapper>
    </DisplayWrapper>
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
  background: #ffffff;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 16px;
  transition: all 0.5s ease-in-out;
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
`;
