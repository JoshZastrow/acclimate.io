import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Img from "gatsby-image";
import { colors } from "../../styles/theme";

const Wrapper = styled.div`
  background-color: ${colors.medium};
  margin-bottom: 18px;
  -webkit-box-shadow: 0px 0px 3px 0px #ccc;
  -moz-box-shadow: 0px 0px 3px 0px #ccc;
  box-shadow: 0px 0px 3px 0px #ccc;
`;

const Nav = styled.nav`
  display: flex;
  max-width: 960px;
  margin: auto;
  padding: 0 10px;
  height: 65px;
  justify-content: space-between;
`;

const UL = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  }
`;

const Logo = styled(Img)`
  margin-right: 10px;
  width: 40px;
  transition: all 0.4s ease;
  &: hover {
    transform: rotate(72deg);
  }
`;

const Title = styled(Link)`
  text-decoration: none;
  color: ${colors.light};
  font-size: 20px;
  font-weight: 700;
  transition: all 0.2s ease;
  &:hover {
    -ms-transform: translate(0px, -1px);
    -webkit-transform: translate(0px, -1px);
    transform: translate(0px, -1px);
    color: #FFFFFF;
  }
`;

const Li = styled.li` 
  position: relative;
  margin-left: 15px;
  > a {
    color: ${colors.light};
    font-size: 14px;
    font-weight: 300;
    text-decoration: none;
    transition: all 0.2s ease;
    &:hover {
      color: #FFFFFF;
    }
  }
`;

const Drop = styled.ul`
  position: absolute;
  list-style: none;
  margin: 0;
  padding: 0;
  background: ${colors.medium};
  display: none;
  visibility: hidden;
  opacity: 0;
  > li {
    height: 50px;
    border: 1px solid white;
  }
  ${Li}:hover & {
    display: flex;
    flex-direction: column;
    visibility: visible;
    opacity: 1;
  }
`;

const SLink = styled(Link)`
  background: none;
  border: none;
  text-decoration: none;
  color: ${colors.light};
  font-size: 14px;
  font-weight: 300;
  line-height: 150%;
  margin: 0;
  transition: all 0.2s ease;
  &:hover {
    color: #FFFFFF;
  }
`;

export default ({ data }) => (
  <Wrapper>
    <Nav>
      <UL>
        <li>
          <Link to={"/"}>
            <Logo sizes={data.logo.sizes} />
          </Link>
        </li>
        <li>
          <Title to={"/"}>
            {data.site.siteMetadata.title}
          </Title>
        </li>
      </UL>
      <UL>
        <Li>
          <a href="#">About</a>
          <Drop>
            <li><SLink>Services</SLink></li>
            <li><SLink>Process</SLink></li>
            <li><SLink>Industries</SLink></li>
          </Drop>
        </Li>
        <Li>
          <a href="#">Company</a>
          <Drop>
            <li><SLink>Team</SLink></li>
            <li><SLink>Careers</SLink></li>
            <li><SLink>Contact</SLink></li>
          </Drop>
        </Li>
        <Li><SLink to={"/contact/"}>Contact</SLink></Li>
      </UL>
    </Nav>
  </Wrapper>
);
