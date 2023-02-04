import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import { FaGithub, FaLinkedin, FaLinkedinIn, FaMoon } from "react-icons/fa";




export const Nav = styled.nav`
    position: relative;
    background: #A92C2C;
    background: transparent;
    height: 4rem;
    /* margin-top: -80px; */
    width: 96%;
    display: inline-block;
    justify-content:center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;


export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 5rem;
    z-index: 1;
    width: 100%;
    padding: 0 1.6rem;
    max-width: 100%;
`;

export const NavLogo = styled(LinkR)`
    color: black;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.4rem;
    font-family: 'Vollkorn SC';
    
    display: flex;
    align-items: center;
    margin-left: 5rem;
    margin-bottom: 1rem;

    text-decoration: none;
    &:hover {
        color: black;
    }
`;


export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        display: inline-block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 65%;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: rgba(0,0, 0,0.6);;
    }
`;


export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 20.5%; //33.5%
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 3rem;
`;

export const NavLinks = styled(LinkS)`
    color: black;

    font-family: 'Vollkorn SC';

    display: flex;
    align-items:center;
    text-decoration: none;
    padding:0 2rem;
    height: 70%;
    cursor: pointer;

    
    &:hover {
        color: black;
        border-bottom: 3px solid black;
    }
    &.active{
        border-bottom: 3px solid red;
    }
`;


export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const GithubLink = styled( FaGithub )`
    position: absolute;
    top:6px;
    right: 7rem;
    width: 3rem;
    height: 3rem;
    font-size: 1rem;
    outline: none;
    border: none;
    border-radius: 100%;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`

export const LinkedInLink = styled( FaLinkedin )`
    position: absolute;
    background: #378fe9;;
    color: white;
    top:6px;
    right: 2rem;
    width: 3rem;
    height: 3rem;
    font-size: 1rem;
    outline: none;
    border: none;

    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

`
