import Head from "next/head";
import styled from "styled-components";
import { Inter, Montserrat } from "@next/font/google";

import Testimonials from "@/components/Testimonials";
import Hero from "../components/Hero";
import Footer from "@/components/Footer";
import { animated, useScroll } from "react-spring";
import Services from "@/components/Services";
import Photo from "@/components/Photo";

const ms = Montserrat({ subsets: ["latin"] });

export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <Head>
        <title>Home page</title>
        <meta name="description" content="Home page for Hanna's website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Hero />
        <Services />
        <Photo />
        <Testimonials />
        <Footer />
        <Spin
          style={{
            transform: scrollYProgress.to(
              (scrollP) => `rotate(${scrollP * 400}deg)`
            ),
          }}
        >
          🍌
        </Spin>
      </Main>
    </>
  );
}

const Main = styled.main``;

const Spin = styled(animated.div)`
  position: fixed;
  top: 80px;
  right: 15px;
  width: 50px;
  height: 50px;

  border: 1px solid hsla(35, 25%, 75%, 0.5);
  border-radius: 50%;
  font-size: 35px;

  display: grid;
  place-items: center; ;
`;
