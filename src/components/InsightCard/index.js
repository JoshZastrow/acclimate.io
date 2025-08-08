import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import { lighten } from "polished";
import { colors } from "../../styles/theme";

const Container = styled.div`
  flex: 1 0;
  margin: 0 20px 40px 20px;
`;

const Title = styled(Link)`
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  :hover span {
    transform: translateX(4px);
  }
  :hover h2 {
    color: ${lighten(0.1, colors.primary)};
  }
  h2 {
    font-family: "alegreya";
    margin: 0;
    color: ${colors.primary};
    transition: all 0.5s ease;
  }
  span {
    margin: 0 4px;
    font-size: 20pt;
    color: ${colors.secondary};
    display:inline-block
    transition: all 0.5s ease;
  }
`;

const Date = styled.span`
  font-style: italic;
  font-size: 14pt;
  color: ${colors.medium};
`;

const Description = styled.span`
  font-size: 14pt;
`;

const Separator = styled.span`
  color: ${colors.medium};
`;

export default props => {
  const image = getImage(props.insight.frontmatter.image);
  return (
    <Container>
      <Link to={props.insight.frontmatter.path}>
        <GatsbyImage image={image} alt={props.insight.frontmatter.title} />
      </Link>
      <Title to={props.insight.frontmatter.path}>
        <h2>{props.insight.frontmatter.title}</h2>
        <span>&#8680;</span>
      </Title>
      <Date>{props.insight.frontmatter.date}</Date>
      <Separator> – </Separator>
      <Description>{props.insight.frontmatter.description}</Description>
    </Container>
  );
};
