"use client";

import CountUp from "react-countup";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { business, stats } from "@/app/data/site";

export const Counting = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  // Start at 0 on both server and client to avoid a hydration mismatch;
  // the real width is read after mount.
  const [screenWidth, setScreenWidth] = useState(0);

  const sectionData = {
    years: currentYear - business.foundedYear,
    ...stats,
  };

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <DisplayWrapper ref={ref}>
      <ContentWrapper>
        <CountValue data-aos={screenWidth < 600 ? "fade-left" : "fade-up"}>
          {isVisible ? (
            <CountUp start={0} end={sectionData.years} duration={5} />
          ) : (
            "0"
          )}
          +
        </CountValue>
        <Label>
          Experience
          <br />
          Years
        </Label>
      </ContentWrapper>
      <Divider />
      <ContentWrapper>
        <CountValue data-aos={screenWidth < 600 ? "fade-right" : "fade-up"}>
          {isVisible ? (
            <CountUp start={0} end={sectionData.projects} duration={5} />
          ) : (
            "0"
          )}
          +
        </CountValue>
        <Label>
          Interior
          <br />
          Projects
        </Label>
      </ContentWrapper>
      <Divider className="middle" />
      <ContentWrapper>
        <CountValue data-aos={screenWidth < 600 ? "fade-left" : "fade-up"}>
          {isVisible ? (
            <CountUp start={0} end={sectionData.reviews} duration={5} />
          ) : (
            "0"
          )}
          +
        </CountValue>
        <Label>
          Positive
          <br />
          Reviews
        </Label>
      </ContentWrapper>
      <Divider />
      <ContentWrapper>
        <CountValue data-aos={screenWidth < 600 ? "fade-right" : "fade-up"}>
          {isVisible ? (
            <CountUp start={0} end={sectionData.happyPercent} duration={5} />
          ) : (
            "0"
          )}
          %
        </CountValue>
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
  background-color: ${({ theme }) => theme.colors.primaryLight};
  transition: all 0.5s ease-in-out;

  @media (max-width: 500px) {
    flex-wrap: wrap;
    margin: 0 auto;
  }
`;

const Divider = styled.div`
  width: 2px;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.muted};
  transition: all 0.5s ease-in-out;

  @media (max-width: 500px) {
    &.middle {
      width: 90%;
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
    height: 150px;
    height: 150px;
  }
`;

const CountValue = styled.p`
  font-size: 40px;
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.5s ease-in-out;

  @media (max-width: 550px) {
    font-size: 35px;
  }
`;

const Label = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primary};
  transition: all 0.5s ease-in-out;

  @media (max-width: 550px) {
    font-size: 18px;
  }
`;
