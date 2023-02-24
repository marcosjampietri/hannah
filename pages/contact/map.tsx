import styled from "styled-components";

const Map = () => {
  return (
    <Google>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.47339537914!2d-0.24168008794952453!3d51.52855824298109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon!5e0!3m2!1sen!2suk!4v1675792507136!5m2!1sen!2suk"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </Google>
  );
};

export default Map;

const Google = styled.div`
  width: 100vw;
  height: 500px;
  margin: 0px auto;

  iframe {
    width: 100%;
    height: 100%;
  }
`;
