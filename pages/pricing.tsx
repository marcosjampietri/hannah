import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

import styled from "styled-components";
import { Margin } from "@/styles/globalSC";

const inter = Inter({ subsets: ["latin"] });

export default function Pricing() {
  const priceList = [
    {
      name: "THE 6-SESSION PROGRAMME",
      dur: "(6 hours session)",
      price: "£400",
      description:
        "The programme is entirely tailored to you and 50/50 payment plans are available.",
    },
    {
      name: "THE POWER HOUR",
      dur: "(1 hour session)",
      price: "£150",
      description:
        "An hour tailored specifically to help you overcome challenges, unlock opportunities, and achieve your goals. We’ll delve into a comprehensive analysis of your business. I’ll be your sounding board through expert guidance and practical insights, I’ll empower you to identify and work to your strengths, develop actionable plans, and make informed decisions.",
    },
    {
      name: "THE  9-5",
      dur: "(1 day)",
      price: "TBA",
      description: `If you want to make a big shift in a small amount of time. And you need it to actually matter — as in, it needs to make a tangible difference in your life and your business, both immediately and long-term. We\’ll embark on an immersive full-day, 8-hour consultation we will work collaboratively to identify areas for improvement, develop tailored solutions, and implement effective strategies to maximize your business's potential. achieve sustainable success in today\'s dynamic business landscape.We\’ll really get down to it equipping you with knowledge, skills, and actionable insights, tons of ideas and bundles of energy needed to make it happen.Most business owners teach you how to succeed in spite of your idiosyncrasies. I’ll teach you how to succeed because of them. The perfect blend of smarts and support for people who need a really good brain in their back pocket –– and a heart that’s just as invested in your success as you are.`,
    },
    {
      name: "THE PROJECT",
      dur: "(2-4 months)",
      price: "TBA",
      description: `If you need to take action but don’t know how. Embark on a transformative 2 to 4-month project .Through a comprehensive assessment of your business operations, strategy, and market positioning, I’ll will work closely with you to develop a customised roadmap for success. This collaborative journey will encompass strategic planning, process optimisation, product development, and targeted implementation strategies. With regular check-ins and ongoing support, I’ll guide you through each phase, providing expert advice, valuable insights, and practical tools to propel your business forward. `,
    },
  ];

  return (
    <>
      <Head>
        <title>Prices Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Margin>
          <Section>
            {priceList.map((item, i) => (
              <Card key={i}>
                <h3>{item.name}</h3>
                <h4>{item.dur}</h4>
                <h4>{item.price}</h4>
                <p>{item.description}</p>
              </Card>
            ))}
          </Section>
        </Margin>
      </Main>
    </>
  );
}

const Main = styled.main`
  display: grid;
  place-content: center;
  font-family: Montserrat;
`;

const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  padding: 70px 20px 0px;

  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    margin: 15px;
  }
`;

const Card = styled.div`
  width: 100%;
  padding: 15px;
  margin: 20px;

  box-shadow: 2px 2px 15px #00000030;

  h4 {
    font-weight: 400;
    margin-bottom: 10px;
  }
  p {
    font-weight: 300;
    margin-bottom: 10px;
  }
  h3 {
    margin-bottom: 10px;
  }
`;
