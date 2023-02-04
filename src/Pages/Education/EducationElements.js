import styled from "styled-components";

export const Wrapper = styled.div`

    position : absolute;
    top: 7rem;
    width: 50rem;
    right: 2rem;
`

export const EduContainer = styled.div`
  position: absolute;
  top: 27.5%;
  border-radius: 100%;
  width: 14rem;
  height: 14rem;
  left: 5rem;
  background: #8c52ff;
`;

export const EducationHeader = styled.h1`
    display: inline-block;
    top: 27.3rem;
    position: relative;
    left: 8rem;
    font-family: "Vollkorn SC";
    font-weight: normal;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
