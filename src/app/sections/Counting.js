import CountUp from "react-countup";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const Counting = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const sectionData = {
    years: currentYear - 2001,
    projects: 100,
    reviews: 30,
    happyPercent: 97,
  };

  return (
    <DisplayWrapper ref={ref}>
      <ContentWrapper>
        <Number data-aos="fade-up">
          {isVisible ? (
            <CountUp start={0} end={sectionData.years} duration={5} />
          ) : (
            "0"
          )}
          +
        </Number>
        <Label>
          Experience
          <br />
          Years
        </Label>
      </ContentWrapper>
      <Divider />
      <ContentWrapper>
        <Number data-aos="fade-up">
          {isVisible ? (
            <CountUp start={0} end={sectionData.projects} duration={5} />
          ) : (
            "0"
          )}
          +
        </Number>
        <Label>
          Interior
          <br />
          Projects
        </Label>
      </ContentWrapper>
      <Divider className="middle" />
      <ContentWrapper>
        <Number data-aos="fade-up">
          {isVisible ? (
            <CountUp start={0} end={sectionData.reviews} duration={5} />
          ) : (
            "0"
          )}
          +
        </Number>
        <Label>
          Positive
          <br />
          Reviews
        </Label>
      </ContentWrapper>
      <Divider />
      <ContentWrapper>
        <Number data-aos="fade-up">
          {isVisible ? (
            <CountUp start={0} end={sectionData.happyPercent} duration={5} />
          ) : (
            "0"
          )}
          %
        </Number>
        <Label>
          Happy
          <br />
          Rate
        </Label>
      </ContentWrapper>
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 50px 0;
  background-color: white;
  transition: all 0.5s ease-in-out;

  @media (max-width: 500px) {
    max-width: 264px;
    flex-wrap: wrap;
    margin: 0 auto;
  }
`;

const Divider = styled.div`
  width: 2px;
  height: 100px;
  background-color: grey;
  transition: all 0.5s ease-in-out;

  @media (max-width: 500px) {
    &.middle {
      width: 100%;
      height: 2px;
    }
  }
`;

const ContentWrapper = styled.div`
  width: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all 0.5s ease-in-out;

  @media (max-width: 500px) {
    height: 130px;
  }
`;

const Number = styled.p`
  font-size: 40px;
  color: black;
  transition: all 0.5s ease-in-out;

  @media (max-width: 550px) {
    font-size: 35px;
  }
`;

const Label = styled.p`
  font-size: 20px;
  color: grey;
  transition: all 0.5s ease-in-out;

  @media (max-width: 550px) {
    font-size: 18px;
  }
`;
