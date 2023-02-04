import React from "react";
import { Container } from "../About/AboutElements";

import ProgressBar from "react-animated-progress-bar";
import {
  CompContainer,
  Cpp,
  Cs,
  Css,
  Flutter,
  Git,
  Html,
  Js,
  Mongo,
  Node,
  ProgressCpp,
  ProgressCs,
  ProgressCss,
  ProgressFlutter,
  ProgressGit,
  ProgressHtml,
  ProgressJs,
  ProgressMongo,
  ProgressNode,
  ProgressPy,
  ProgressReact,
  ProgressSql,
  ProgressUnity,
  Py,
  Reac,
  Skill,
  SQL,
  Unity,
} from "./SkillsElements";

import comp from "../../img/comp.png";
import cpp from "../../img/cpp.png";
import py from "../../img/python.png";
import csharp from "../../img/csharp.png";
import js from "../../img/js.png";
import html from "../../img/html.png";
import css from "../../img/css.png";
import react from "../../img/react.png";
import unity from "../../img/unity.png";
import git from "../../img/git.png";
import mongo from "../../img/mongo.png";
import sql from "../../img/sql.png";
import node from "../../img/node.png";
import flutter from "../../img/flutter.png";

const Skills = () => {
  const myRef = document.querySelector(".scrollable-div");

  return (
    <Container id='skills'>
      <Skill>SKILLS</Skill>
      <CompContainer></CompContainer>
      {/* <ProgressBar width="170" trackWidth="13" percentage="75" />
      <ProgressBar
        width="400px"
        height="10px"
        rect
        fontColor="gray"
        percentage="70"
        rectPadding="1px"
        rectBorderRadius="20px"
        trackPathColor="transparent"
        bgColor="#333333"
        trackBorderColor="grey"
      />
      <ProgressBar
        width="500px"
        height="10px"
        fontColor="white"
        trackWidth="10"
        percentage="40"
        trackPathColor="grey"
        trackBorderColor="black"
        hollowBackgroundColor="#333333"
        defColor={{
          fair: "orangered",
          good: "yellow",
          excellent: "green",
          poor: "red",
        }}
        scrollArea={myRef}
      /> */}

      <img
        src={comp}
        alt="avatar"
        style={{
          position: "absolute",
          left: "72.5rem",
          top: "14.7rem",
          width: "11rem",
        }}
      ></img>
      <Py
        src={py}
        alt="avatar"
        style={{
          position: "absolute",
          left: "3.5rem",
          top: "5rem",
          width: "4rem",
        }}
      ></Py>
      <ProgressPy>
        <ProgressBar
          width="200px"
          height="10px"
          rect
          fontColor="gray"
          percentage="89"
          rectPadding="1px"
          rectBorderRadius="20px"
          trackPathColor="#494f56"
          bgColor="#333333"
          trackBorderColor="grey"
          defColor={{
            fair: "orangered",
            good: "yellow",
            excellent: "#8c52ff",
            poor: "red",
          }}
        />
      </ProgressPy>
      <Cpp
        src={cpp}
        alt="avatar"
        style={{
          position: "absolute",
          left: "3.5rem",
          top: "12rem",
          width: "4rem",
        }}
      ></Cpp>
      <ProgressCpp>
        <ProgressBar
          width="200px"
          height="10px"
          rect
          fontColor="gray"
          percentage="92"
          rectPadding="1px"
          rectBorderRadius="20px"
          trackPathColor="#494f56"
          bgColor="#333333"
          trackBorderColor="grey"
          defColor={{
            fair: "orangered",
            good: "yellow",
            excellent: "#8c52ff",
            poor: "red",
          }}
        />
      </ProgressCpp>
      <Cs
        src={csharp}
        alt="avatar"
        style={{
          position: "absolute",
          left: "0.8rem",
          top: "18.2rem",
          width: "10rem",
        }}
      ></Cs>
      <ProgressCs>
        <ProgressBar
          width="200px"
          height="10px"
          rect
          fontColor="gray"
          percentage="75"
          rectPadding="1px"
          rectBorderRadius="20px"
          trackPathColor="#494f56"
          bgColor="#333333"
          trackBorderColor="grey"
          defColor={{
            fair: "orangered",
            good: "yellow",
            excellent: "#8c52ff",
            poor: "red",
          }}
        />
      </ProgressCs>
      <Js
        src={js}
        alt="avatar"
        style={{
          position: "absolute",
          left: "3.5rem",
          top: "26rem",
          width: "4rem",
        }}
      ></Js>
      <ProgressJs>
        <ProgressBar
          width="200px"
          height="10px"
          rect
          fontColor="gray"
          percentage="75"
          rectPadding="1px"
          rectBorderRadius="20px"
          trackPathColor="#494f56"
          bgColor="#333333"
          trackBorderColor="grey"
          defColor={{
            fair: "orangered",
            good: "yellow",
            excellent: "#8c52ff",
            poor: "red",
          }}
        />
      </ProgressJs>
      <Html
        src={html}
        alt="avatar"
        style={{
          position: "absolute",
          left: "3.5rem",
          top: "33rem",
          width: "4rem",
        }}
      ></Html>
      <ProgressHtml>
        <ProgressBar
          width="200px"
          height="10px"
          rect
          fontColor="gray"
          percentage="70"
          rectPadding="1px"
          rectBorderRadius="20px"
          trackPathColor="#494f56"
          bgColor="#333333"
          trackBorderColor="grey"
          defColor={{
            fair: "orangered",
            good: "yellow",
            excellent: "#8c52ff",
            poor: "red",
          }}
        />
      </ProgressHtml>
      <Css
        src={css}
        style={{
          position: "absolute",
          left: "25rem",
          top: "4rem",
          width: "4rem",
        }}
      ></Css>
      <ProgressCss>
        <ProgressBar
          width="200px"
          height="10px"
          rect
          fontColor="gray"
          percentage="73"
          rectPadding="1px"
          rectBorderRadius="20px"
          trackPathColor="#494f56"
          bgColor="#333333"
          trackBorderColor="grey"
          defColor={{
            fair: "orangered",
            good: "yellow",
            excellent: "#8c52ff",
            poor: "red",
          }}
        />
      </ProgressCss>
      <Reac
        src={react}
        style={{
          position: "absolute",
          left: "25rem",
          top: "12rem",
          width: "4rem",
        }}
      ></Reac>
      <ProgressReact>
        <ProgressBar
          width="200px"
          height="10px"
          rect
          fontColor="gray"
          percentage="90"
          rectPadding="1px"
          rectBorderRadius="20px"
          trackPathColor="#494f56"
          bgColor="#333333"
          trackBorderColor="grey"
          defColor={{
            fair: "orangered",
            good: "yellow",
            excellent: "#8c52ff",
            poor: "red",
          }}
        />
      </ProgressReact>
      <Unity
        src={unity}
        style={{
          position: "absolute",
          left: "25rem",
          top: "18.7rem",
          width: "4rem",
        }}
      ></Unity>
      <ProgressUnity>
        <ProgressBar
          width="200px"
          height="10px"
          rect
          fontColor="gray"
          percentage="63"
          rectPadding="1px"
          rectBorderRadius="20px"
          trackPathColor="#494f56"
          bgColor="#333333"
          trackBorderColor="grey"
          defColor={{
            fair: "orangered",
            good: "#bb77ff",
            excellent: "#8c52ff",
            poor: "red",
          }}
        />
      </ProgressUnity>
      <Git
        src={git}
        style={{
          position: "absolute",
          left: "25rem",
          top: "27rem",
          width: "4rem",
        }}
      ></Git>
      <ProgressGit>
        <ProgressBar
          width="200px"
          height="10px"
          rect
          fontColor="gray"
          percentage="80"
          rectPadding="1px"
          rectBorderRadius="20px"
          trackPathColor="#494f56"
          bgColor="#333333"
          trackBorderColor="grey"
          defColor={{
            fair: "orangered",
            good: "yellow",
            excellent: "#8c52ff",
            poor: "red",
          }}
        />
      </ProgressGit>
      <Mongo
        src={mongo}
        style={{
          position: "absolute",
          left: "25.9rem",
          top: "34rem",
          width: "2.5rem",
        }}
      ></Mongo>
      <ProgressMongo>
        <ProgressBar
          width="200px"
          height="10px"
          rect
          fontColor="gray"
          percentage="80"
          rectPadding="1px"
          rectBorderRadius="20px"
          trackPathColor="#494f56"
          bgColor="#333333"
          trackBorderColor="grey"
          defColor={{
            fair: "orangered",
            good: "yellow",
            excellent: "#8c52ff",
            poor: "red",
          }}
        />
      </ProgressMongo>
      <SQL
        src={sql}
        style={{
          position: "absolute",
          left: "46.5rem",
          top: "4.3rem",
          width: "5rem",
        }}
      ></SQL>
      <ProgressSql>
        <ProgressBar
          width="200px"
          height="10px"
          rect
          fontColor="gray"
          percentage="72"
          rectPadding="1px"
          rectBorderRadius="20px"
          trackPathColor="#494f56"
          bgColor="#333333"
          trackBorderColor="grey"
          defColor={{
            fair: "orangered",
            good: "yellow",
            excellent: "#8c52ff",
            poor: "red",
          }}
        />
      </ProgressSql>
      <Node
        src={node}
        style={{
          position: "absolute",
          left: "46.5rem",
          top: "12rem",
          width: "4rem",
        }}
      ></Node>
      <ProgressNode>
        <ProgressBar
          width="200px"
          height="10px"
          rect
          fontColor="gray"
          percentage="80"
          rectPadding="1px"
          rectBorderRadius="20px"
          trackPathColor="#494f56"
          bgColor="#333333"
          trackBorderColor="grey"
          defColor={{
            fair: "orangered",
            good: "yellow",
            excellent: "#8c52ff",
            poor: "red",
          }}
        />
      </ProgressNode>
      <Flutter
        src={flutter}
        style={{
          position: "absolute",
          left: "46.8rem",
          top: "19rem",
          width: "3rem",
        }}
      ></Flutter>
      <ProgressFlutter>
        <ProgressBar
          width="200px"
          height="10px"
          rect
          fontColor="gray"
          percentage="65"
          rectPadding="1px"
          rectBorderRadius="20px"
          trackPathColor="#494f56"
          bgColor="#333333"
          trackBorderColor="grey"
          defColor={{
            fair: "orangered",
            good: "#bb77ff",
            excellent: "#8c52ff",
            poor: "red",
          }}
        />
      </ProgressFlutter>
    </Container>
  );
};

export default Skills;
