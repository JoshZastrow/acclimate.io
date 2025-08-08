// Test GraphQL query to debug image loading
import { graphql } from "gatsby";

export const testQuery = graphql`
  query TestImageQuery {
    allFile(filter: { relativePath: { regex: "/avatars/" } }) {
      nodes {
        relativePath
        name
        extension
        childImageSharp {
          gatsbyImageData(width: 200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
    aw: file(relativePath: { eq: "avatars/aw.png" }) {
      relativePath
      name
      childImageSharp {
        gatsbyImageData(width: 200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    jz: file(relativePath: { eq: "avatars/jz.png" }) {
      relativePath
      name
      childImageSharp {
        gatsbyImageData(width: 200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
  }
`;
