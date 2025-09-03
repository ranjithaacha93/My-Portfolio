import { useState } from "react";
import './App.css'

import Nav from './NavBar/Nav'
import Home from './page/Home/Home'
import About from './page/About/About'
import Skill from './page/Skill/Skill'
import Project from './page/Project/Project'
import Contact from './page/Contact/Contact'

function App() {

  const [Show,setShow] = useState(false)

  return (
    <>
      <Nav show={Show} setshow={setShow}/>
      <Home/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
    </>
  )
}

export default App
