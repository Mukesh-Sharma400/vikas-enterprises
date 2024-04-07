import styled from "styled-components";
import { useRouter } from "next/navigation";

export const WorkInProgress = () => {
  const router = useRouter();

  return (
    <DisplayWrapper>
      <ContentWrapper data-aos="fade-up">
        <Message>Page Is Under Development</Message>
        <Button onClick={() => router.push("/")}>Go to Home</Button>
      </ContentWrapper>
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
  background-image: url("/assets/under-construction.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  transition: all 0.5s ease-in-out;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 50px 5%;
  gap: 1rem;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const Message = styled.p`
  max-width: 370px;
  font-size: 60px;
  color: #1877f2;
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.05))
    drop-shadow(0 4px 3px rgb(0 0 0 / 0.2));
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
