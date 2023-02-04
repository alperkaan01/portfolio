import React from "react";
import VerticalLineContent from "../../Components/Timeline/VerticalContent";
import VerticalLineWrapper from "../../Components/Timeline/VerticalWrapper";
import { Container, Education, EduContainer, Wrapper } from "./XpElements";

import exp from  "../../img/exp.png"

const Xp = () => {
  return (
    <Container id='experience'>
      {/* <h1>EDUCATION</h1> */}
      <Education>Experience</Education>
      <EduContainer></EduContainer>
      <img
        src={exp}
        alt="avatar"
        style={{
          position: "absolute",
          left: "71.3rem",
          top: "12.5rem",
          width: "11rem",
        }}
      ></img>
      <Wrapper>
        <VerticalLineWrapper>
          <VerticalLineContent position="left">
            <strong style={{ "font-size": "1.5rem" }}>
              Softalya Software Inc.
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
                Agile Software Development Intern
              </strong>{" "}
              ● 2021 ● Antalya, Turkey
            </p>
            <p
              style={{
                fontFamily: "Sans-serif",
                color: "#555",
                "font-size": "1.2rem",
              }}
            >
              • Gained knowledge about HTML, CSS, JavaScript and React.js and
              implemented our knowledge by designing mini projects.
            </p>
            <p
              style={{
                fontFamily: "Sans-serif",
                color: "#555",
                "font-size": "1.2rem",
              }}
            > 
            • Worked on Front-end web development and designed a log-in page as
              well as a part of dashboard • Accustomed to the project
              environment and team work
            </p>
            <p
              style={{
                fontFamily: "Sans-serif",
                color: "#555",
                "font-size": "1.2rem",
              }}
            >
             • Accustomed to the project
              environment and team work
            </p>
          </VerticalLineContent>
        </VerticalLineWrapper>
      </Wrapper>
    </Container>
  );
};

export default Xp;
