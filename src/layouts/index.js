import React from "react";
import { Helmet } from "react-helmet";
import Headroom from "react-headroom";
import { useStaticQuery, graphql } from "gatsby";

import "../styles/normalize.css";
import "../styles/base.css";
import "@fortawesome/fontawesome-free/css/all.css";

import Navigation from "../components/Navigation";
import CallToActionSection from "../components/CallToActionSection";
import Footer from "../components/Footer";

import favicon from "../images/logo.png";

export default ({ location, children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          shortName
        }
      }
    }
  `);
  
  let bottom;
  if (location.pathname === "/contact" || location.pathname === "/thanks") {
    bottom = null;
  } else if (location.pathname === "/careers") {
    bottom = (
      <div>
        <Footer />
      </div>
    );
  } else {
    bottom = (
      <div>
        <CallToActionSection />
        <Footer />
      </div>
    );
  }
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@200;400;700&display=swap"
          rel="stylesheet"
        />
        <title>{data.site.siteMetadata.shortName}</title>
        <meta name="description" content="Acclimate" />
        <link rel="shortcut icon" type="image/png" href={favicon} />
        <meta charSet="utf-8" />
        <meta name="description" content="Acclimate Consulting website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <Headroom>
        <Navigation />
      </Headroom>
      <div>{children}</div>
      {bottom}
      {/* Hubspot code injection */}
      <script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js.hs-scripts.com/4706986.js"
      />
    </>
  );
};