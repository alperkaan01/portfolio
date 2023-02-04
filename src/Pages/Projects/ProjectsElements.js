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

  margin-bottom: 40rem;
`;

export const Wrapper = styled.div`

    position : absolute;
    top: 0rem;
    width: 50rem;
    right: 2rem;
`

export const ProjContainer = styled.div`
  position: absolute;
  top: 27.5%;
  border-radius: 100%;
  width: 14rem;
  height: 14rem;
  left: 5rem;
  background: #8c52ff;
`;

export const ProjHeader = styled.h1`
    display: inline-block;
    top: 27.3rem;
    position: relative;
    left: 8.6rem;
    font-family: "Vollkorn SC";
    font-weight: normal;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const IconLink = styled.div`
  position: relative;
  height:2rem;
  width: 2rem;
  text-decoration: none;
  font-size: 30px;
  &:hover{

      transform: translateY(-2px)

  }
`