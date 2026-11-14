// Design tokens, exposed to styled-components as `theme.colors` and
// `theme.shadows`, and to plain CSS (globals.css) as CSS variables.

export const colors = {
  primary: "#207cf2", // brand blue: headings, links, primary buttons
  primaryLight: "#eaf1fb", // page/section background, text on primary buttons
  primaryLightTranslucent: "#eaf1fb90", // frosted header and cards
  white: "#ffffff",
  text: "#000000",
  muted: "grey", // dividers
  placeholder: "rgba(0, 0, 0, 0.5)",
  overlay: "rgba(0, 0, 0, 0.5)", // behind popups
  whiteTranslucent: "rgba(255, 255, 255, 0.2)",
  glassBorder: "rgba(225, 225, 225, 1)",
  inputBorder: "rgba(0, 0, 0, 0.2)",
  inputBorderFocus: "rgba(0, 0, 0, 0.5)",
  scrollbarThumb: "rgb(200, 200, 200)",
  scrollbarThumbHover: "rgb(154, 154, 154)",
};

export const shadows = {
  glass: "0 4px 30px rgba(225, 225, 225, 0.5)",
  popup: "0 4px 15px rgba(225, 225, 225, 0.5)",
  card: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  dropSm:
    "drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))",
  dropLg:
    "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
  dropLgStrong:
    "drop-shadow(0 10px 8px rgb(0 0 0 / 0.05)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.2))",
};

// camelCase token name -> --color-kebab-case CSS variable
export const cssVariables = Object.entries(colors)
  .map(
    ([name, value]) =>
      `--color-${name.replace(/[A-Z]/g, (c) => "-" + c.toLowerCase())}: ${value};`,
  )
  .join("\n");
