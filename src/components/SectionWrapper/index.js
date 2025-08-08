import styled from "styled-components";
import { lighten } from "polished";
import { colors } from "../../styles/theme";

export default styled.div`
  background: ${props => props.backgroundColor || colors.light};
  border-top: 1px solid ${props => lighten(0.05, props.backgroundColor || colors.light)};
  > div {
    max-width: 960px;
    margin: auto;
    padding: 40px 20px;
    color: ${props => props.fontColor || colors.dark};
    h1,
    h2,
    h3,
    h4,
    h5 {
      color: ${props => props.fontColor || colors.dark};
      margin-top: 0;
    }
  }
`;
