import { Button } from "reactstrap";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding: 0;
  margin: 0;

  top: 0.45rem;
  left: -0.49rem;

  width: 100.99999999999999%;
  height: 30rem;
  background: white;
`;

export const ContactContainer = styled.div`
  position: absolute;
  top: 21%;
  border-radius: 100%;
  width: 14rem;
  height: 14rem;
  left: 70rem;
  background: #8c52ff;
`;

export const ContactH = styled.h1`
  display: inline-block;
  top: 19.5rem;
  position: relative;
  color: black;
  left: 71.8rem;
  font-family: "Vollkorn SC";
  font-weight: normal;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MailButton = styled(Button)`
  position: absolute;
  top: 19rem;
  left: 20rem;
  width: 24rem;
  height: 3rem;
  background: border-box;

  cursor: pointer;

  border-color: #8c52ff;
  border-style: solid;
  &:hover {
    /* background: #8c52ff; */
    cursor: pointer;
  }
`;

export const Sabancı = styled.div`
    position:absolute ;
    font-size: 23px;
    left: 19.7rem;
    top: 9rem;
`;

export const Hot = styled.div`
    position:absolute ;
    position:absolute ;
    font-size: 23px;
    left: 19.7rem;
    top: 13.5rem;
`;