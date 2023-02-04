import React from "react";
import VerticalLineContent from "../../Components/Timeline/VerticalContent";
import VerticalLineWrapper from "../../Components/Timeline/VerticalWrapper";
import {
  Container,
  IconLink,
  ProjContainer,
  ProjHeader,
  Wrapper,
} from "./ProjectsElements";
import { FaGithub } from "react-icons/fa";
import proj from "../../img/proj.png";

const Projects = () => {
  return (
    <Container id='projects'>
      {/* <h1>EDUCATION</h1> */}
      <ProjHeader>Projects</ProjHeader>
      <ProjContainer></ProjContainer>
      <img
        src={proj}
        alt="avatar"
        style={{
          position: "absolute",
          left: "6.5rem",
          top: "13.7rem",
          width: "11rem",
        }}
      ></img>
      <Wrapper>
        <VerticalLineWrapper>
          <VerticalLineContent position="left">
            <strong style={{ "font-size": "1.5rem" }}>
              Agile Full Stack Software Development Project{" "}
              <IconLink>
                {" "}
                <a
                  href="https://github.com/SU-CS308-22FA/Team28---Make-Football-Great-Again---MFGA"
                  target="_blank"
                >
                  <FaGithub style={{ color: "black", size: "lg" }}></FaGithub>
                </a>
              </IconLink>{" "}
            </strong>
            <p
              style={{
                "font-size": "0.7rem",
                fontFamily: "Sans-serif",
                color: "grey",
              }}
            >
              October 2022-Dec 2023
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
              ● Develop a full stack web application using MERN for Turkish
              Football Federation.{" "}
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
              ● Understood the concepts of agile software development, SCRUM,
              sprint handling, project management, version control and
              deployment{" "}
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
              ● Enhanced the team work skills by leading the team
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
              ● Done automated testing with Selenium and API documentation with
              Swagger.{" "}
            </p>
          </VerticalLineContent>
          <VerticalLineContent position="left">
            <strong style={{ "font-size": "1.5rem" }}>
                Database System Term Project{" "}
              <IconLink>
                {" "}
                <a
                  href="https://github.com/alperkaan01/CS306-Database-System-Project"
                  target="_blank"
                >
                  <FaGithub style={{ color: "black", size: "lg" }}></FaGithub>
                </a>
              </IconLink>{" "}
            </strong>
            <p
              style={{
                "font-size": "0.7rem",
                fontFamily: "Sans-serif",
                color: "grey",
              }}
            >
              October 2022-Dec 2023
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
              ● Generated an Olympics database using SQL, HTML, CSS and PHP.{" "}
            </p>
          </VerticalLineContent>
          {/* <VerticalLineContent position="left"> 
            <strong style={{ "font-size": "1.5rem" }}>
              Computer Networks Course Client-Server Application Project{" "}
              <IconLink>
                {" "}
                <a
                  href="https://github.com/yaseminozkut/Client-Server-Multiplayer-Quiz-Game-Socket-Programming.git"
                  target="_blank"
                >
                  <FaGithub style={{ color: "black", size: "lg" }}></FaGithub>
                </a>
              </IconLink>
            </strong>
            <p
              style={{
                "font-size": "0.7rem",
                fontFamily: "Sans-serif",
                color: "grey",
              }}
            >
              October 2022-Dec 2023
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
              ● Implemented client-server multiple player simple quiz game GUI
              application using C# and TCP sockets.{" "}
            </p>
          </VerticalLineContent> */}
          <VerticalLineContent position="left">
            <strong style={{ "font-size": "1.5rem" }}>
            Unity Hyper Casual Mobile Game{" "}
              <IconLink>
                {" "}
                <a
                  href="https://github.com/alperkaan01/2D-MobileGame-BallFall"
                  target="_blank"
                >
                  <FaGithub style={{ color: "black", size: "lg" }}></FaGithub>
                </a>
              </IconLink>{" "}
            </strong>
            <p
              style={{
                "font-size": "0.7rem",
                fontFamily: "Sans-serif",
                color: "grey",
              }}
            >
              October 2022-Nov 2022
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
              ● Implemented an endless runner type hyper casual game with Unity-C#.{" "}
            </p>
          </VerticalLineContent>
          <VerticalLineContent position="left">
            <strong style={{ "font-size": "1.5rem" }}>
              Mobile Programming Course Social Media App Term Project{" "}
              <IconLink>
                {" "}
                <a
                  href="https://github.com/alperkaan01/CS310-Meta-Social-Media-Group27"
                  target="_blank"
                >
                  <FaGithub style={{ color: "black", size: "lg" }}></FaGithub>
                </a>
              </IconLink>
            </strong>
            <p
              style={{
                "font-size": "0.7rem",
                fontFamily: "Sans-serif",
                color: "grey",
              }}
            >
              February 2022-June 2022
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
              ● Implemented a Social Media Application with Flutter.{" "}
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
              ● Understood the logic behind validation checks, toggling actions and Firebase{" "}
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
              ●  Created a well-designed social media interface with Flutter and link it to Firebase 
servers{" "}
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
              ● Enhanced the team-work skills.{" "}
            </p>
          </VerticalLineContent>
          <VerticalLineContent position="left">
            <strong style={{ "font-size": "1.5rem" }}>
              Data Science Course Term Project, Sabancı University{" "}
              <IconLink>
                {" "}
                <a
                  href="https://github.com/alperkaan01/CS210-DataAnalysis-ML/blob/main/CS210_Spring2021_Report_Template_Step1_ipynb_adl%C4%B1_not_defterinin_kopyas%C4%B1.ipynb"
                  target="_blank"
                >
                  <FaGithub style={{ color: "black", size: "lg" }}></FaGithub>
                </a>
              </IconLink>
            </strong>
            <p
              style={{
                "font-size": "0.7rem",
                fontFamily: "Sans-serif",
                color: "grey",
              }}
            >
              Feb 2022-June 2022
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
              ● Enhanced the skills about exploratory data analysis, hypothesis testing and ML
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
              ● Predict the Bitcoin price with KNN, linear regression and logistic regression{" "}
            </p>
          </VerticalLineContent>
        </VerticalLineWrapper>
      </Wrapper>
    </Container>
  );
};

export default Projects;
