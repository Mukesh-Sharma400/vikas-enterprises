"use client";

import { useSelector } from "react-redux";
import { uiState } from "../redux/uiSlice";
import { ThemeProvider } from "styled-components";
import { darkMode, lightMode, globalColors } from "../theme";

export default function Theme({ children }) {
  const { theme } = useSelector(uiState);
  const mode = theme === "dark" ? darkMode : lightMode;

  const styleObj = {
    ...mode,
    currentTheme: theme,
    darkMode,
    lightMode,
    globalColors,
  };

  return <ThemeProvider theme={styleObj}>{children}</ThemeProvider>;
}
