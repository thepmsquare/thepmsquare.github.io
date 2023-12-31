import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../stylesheets/index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { StrictMode, useState, useEffect } from "react";
import Card from "../components/Card";

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

const IndexPage: React.FC<PageProps> = () => {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <StrictMode>
        <div className="App">
          <Card />
        </div>
      </StrictMode>
    );
  }
};

export default IndexPage;
