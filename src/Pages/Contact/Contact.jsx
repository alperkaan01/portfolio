import React from "react";
import { ContactContainer, ContactH, Container, Hot, MailButton, Sabancı } from "./ContactElements";
import contact from "../../img/contact.png";

import { FaRegEnvelope } from "react-icons/fa";

const Contact = () => {
  const sendEmail = () => {
    window.open("mailto:kaanalper@sabanciuniv.edu?subject=Mail From Portfolio&body=Description");
  };

  return (
    <Container id="contact-me">
      <ContactH>Get in Touch</ContactH>
      <ContactContainer></ContactContainer>
      <img
        src={contact}
        alt="avatar"
        style={{
          position: "absolute",
          left: "71.3rem",
          top: "7.5rem",
          width: "11rem",
        }}
      ></img>
      <Sabancı><FaRegEnvelope></FaRegEnvelope> &emsp; kaanalper@sabanciuniv.edu</Sabancı>
      <Hot><FaRegEnvelope></FaRegEnvelope> &emsp; alperodabasoglu2001@hotmail.com</Hot>
      <MailButton
        onClick={sendEmail}
      >Email Me</MailButton>
    </Container>
  );
};

export default Contact;
