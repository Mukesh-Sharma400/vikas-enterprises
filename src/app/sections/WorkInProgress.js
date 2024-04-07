import Image from "next/image";
import styled from "styled-components";
import underConstruction from "../../../public/assets/under-construction.svg";

export const WorkInProgress = () => {
  return (
    <DisplayWrapper>
      <ContentWrapper>
        <Message>Page Is Under Development</Message>
        <Button>Go to Home</Button>
      </ContentWrapper>
      <UnderConstructionImage
        src={underConstruction}
        alt="Under Construction"
      />
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 850px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 5%;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    position: relative;
    gap: 2rem;
  }
`;

const UnderConstructionImage = styled(Image)`
  width: 65%;
  height: auto;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    width: 100%;
    position: absolute;
    bottom: 50px;
    right: 5%;
  }
`;

const ContentWrapper = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 768px) {
    width: fit-content;
    position: absolute;
    top: 15%;
    left: 5%;
    z-index: 1;
  }
`;

const Message = styled.p`
  max-width: 370px;
  font-size: 60px;
  color: #1877f2;
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

const Button = styled.button`
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
