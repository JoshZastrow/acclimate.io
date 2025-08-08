import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

import { colors } from "../styles/theme";

import PageHeader from "../components/PageHeader";
import HorizontalAccent from "../components/HorizontalAccent";
import SectionWrapper from "../components/SectionWrapper";
import AlternatingSection from "../components/AlternatingSection";

import TeamSVG from "../images/team.svg";

const HorizontalAccentLeft = styled(HorizontalAccent)`
  margin: 20px 0;
`;

const Portrait = styled(GatsbyImage)`
  border-radius: 100%;
  width: 200px;
  height: 200px;
`;

export default ({ data }) => {
  const awImage = getImage(data.aw);
  const jzImage = getImage(data.jz);

  return (
  <div>
    <Helmet>
      <title>Acclimate | Partners</title>
    </Helmet>
    <PageHeader>
      <TeamSVG />
      <div>
        <h1>
          Our <span>team</span> has a complementary skillset
        </h1>
        <h3>
          With a variety of industry experience and technical capabilities, the
          team at Acclimate can flex to support your unique needs and goals.
        </h3>
      </div>
    </PageHeader>
    <SectionWrapper backgroundColor={colors.light} fontColor={colors.dark}>
      <div>
        <h1>Our story</h1>
        <p>
          As colleagues and peers within Boston's Venture Cafe network, the
          Acclimate team formed from a common vision in emerging technologies
          and an enthusiasm for innovating on stale business processes. The
          partners come from Coro Fellowship, MIT Sloan business program,
          leading strategy consulting firms, and technical startups with
          educational backgrounds in business and engineering. Our approach is
          interdisciplinary and personal, with a rigorous focus on adding value
          to your customers and stakeholders.
        </p>
      </div>
    </SectionWrapper>
    <SectionWrapper backgroundColor={colors.white} fontColor={colors.dark}>
      <div>
        <h1>The partners</h1>
        <AlternatingSection>
          <div>
            <Portrait image={awImage} alt="Andrew Wilson" />
          </div>
          <div>
            <h2>Andrew Wilson</h2>
            <HorizontalAccentLeft />
            <p>
              Turning data into insights, Andrew spent 4 years consulting with
              the world’s largest technology companies developing actionable
              business strategies. Holding a B.A. in Industrial Engineering from
              Northeastern University, he sees the system-level perspective yet
              appreciates the finer details of user-centric design. Andrew also
              draws from his startup experience, having worked as a software
              developer at an MIT spinoff and coaching student-run ventures.
            </p>
          </div>
        </AlternatingSection>
        <AlternatingSection>
          <div>
            <Portrait image={jzImage} alt="Josh Zastrow" />
          </div>
          <div>
            <h2>Josh Zastrow</h2>
            <HorizontalAccentLeft />
            <p>
              A passionate Machine Learning Engineer with a keen interest in
              deployed Artificial Intelligence Systems. Josh draws experience
              from several years in the Manufacturing industry, building out
              internal business intelligence and analytics solutions. He
              specializes in Machine Learning and Data Analytics and operates
              under Lean Principles. Outside of his A.I. passion, Josh is an avid
              traveler, skier and enthusiast for thought-provoking
              conversations.
            </p>
          </div>
        </AlternatingSection>
      </div>
    </SectionWrapper>
  </div>
  );
};

export const pageQuery = graphql`
  query TeamQuery {
    aw: file(relativePath: { eq: "images/avatars/aw.png" }) {
      childImageSharp {
        gatsbyImageData(width: 200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    jz: file(relativePath: { eq: "images/avatars/jz.png" }) {
      childImageSharp {
        gatsbyImageData(width: 200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
  }
`;
