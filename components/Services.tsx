import { below } from "@/styles/breakpoints";
import styled from "styled-components";
import { BiUserVoice } from "react-icons/bi";
import { GiEarthAmerica } from "react-icons/gi";
import { FiTarget } from "react-icons/fi";
import { Title } from "@/styles/globalSC";

const Services = () => {
  const services = [
    {
      title: "Service 1",
      tx: "Tailored Solutions: I understand that your business is one-of-a-kind, and it deserves a customized approach. My coaching and consultancy services are designed to address your specific challenges and goals. By gaining a deep understanding of your business,  to craft solutions that resonate with your unique vision, values, and objectives.",
      icon: <BiUserVoice />,
    },
    {
      title: "Service 2",
      tx: "Holistic Perspective: The Mettleworks takes a holistic view of your business, considering all critical aspects, including strategy, operations, marketing, finance, and leadership. To help you identify blind spots, capitalise on strengths, and implement strategies that foster long-term growth and profitability.",
      icon: <GiEarthAmerica />,
    },
    {
      title: "Service 3",
      tx: "Results-Oriented Approach: the primary focus is on delivering measurable results. I will collaborate closely with you, providing actionable insights and guidance to optimize your business's performance. From streamlining operations to developing effective marketing campaigns, ensuring that every step aligns with your goals and drives tangible outcomes.",
      icon: <FiTarget />,
    },
  ];

  return (
    <>
      <Section>
        <Title>Why Choose The Mettleworks?</Title>

        <Wrap>
          {services.map(({ title, tx, icon }, i) => (
            <Card>
              {/* <h3>{title}</h3> */}
              <div
                style={{
                  width: "fit-content",
                  margin: "0px auto",
                  fontSize: "55px",
                }}
              >
                {icon}
              </div>
              <p>{tx}</p>
            </Card>
          ))}
        </Wrap>
      </Section>
    </>
  );
};

export default Services;

const Section = styled.section`
  width: 100vw;
  /* min-height: 100vh; */
  padding: 100px 10px;

  background: hsla(35, 25%, 75%, 1);

  color: white;
`;

const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 43%;
  flex: 0 1 300px;
  margin: 10px;
  padding: 20px;

  ${below.med`
    width: 100%;
  `};

  background: white;
  color: hsla(35, 25%, 45%, 1);
  border-radius: 5px;
  box-shadow: 2px 2px 10px hsla(15, 35%, 35%, 0.3);
  text-align: center;
  font-weight: 300;

  h3,
  p {
    margin: 10px 10px 20px;
  }

  h3 {
  }
`;
