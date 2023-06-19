import styled from "styled-components";
import { animated, useScroll } from "react-spring";
import { below } from "@/styles/breakpoints";
import { Title } from "@/styles/globalSC";

const Services = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <Section>
        <Img>
          <animated.img
            style={{
              transform: scrollYProgress.to(
                (prlx) => `translateY(${0 + prlx * -50}%)`
              ),
            }}
            src="https://images.unsplash.com/photo-1517485883175-4ae93081b334?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
            alt=""
          />
        </Img>
        <Text>
          <Title>How Can We Help You?</Title>
          <H3>
            As an entrepreneur, you know that building a successful business
            takes more than just a good idea. It takes Mettle. That's where The
            Mettleworks comes in. With over a decade’s experience driving
            cross-sector projects, I bring guidance and expertise to deliver the
            results you need and ensure that you love the journey getting there.
            I have a keen ability to provide alternative perspectives and ideas
            to empower others to see new opportunities and build successful and
            ethical business.
          </H3>
        </Text>
      </Section>
    </>
  );
};

export default Services;

const Section = styled.section`
  width: 100vw;
  height: 80vh;
  position: relative; /* Add position: relative to establish a new positioning context */

  display: grid;
  place-items: center;
  overflow: hidden;
`;

const Img = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  background-color: #041332;

  img {
    opacity: 0.4;
    position: absolute;
    top: 0;
    /* left: -50%; */
    /* transform: translateX(-50%); */
    min-width: 100%; /* Change width to min-width */
    min-height: 100%; /* Change height to min-height */
    object-fit: cover;
  }
`;

const Text = styled.div`
  grid-row: 1;
  grid-column: 1;

  max-width: 1200px;
  padding: 20px;
  z-index: 2;

  text-align: center;
  font-family: Montserrat;
`;

const H3 = styled.h3`
  color: white;

  font-weight: 200;
  font-size: 1.5em;
  line-height: 1.5em;
  letter-spacing: 0.05em;

  ${below.med`
    display: block;
    font-size: 1.2em;    
  `};
  ${below.small`
    display: block;
    font-size: 1em;    
  `};
`;
