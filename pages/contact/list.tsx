import styled from "styled-components";
import {
  FiMapPin,
  FiMail,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { below } from "../../styles/breakpoints";

const Links = () => {
  const items = [
    {
      icon: <FiMapPin />,
      href: "",
      value: "London, UK",
    },
    {
      icon: <FiMail />,
      href: "mailto:hanna@the-mettleworks.com",
      value: "hanna@the-mettleworks.com",
    },
    {
      icon: <BsWhatsapp />,
      href: "https://api.whatsapp.com/send?phone=447971517847&text=Hello. I'd like help with a project",
      value: "+44 7971517847",
    },
  ];

  const socials = [
    {
      name: "facebook",
      icon: <FiFacebook />,
      href: "",
    },
    {
      name: "intagram",
      icon: <FiInstagram />,
      href: "",
    },
    {
      name: "Linkdin",
      icon: <FiLinkedin />,
      href: "",
    },
  ];

  return (
    <Card style={{ zIndex: "1" }}>
      <Text>
        <h4>
          THE
          <br />
          METTLE WORKS
        </h4>
      </Text>
      <h4>Get In Touch</h4>
      <List>
        {items.map(({ icon, href, value }, i) => (
          <Line>
            <div>{icon}</div>
            <a href={href}>
              <h5>{value}</h5>
            </a>
          </Line>
        ))}
      </List>
      <h4>Social Medias</h4>
      <Social>
        {socials.map(({ name, href, icon }, index) => (
          <a href={href} target="_blank" rel="noreferrer">
            {icon}
            <h5>{name}</h5>
          </a>
        ))}
      </Social>
    </Card>
  );
};

export default Links;

const Card = styled.div`
  width: 100%;
  flex: 1 1 400px;
  margin: 10px;
  height: 650px;
  padding: 10px;

  backdrop-filter: blur(20px);
  background-color: hsla(220, 10%, 80%, 0.7);
  border-radius: 10px;
  color: hsla(35, 35%, 35%, 1);
  font-family: Montserrat;
  font-size: 16px;

  h4 {
    margin: 0px 0px 8px;
  }
`;

const Text = styled.div`
  h4 {
    padding: 0px 0px 25px 0px;

    font-size: 1.5em;
  }

  p {
    padding: 0px 0px 25px 50px;
    font-size: 1em;
    max-width: 450px;
  }
`;
const List = styled.div`
  border-top: 1px solid grey;
  padding: 12px 0px 25px 0px;
`;
const Line = styled.div`
  width: 100%;
  height: 30px;
  padding: 25px 0px;

  svg {
    margin: 0 20px 0px 0px;
    width: 30px;
    height: 100%;
  }
  h5 {
  }

  display: flex;
  align-items: center;
`;
const Social = styled.div`
  padding: 12px 10px;
  border-top: 1px solid grey;

  display: flex;
  justify-content: space-between;

  ${below.med`
         
   `};

  a {
    text-align: center;
    padding: 10px;
    svg {
      width: 25px;
      height: 25px;
    }
    h5 {
      margin: 4px;
    }
  }
`;
