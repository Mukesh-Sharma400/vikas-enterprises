"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import StyledComponentsRegistry from "./registry";
import { ThemeProvider } from "@/app/components/ThemeProvider";

export function Providers({ children }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <StyledComponentsRegistry>
      <ThemeProvider>{children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
}
