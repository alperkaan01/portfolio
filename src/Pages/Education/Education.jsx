import React from "react";
import {
  Container,
} from "../About/AboutElements";

import portfolioImage from "../../img/portfolio.png";
import VerticalLineWrapper from "../../Components/Timeline/VerticalWrapper";
import VerticalLineContent from "../../Components/Timeline/VerticalContent";
import { EducationHeader, EduContainer, Wrapper } from "./EducationElements";

import edu from "../../img/edu.png"

const Education = () => {
  return (
    <Container id='education'>
      {/* <h1>EDUCATION</h1> */}
      <EducationHeader>Education</EducationHeader> 
      <EduContainer></EduContainer>
      <img
        src={edu}
        alt="avatar"
        style={{
          position: "absolute",
          left: "4.9rem",
          top: "13.7rem",
          width: "13.6rem",
        }}
      ></img>
      <Wrapper>
        <VerticalLineWrapper>
          <VerticalLineContent position="left">
            <strong style={{ "font-size": "1.5rem" }}>
              Sabancı University
            </strong>
            <p
              style={{
                "font-size": "0.7rem",
                fontFamily: "Sans-serif",
                color: "grey",
              }}
            >
              <strong
                style={{
                  "font-size": "1rem",
                  fontFamily: "Sans-serif",
                  color: "grey",
                }}
              >
                3.95/4.00
              </strong>{" "}{" "}
              ● 2019 - Expected Jun 2024 ● Istanbul, Turkey
            </p>
            <p
              style={{
                fontFamily: "Sans-serif",
                color: "#555",
                "font-size": "1.2rem",
              }}
            >
              B.S in Computer Science and Engineering, Faculty of Engineering
              and Natural Sciences (Junior)
            </p>
            <p
              style={{
                "font-size": "1rem",
                "padding-left": "2rem",
                fontFamily: "Sans-serif",
                color: "#555",
              }}
            >
              {" "}
              <strong>Course Highlights:</strong> Advanced Programming with C++,
              Data Science, Mobile Application Development, Data Structures,
              Algorithms, Software Development, Database Systems, Computer
              Networks, Probability, Statistical Modelling, Discrete
              Mathematics, Introduction to Quantum Physics and Particle behavior
            </p>
          </VerticalLineContent>
          <VerticalLineContent position="right">
            <strong style={{ "font-size": "1.5rem" }}>
              Bahcesehir Antalya Anadolu HighSchool
            </strong>
            <p
              style={{
                "font-size": "0.7rem",
                fontFamily: "Sans-serif",
                color: "grey",
              }}
            >
              2015 - 2019 ● Antalya, Turkey
            </p>
          </VerticalLineContent>
        </VerticalLineWrapper>
      </Wrapper>
    </Container>
  );
};

export default Education;
