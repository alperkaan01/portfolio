import React from "react";
import {FaBars, FaGithub, FaLinkedin} from 'react-icons/fa'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  GithubLink,
  LinkedInLink,

} from "./NavbarElements";

import tl from "../../../img/tl.png";

import { animateScroll as scroll} from 'react-scroll'

export const Navbar = () => {

  const toggleHome = () =>{
    scroll.scrollToTop()
  }


  return (
    <>
      <Nav>
        <NavbarContainer>
          <img
            src={tl}
            alt="avatar"
            style={{
              position: "absolute",
              left: "40px",
              top: "20px",
              width: "2rem",
            }}
          ></img>
          <NavLogo to="/" onClick={toggleHome}>ALPER KAAN</NavLogo>
          <NavMenu>
            <NavItem>
              <NavLinks to = 'skills' smooth={true} duration={500} spy={true} exact='true' offset={-60}>Skills</NavLinks>
            </NavItem>
            {/* <NavItem>
              <NavLinks to = 'prof' smooth={true} duration={500} spy={true} exact='true' offset={-60}>Prof.</NavLinks>
            </NavItem> */}
            <NavItem>
              <NavLinks to = 'education' smooth={true} duration={500} spy={true} exact='true' offset={-60}>Education</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to = 'experience' smooth={true} duration={500} spy={true} exact='true' offset={-60}>Experience</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to = 'projects' smooth={true} duration={500} spy={true} exact='true' offset={-60}>Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to = 'contact-me' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact</NavLinks>
            </NavItem>
          </NavMenu>
          <GithubLink onClick={ () => window.location.href = "https://github.com/alperkaan01"}></GithubLink>
          <LinkedInLink onClick={ () => window.location.href = "https://www.linkedin.com/in/alperkaanodabasoglu/"}></LinkedInLink>
        </NavbarContainer>
      </Nav>
    </>
  );
};
