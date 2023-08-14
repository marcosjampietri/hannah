import { below } from "@/styles/breakpoints";
import { Margin, SmallTitle } from "@/styles/globalSC";
import { useRouter } from "next/router";
import { animated, config, useInView, useSpring } from "react-spring";
import styled from "styled-components";

const Hero = () => {
  const router = useRouter();
  const [ref, { opacity, y, x }] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
        x: 100,
        config: config.molasses,
      },
      to: {
        opacity: 1,
        y: 0,
        x: 0,
        config: config.molasses,
      },
    }),
    {
      rootMargin: "-20% 0%",
    }
  );

  const title = "Welcome to The Mettleworks";
  const string =
    "a consultancy practice dedicated to helping entrepreneurs build and grow their businesses.";
  const array = string.split(" ");

  return (
    <Section>
      <Margin style={{ flexDirection: "column" }}>
        <Text ref={ref}>
          <animated.div
            style={{
              border: "1px solid hsla(34, 15%, 75%, 1)",
              padding: "5px",
              margin: "10px -10px",
              opacity,
              x,
            }}
          >
            <Dictionary>
              <div>
                <Word>mettle</Word> <Pronunciation>[ˈmet.əl]</Pronunciation>
                <PartOfSpeech>(noun)</PartOfSpeech>
              </div>
              <span>
                person's ability to cope with difficulties; spirit and
                resilience.
              </span>
            </Dictionary>
          </animated.div>
          <SmallTitle style={{ opacity, y }}>{title}</SmallTitle>
          {array.map((word, i) => (
            <H1 key={i}>
              <animated.span style={{ y }}>{`${word} `}</animated.span>
            </H1>
          ))}
        </Text>
        <div style={{ width: "100%", padding: "0px 20px" }}>
          <CTA onClick={() => router.push("/contact")}>CONTACT ME</CTA>
        </div>
      </Margin>
    </Section>
  );
};

export default Hero;

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  min-height: 100vh;

  background-image: linear-gradient(
    hsla(34, 15%, 75%, 1),
    hsla(0, 0%, 100%, 1)
  );
`;

const Dictionary = styled.div`
  border: 1px solid hsla(34, 0%, 75%, 1);
  /* max-width: 300px; */
  padding: 10px;

  opacity: 0.5;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  span {
    /* align-items: center; */
    font-family: "Times New Roman";
  }
`;

const Word = styled.span`
  font-weight: bold;
  font-size: 25px;
  margin-right: 5px;
`;

const Pronunciation = styled.span`
  font-style: italic;
  margin-right: 5px;
`;

const PartOfSpeech = styled.span`
  font-style: italic;
  margin-right: 5px;
`;

const Text = styled.div`
  position: relative;
  width: 100%;
  padding: 20px;
  margin: 20px;

  /* border: 1px solid red; */
  display: flex;
  flex-wrap: wrap;
`;

const H1 = styled(animated.h1)`
  width: fit-content;

  color: hsla(34, 15%, 30%, 1);
  text-transform: uppercase;
  font-family: Montserrat;
  font-weight: 400;

  overflow: hidden;
  span {
    display: block;
    white-space: pre;
    transform: translateY(50%);

    font-size: 1.5em;

    ${below.med`
    display: block;
    font-size: 1.2em;    
  `};
    ${below.small`
    display: block;
    font-size: 1em;    
  `};
  }
`;

const CTA = styled.button`
  /* position: absolute; */
  left: 0px;
  bottom: -100px;
  max-width: 300px;
  padding: 20px 50px;
  white-space: nowrap;

  text-transform: uppercase;

  background: hsla(35, 25%, 75%, 1);
  color: white;
  font-weight: bold;
  font-size: clamp(16px, 1vw, 24px);
  border-radius: 5px;
  box-shadow: 2px 2px 5px hsla(35, 25%, 0%, 0.2);
`;
