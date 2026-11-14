"use client";

import {
  createGlobalStyle,
  ThemeProvider as StyledThemeProvider,
} from "styled-components";
import { colors, cssVariables, shadows } from "@/app/colors";

const theme = { colors, shadows };

// Makes the colour tokens available to globals.css as CSS variables
const CssVariables = createGlobalStyle`
  :root {
    ${cssVariables}
  }
`;

export function ThemeProvider({ children }) {
  return (
    <StyledThemeProvider theme={theme}>
      <CssVariables />
      {children}
    </StyledThemeProvider>
  );
}
