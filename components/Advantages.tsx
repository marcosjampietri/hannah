import styled from "styled-components";
import { animated, useSpring, useTrail, config } from "react-spring";

import { Margin } from "@/styles/globalSC";
import { FaRegBuilding, FaSearchengin, FaWrench } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { AiOutlineReconciliation, AiOutlineSetting } from "react-icons/ai";
import { Title as Title1 } from "@/styles/globalSC";

const Advantages = () => {
  const optn = {
    threshold: [0.3],
    triggerOnce: true,
  };
  // const [refV, inView] = useInView(optn);

  const items = [
    {
      title: "Business strategy development",
      icon: <FaRegBuilding />,
      tx: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.",
    },
    {
      title: "Market research",
      icon: <FaSearchengin />,
      tx: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.",
    },
    {
      title: "Product development",
      icon: <AiOutlineSetting />,
      tx: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.",
    },
    {
      title: "Fundraising",
      icon: <GiReceiveMoney />,
      tx: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.",
    },
    {
      title: "Project management",
      icon: <AiOutlineReconciliation />,
      tx: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.",
    },
    {
      title: "Process improvement",
      icon: <FaWrench />,
      tx: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.",
    },
  ];

  const trail = useTrail(items.length, {
    // opacity: inView ? 1 : 0,
    // x: inView ? 0 : 200,
    config: config.slow,
  });
  const spring = useSpring({
    // opacity: inView ? 1 : 0,
    // scale: inView ? 1 : 1.5,
    // y: inView ? 0 : 100,
    config: config.molasses,
  });

  return (
    <Section>
      <Margin>
        <ItemsWrap
        // ref={refV}
        >
          <Title style={spring}>
            {/* <p style={{ fontFamily: "Bebas Neue" }}>WHAT DO WE OFFER?</p> */}
            <Title1 style={{ color: "#6b5e1f" }}>
              What Services do We Offer?
            </Title1>
          </Title>
          {trail.map((styles, i) => (
            <Item key={i} style={{ ...styles }}>
              <Icon>{items[i].icon}</Icon>
              <div>
                <h3>{items[i].title}</h3>
                <p>{items[i].tx}</p>
              </div>
            </Item>
          ))}
        </ItemsWrap>
      </Margin>
    </Section>
  );
};

export default Advantages;

const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  padding: 70px 20px 0px;

  background: hsla(0, 0%, 98%, 1);

  display: flex;
  align-items: center;
`;

const Title = styled(animated.div)`
  width: 100%;

  background: hsla(348, 100%, 0%, 0);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    letter-spacing: 2px;
    color: red;
  }
`;

const ItemsWrap = styled(animated.div)`
  width: 100%;
  height: 100%;
  min-height: 80vh;
  padding: 0px;

  overflow: hidden;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
`;

const Item = styled(animated.div)`
  width: 100%;

  flex: 1 0 50%;
  // min-height: 25%;
  padding: 0px 0px;
  margin: 20px 0px;

  display: flex;
  justify-content: center;
  align-content: center;

  div {
    margin: 20px;
  }

  h3 {
    font-family: Bebas Neue;
    color: hsla(35, 25%, 45%, 1);
    letter-spacing: 2px;
    font-size: 25px;
    line-height: 1.5em;
    font-weight: 200;
  }

  p {
    font-family: Montserrat, Sans-Serif;
    font-size: 16px;
    line-height: 1.5em;
    color: hsla(0, 0%, 50%, 1);
    font-weight: 300;
  }
`;

const Icon = styled.div`
  flex: 0 0 70px;
  width: 70px;
  height: 70px;

  box-shadow: 2px 2px 5px hsla(0, 0%, 50%, 0.2);
  border-radius: 5px;
  background: hsla(0, 100%, 100%, 1);
  svg {
    padding: 16px;
    width: 100%;
    height: 100%;
    path {
      fill: hsla(35, 25%, 45%, 1);
      /* stroke: hsla(35, 25%, 45%, 1); */
    }
  }
`;
