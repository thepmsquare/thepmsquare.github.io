import "@fontsource-variable/outfit";
import "@fontsource-variable/fraunces";
import "../stylesheets/index.css";

import * as React from "react";

import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

import Card from "../components/Card";

import type { HeadFC, PageProps } from "gatsby";

export const Head: HeadFC = () => (
  <>
    <title>thePmSquare</title>
    <meta
      name="description"
      content="personal website of thepmsquare (parth mukesh mangtani)."
    />
    <meta
      name="google-site-verification"
      content="tnYl4to99X5gJknMFYfdf1iX8fhDn7uq3CXFhonw1BA"
    />
  </>
);
const theme = createTheme({
  typography: {
    // fontFamily: "Fraunces Variable",
    fontFamily: "Outfit Variable",
    h1: {
      fontFamily: "Outfit Variable",
    },
    h2: {
      fontFamily: "Outfit Variable",
    },
    h3: {
      fontFamily: "Outfit Variable",
    },
    h4: {
      fontFamily: "Outfit Variable",
    },
    h5: {
      fontFamily: "Outfit Variable",
    },
    h6: {
      fontFamily: "Outfit Variable",
    },
  },
});
const IndexPage: React.FC<PageProps> = () => {
  React.useEffect(() => {
    document.querySelector(".hidden")?.classList.remove("hidden");
  }, []);

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <div className="App hidden">
          <Card />
        </div>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default IndexPage;
