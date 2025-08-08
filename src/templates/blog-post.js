import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Author from "../components/Author";

import { colors } from "../styles/theme";

const PostWrapper = styled.div`
  background: ${colors.white};
`;

const PostContainer = styled.div`
    max-width: 740px;
    padding: 20px;
    margin: auto;
    color: ${colors.dark};
    blockquote {
      color: ${colors.medium};
      font-style: italic;
      font-family: "alegreya";
    }
    p {
      line-height: 1.5;
      font-size: 16pt;
    }
    @media (max-width: 780px) {
      p {
        font-size: 14pt;
      }
    }
    h1,
    h2,
    h3,
    h4,
    h5 {
      color: ${colors.dark};
    }
  }
`;

const Banner = styled(GatsbyImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40vh;
`;

const Subtitle = styled.span`
  color: ${colors.medium};
  font-style: italic;
  font-size: 18pt;
  font-family: "alegreya";
`;

const getAvatar = (author, data) => {
  if (author === "Andrew Wilson") {
    return data.aw;
  }
  if (author === "Josh Zastrow") {
    return data.jz;
  }
  if (author === "Zach Litif") {
    return data.zl;
  }
  if (author === "Jonas Linden") {
    return data.jl;
  }
  return data.aw;
};

export default ({ data }) => {
  const post = data.markdownRemark.html;
  const frontmatter = data.markdownRemark.frontmatter;
  const bannerImage = getImage(frontmatter.image);
  const avatarData = getAvatar(frontmatter.author, data);
  
  return (
    <PostWrapper>
      <Helmet title={frontmatter.title}>
        <meta name="description" content={frontmatter.description} />
        <meta property="og:url" content={`https://www.acclimate.io/${frontmatter.path}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={frontmatter.description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={frontmatter.title} />
        <meta name="twitter:description" content={frontmatter.description} />
      </Helmet>
      <Banner image={bannerImage} alt={frontmatter.title} />
      <PostContainer>
        <h1>{frontmatter.title}</h1>
        <Subtitle>{frontmatter.description}</Subtitle>
        <Author
          avatar={avatarData}
          name={frontmatter.author}
          date={frontmatter.date}
        />
        <div dangerouslySetInnerHTML={{ __html: post }} />
        <Author
          avatar={avatarData}
          name={frontmatter.author}
          date={frontmatter.date}
        />
      </PostContainer>
    </PostWrapper>
  );
};

export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        author
        description
        path
        image {
          childImageSharp {
            gatsbyImageData(width: 1200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
    zl: file(relativePath: { eq: "avatars/zl.png" }) {
      childImageSharp {
        gatsbyImageData(width: 100, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    aw: file(relativePath: { eq: "avatars/aw.png" }) {
      childImageSharp {
        gatsbyImageData(width: 100, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    jl: file(relativePath: { eq: "avatars/jl.png" }) {
      childImageSharp {
        gatsbyImageData(width: 100, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    jz: file(relativePath: { eq: "avatars/jz.png" }) {
      childImageSharp {
        gatsbyImageData(width: 100, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    at: file(relativePath: { eq: "avatars/at.png" }) {
      childImageSharp {
        gatsbyImageData(width: 100, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
  }
`;
