import styled, { createGlobalStyle } from "styled-components";
import { below } from "./breakpoints";
import { animated } from "react-spring";

export const GlobalStyle = createGlobalStyle`
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  border: 1px solid hsla(120, 100%, 25%, 0);
  -webkit-text-fill-color: hsla(280, 100%, 0%, 1);
  -webkit-box-shadow: 0 0 0px 1000px hsla(120, 100%, 25%, 0) inset;
  // mix-blend-mode: overlay;
  transition: .5s;
}
`;

export const Margin = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0px auto;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MarginNFx = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0px auto;
`;

export const Title = styled.h2`
  display: block;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 1em;

  font-weight: 600;
  font-size: 2.5em;
  text-align: center;

  color: white;
  ${below.med`
    display: block;
    font-size: 2em;    
  `};
  ${below.small`
    display: block;
    font-size: 1.5em;    
  `};
`;
export const SmallTitle = styled(animated.h3)`
  display: block;
  width: 100vw;

  margin-bottom: 0.5em;

  letter-spacing: 2px;
  max-width: 1200px;
  color: hsla(35, 25%, 30%, 1);
  font-family: Bebas Neue;
  font-weight: 100;
`;
