import { Button } from "reactstrap";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding: 0;
  margin: 0;

  top: 0;
  left: 0;

  width: 100%;
  height: 46rem;
  background: white;
`;

export const InnerStyleContainer = styled.div`
  position: absolute;
  top: 14%;
  border-radius: 100%;
  width: 16rem;
  height: 35%;
  left: 52rem;
  background: #8c52ff;
`;

export const InnerStyleContainerSocial = styled.div`
  position: absolute;
  width: 28rem;
  height: 20rem;
  left: 20.5rem;
  background: white;
  top: 7%;
  background: transparent;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const InnerTitle = styled.h1`
  position: fixed;
  display: inline-block;
  top: 29%;
  left: 10%;
  font-family: cursive, fantasy;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const InnerTitleInfo = styled.h1`
  display: inline-block;
  top: 3rem;
  position: relative;
  left: 2.5rem;
  font-family: "Vollkorn SC";
  font-weight: normal;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const TypicalText = styled.h3`
  display: inline-block;
  top: 3rem;
  position: relative;
  left: 2.5rem;
  font-family: "Vollkorn SC";
  font-weight: normal;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const InfoSectionContainer = styled.div`
  position: absolute;
  top: 47%;
  left: 25%;
  width: 16rem;
  height: 4rem;
  background: transparent;
  border-color: black;
  border: groove;
  border-width: 0.2px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;


export const PortfolioMainImage = styled.img`
  position: fixed;
  width: 10rem;
  right: 17%;
  top: 16%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const PortfolioMainImageMobile = styled.img`
  display: none;

  @media screen and (max-width: 768px) {
    position: fixed;
    display: inline-block;
    width: 10rem;
    left: 35%;
    top: 16%;
  }
`;

export const CImage = styled.img`
  position: fixed;
  width: 3.8rem;
  height: 4rem;

  top: 24%;
  left: 40.5%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const PyImage = styled.img`
  position: fixed;
  width: 3.8rem;
  height: 4rem;

  top: 24%;
  left: 48.5%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const JsImage = styled.img`
  position: fixed;
  width: 3.8rem;
  height: 4rem;

  top: 24%;
  left: 56.5%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const CppCodeSample = styled.h4`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const DownloadX = styled(Button)`
  color: black;

  position: absolute;
  font-family: "Vollkorn SC";

  background-color: white;

  top: 1.2rem;
  left: 0.8rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  cursor: pointer;

  border-style: none;
  border: none;

  &:hover {
    color: black;
    border-bottom: 2px solid black;
  }
`;
