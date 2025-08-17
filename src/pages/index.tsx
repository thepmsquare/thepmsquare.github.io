import "@fontsource-variable/outfit";
import "@fontsource-variable/fraunces";
import "../stylesheets/index.css";

import { motion, useAnimation } from "framer-motion";
import * as React from "react";

import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

import Card from "../components/Card";

import type { HeadFC, PageProps } from "gatsby";

const isBrowser = typeof window !== "undefined";

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
  const controls = useAnimation();
  const viewportRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    document.querySelector(".hidden")?.classList.remove("hidden");
  }, []);
  let targetY = 0;
  let targetX = 0;

  if (isBrowser) {
    targetY = window.innerHeight * 0.75;
    targetX = window.innerWidth * 0.25;
  }

  React.useEffect(() => {
    controls.start({
      y: targetY,
      x: -targetX,
      transition: { type: "spring", stiffness: 120, damping: 12 },
    });
  }, [controls]);

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <div className="App hidden">
          <Card />
        </div>
        <div
          ref={viewportRef}
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            overflow: "hidden",
            pointerEvents: "none",
          }}
        >
          <motion.div
            animate={controls}
            drag={true}
            dragConstraints={viewportRef}
            dragMomentum={true}
            dragElastic={0.2}
            dragTransition={{ bounceStiffness: 50, bounceDamping: 15 }}
            onDragEnd={() => {
              controls.start({
                y: targetY,
                transition: { type: "spring", stiffness: 80, damping: 10 },
              });
            }}
            style={{
              width: "5vmin",
              height: "5vmin",
              borderRadius: "1vmin",
              background: "transparent",
              backdropFilter: "blur(16px) saturate(180%)",
              backgroundColor: "rgb(255,192,203, 0.75)",
              border: "1px solid rgba(255, 255, 255, 0.125)",
              position: "absolute",
              top: 0,
              left: "50%",
              x: "-50%",
              pointerEvents: "auto",
            }}
          />
        </div>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default IndexPage;
