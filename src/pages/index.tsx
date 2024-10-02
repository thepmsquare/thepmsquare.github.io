import "../stylesheets/index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import * as React from "react";

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

const IndexPage: React.FC<PageProps> = () => {
  React.useEffect(() => {
    document.querySelector(".hidden")?.classList.remove("hidden");
  }, []);
  return (
    <React.StrictMode>
      <div className="App hidden">
        <Card />
      </div>
    </React.StrictMode>
  );
};

export default IndexPage;
