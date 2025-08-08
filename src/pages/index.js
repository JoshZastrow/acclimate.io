import React from "react";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import styled from "styled-components";

import { lighten, darken } from "polished";
import { colors } from "../styles/theme";

import SectionWrapper from "../components/SectionWrapper";
import CallToActionButton from "../components/CallToActionButton";
import HorizontalAccent from "../components/HorizontalAccent";

import topImage from "../images/network-4.jpg";
import StrategySVG from "../images/strategy.svg";
import MachinelearningSVG from "../images/machinelearning.svg";
import DevelopmentSVG from "../images/development.svg";
import SupportSVG from "../images/support.svg";
import ManufacturingSVG from "../images/manufacturing.svg";
import RetailSVG from "../images/retail.svg";
import LogisticsSVG from "../images/logistics.svg";
import HealthcareSVG from "../images/healthcare.svg";

const LearnMoreButton = styled(CallToActionButton)`
  background: ${colors.primary};
  &:hover {
    background: ${lighten(0.04, colors.primary)};
  }
`;

const Top = styled.div`
  position: relative;
  height: calc(100vh - 65px);
  width: 100vw;
  background-color: ${colors.black};
  background: url(${topImage}) no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    max-width: 550px;
    margin: auto;
    padding: 0 10px 10px 10px;
    > h1 {
      color: ${colors.white};
      > span {
        color: ${colors.secondary};
        font-style: italic;
      }
    }
    > h3 {
      color: ${colors.white};
      font-weight: 300;
      line-height: 1.3;
    }
  }
`;

const WhySection = styled.div`
  h1 {
    text-align: center;
  }
  > div {
    display: flex;
    align-content: space-between;
    flex-direction: column;
    margin: 0 -10px;
    @media (min-width: 650px) {
      flex-direction: row;
    }
    > div {
      flex: 1;
      padding: 10px;
      margin: 0 10px;
      text-align: center;
      > h4 {
        margin-top: 0;
      }
      p {
        margin: 0;
      }
    }
  }
`;

const IconsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -5px;
  > div {
    flex: 1 0;
    flex-basis: 80%;
    @media (min-width: 500px) {
      flex-basis: 40%;
    }
    @media (min-width: 910px) {
      flex-basis: 20%;
    }
    background: #ffffff;
    padding: 20px 10px;
    margin: 5px;
    border-radius: 5px;
    border: 1px solid ${darken(0.01, colors.light)};
    > div {
      margin: 20px 20px 5px 0;
      font-size: 16px;
      text-align: center;
    }
    > h4 {
      text-align: center;
      font-weight: 500;
      margin: 0 0 10px 0;
    }
    svg {
      width: 100px;
      display: block;
      margin: auto;
      fill: ${colors.dark};
      stroke: ${colors.dark};
      stroke-width: 2;
      transition: all 0.3s ease;
      &:hover {
        fill: ${colors.light};
      }
    }
  }
`;

const ProcessSection = styled.div`
  > div {
    display: flex;
    flex-direction: column;
    margin: 0 -20px;
    @media (min-width: 680px) {
      flex-direction: row;
    }
    > div {
      :nth-of-type(1) {
        border-color: ${darken(0.15, colors.primary)};
        span {
          color: ${darken(0.15, colors.primary)};
        }
      }
      :nth-of-type(2) {
        border-color: ${darken(0.05, colors.primary)};
        span {
          color: ${darken(0.05, colors.primary)};
        }
      }
      :nth-of-type(3) {
        border-color: ${lighten(0.05, colors.primary)};
        span {
          color: ${lighten(0.05, colors.primary)};
        }
      }
      :nth-of-type(4) {
        border-color: ${lighten(0.15, colors.primary)};
        span {
          color: ${lighten(0.15, colors.primary)};
        }
      }
      border-left: 3px solid ${colors.primary};
      flex: 1;
      margin: 20px;
      padding-left: 20px;
      @media (min-width: 680px) {
        border-top: 3px solid ${colors.primary};
        border-left: none;
        padding: 20px 0 0 0;
      }
      > h4 {
        margin-top: 0;
      }
      > svg {
        fill: ${colors.secondary};
      }
    }
  }
`;

const H3 = styled.h3`
  font-weight: 300;
`;

export default ({ data }) => (
  <div>
    <Helmet>
      <title>{data.site.siteMetadata.longName}</title>
    </Helmet>
    <Top>
      <div>
        <h1>
          Build <span>intelligent</span> AI systems
        </h1>
        <h3>
          Acclimate is an applied AI engineering firm specializing in agents, RAG systems, and LLMs using industry best practices
        </h3>
        <CallToActionButton to="/contact">Get in touch</CallToActionButton>
      </div>
    </Top>
    <SectionWrapper backgroundColor={colors.white} fontColor={colors.dark}>
      <WhySection>
        <h1>Why partner with us?</h1>
        <HorizontalAccent />
        <div>
          <div>
            <h4>Accelerate your AI Roadmap</h4>
            <p>
              Your company is a leader, but building and scaling advanced AI systems is complex. The talent is scarce, and a slow implementation is costly. We are your fractional, on-demand AI systems team, bringing the strategic leadership and reusable components to get you to market faster and de-risk your entire AI roadmap.
            </p>
          </div>
          <div>
            <h4>Go from Greenfield Opportunity to Production-Grade System</h4>
            <p>
              Don't spend months searching for a single high-cost hire. We build, deploy, and empower your team with a suite of pre-built, battle-tested components for orchestration, data ingestion, and agent tooling. We turn your "zero to one" problem into a straightforward integration project, delivering a production-ready MVP in weeks, not quarters.
            </p>
          </div>
          <div>
            <h4>Empower your team for long-term success</h4>
            <p>
              We don't just advise; we build and hand-off. We work alongside your team to transfer knowledge and build capabilities. Our goal is for you to have the skills to evaluate your AI systems, processes for continuous improvement, and the ability to select the best tools and frameworks—long after our engagement ends.
            </p>
          </div>
        </div>
      </WhySection>
    </SectionWrapper>
    <SectionWrapper backgroundColor={colors.light}>
      <div>
        <h1>Services: AI Acceleration as a Service</h1>
        <IconsSection>
          <div>
            <h4>Expert Architecture & System Design</h4>
            <HorizontalAccent />
            <Link to="/services#strategy">
              <StrategySVG />
            </Link>
            <div>
              We specialize in architecting and deploying robust, production-grade solutions for agentic systems, advanced RAG pipelines, and evaluation & feedback frameworks. Stop wondering what best practices look like—we'll implement them for you.
            </div>
          </div>
          <div>
            <h4>Advanced RAG & Agentic Systems</h4>
            <HorizontalAccent />
            <Link to="/services#machinelearning">
              <MachinelearningSVG />
            </Link>
            <div>
              Moving beyond basic implementations to create sophisticated, reliable, and scalable Retrieval-Augmented Generation systems and autonomous agents with memory, tools, and complex orchestration. We turn LLMs into reliable, product-ready agents.
            </div>
          </div>
          <div>
            <h4>Evaluation-Driven Development</h4>
            <HorizontalAccent />
            <Link to="/services#development">
              <DevelopmentSVG />
            </Link>
            <div>
              We establish the critical infrastructure to measure, monitor, and continuously improve your generative models. This includes end-to-end evals, task-specific evals, and product-focused evals to ensure your LLMs work in practice.
            </div>
          </div>
          <div>
            <h4>Empowerment and Hand-off</h4>
            <HorizontalAccent />
            <Link to="/services#support">
              <SupportSVG />
            </Link>
            <div>
              Our goal is to make you successful. We document everything, establish best practices, and train your team to take ownership, ensuring long-term success long after our initial engagement ends.
            </div>
          </div>
        </IconsSection>
      </div>
    </SectionWrapper>
    <SectionWrapper backgroundColor={colors.white} fontColor={colors.dark}>
      <ProcessSection>
        <h1>Process</h1>
        <div>
          <div>
            <h4>
              <span>&#9312;</span> Discovery
            </h4>
            <div>
              Understand your business and provide recommendations for points
              where you can gain the most leverage.
            </div>
          </div>
          <div>
            <h4>
              <span>&#9313;</span> Engagement
            </h4>
            <div>
              Perform an in-depth analysis and define an actionable strategy
              with a clear purpose for implementation.
            </div>
          </div>
          <div>
            <h4>
              <span>&#9314;</span> Development
            </h4>
            <div>
              Develop an end-to-end, custom-tailored solution that you can use
              for decision-making, efficiency gains, or intelligent offerings.
            </div>
          </div>
          <div>
            <h4>
              <span>&#9315;</span> Deployment
            </h4>
            <div>
              Integrate the solution into your process and workflow while
              continuing to provide necessary training and support.
            </div>
          </div>
        </div>
        <LearnMoreButton to="/process">
          Learn more about our process
        </LearnMoreButton>
      </ProcessSection>
    </SectionWrapper>
    <SectionWrapper backgroundColor={colors.light}>
      <div>
        <h1>Industries</h1>
        <p>
          Technology is causing disruption to business models across all
          industries, although some will shift faster than others. We focus in
          on industries where machine learning and other digital technologies
          will create the greatest impact in the coming years.
        </p>
        <IconsSection>
          <div>
            <h4>Manufacturing</h4>
            <HorizontalAccent />
            <Link to="/industries#manufacturing">
              <ManufacturingSVG />
            </Link>
          </div>
          <div>
            <h4>Retail & e-Commerce</h4>
            <HorizontalAccent />
            <Link to="/industries#retail">
              <RetailSVG />
            </Link>
          </div>
          <div>
            <h4>Supply Chain & Logistics</h4>
            <HorizontalAccent />
            <Link to="/industries#logistics">
              <LogisticsSVG />
            </Link>
          </div>
          <div>
            <h4>Healthcare</h4>
            <HorizontalAccent />
            <Link to="/industries#healthcare">
              <HealthcareSVG />
            </Link>
          </div>
        </IconsSection>
      </div>
    </SectionWrapper>
    <SectionWrapper backgroundColor={colors.white}>
      <div>
        <h1>Team</h1>
        <p>
          We are a team of data scientists, hackers, business strategists, and
          entrepreneurs with broad experience from several different industries.
          We share a passion for technology's impact on business, and have the
          experience and skills to build end-to-end solutions that significantly
          improve your bottom line.
        </p>
        <LearnMoreButton to="/team">Learn more about our team</LearnMoreButton>
      </div>
    </SectionWrapper>
  </div>
);

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        shortName
        longName
      }
    }
  }
`;
