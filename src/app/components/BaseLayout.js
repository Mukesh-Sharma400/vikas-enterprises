"use client";

import { Header } from "./Header";
import { Footer } from "./Footer";
import styled from "styled-components";

export default function BaseLayout({ children }) {
  return (
    <DisplayWrapper>
      <Header />
      {children}
      <Footer />
    </DisplayWrapper>
  );
}

const DisplayWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  transition: all 0.5s ease-in-out;
`;
