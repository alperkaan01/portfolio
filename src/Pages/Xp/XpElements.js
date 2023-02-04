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

export const Wrapper = styled.div`
  position: absolute;
  top: 7rem;
  width: 50rem;
  left: 10rem;
`;

export const EduContainer = styled.div`
  position: absolute;
  top: 24%;
  border-radius: 100%;
  width: 14rem;
  height: 14rem;
  left: 70rem;
  background: #8c52ff;
`;

export const Education = styled.h1`
  display: inline-block;
  top: 24.5rem;
  position: relative;
  left: 72.5rem;
  font-family: "Vollkorn SC";
  font-weight: normal;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
