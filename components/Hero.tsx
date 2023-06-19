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
        <Title ref={ref}>
          <SmallTitle style={{ opacity, x }}>{title}</SmallTitle>
          {array.map((word, i) => (
            <Text key={i}>
              <animated.span style={{ y }}>{`${word} `}</animated.span>
            </Text>
          ))}
        </Title>
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

const Title = styled.h1`
  position: relative;
  width: 100%;
  padding: 20px;
  margin: 20px;

  /* border: 1px solid red; */
  display: flex;
  flex-wrap: wrap;
`;

const Text = styled(animated.span)`
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
    font-size: clamp(25px, 8vw, 60px);
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
