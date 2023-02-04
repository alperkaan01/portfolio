import React from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Education from '../Education/Education'
import Proj from '../Projects/Projects'
import Skills from '../Skills/Skills'
import Xp from '../Xp/Xp'


const Homepage = () => {
  return (
    <>
        <About></About>
        <Skills></Skills>
        <Education></Education>
        <Xp></Xp>
        <Proj></Proj>
        <Contact></Contact>
    </>
  )
}

export default Homepage