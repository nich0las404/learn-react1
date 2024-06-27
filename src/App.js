import './button.css';
import React from "react";
import ReactLogo from "./LogoReact"
import { useNavigate } from 'react-router-dom';
import ContactWebPage from './Contact';
function App() {
  const navigate = useNavigate();
  const clickFunc = () => {
    navigate("/card")
  }


  return (
    <div class="main-body">
      <div id="home" class="main-home">
      <div class="nav-bar">< ReactLogo/></div>

      <div class="main-page">
      <h2 class="title"><span>"The future belongs to those who believe in the beauty of their dreams."</span></h2>

          <button class="btn" onClick={clickFunc}>
            <div class="btn__bg">
              <span class="btn__bg__layer btn__bg__layer-first"></span>
              <span class="btn__bg__layer btn__bg__layer-second"></span>
              <span class="btn__bg__layer btn__bg__layer-third"></span>
            </div>
          <span class="btn__text-out">Get in touch</span>
          <span class="btn__text-in">Get in touch</span>
          </button>
        
      </div>
    </div>

      <div id="about" class="main-about">
        <div class="curvy-background">
        </div>
        <div id="about" class="content">
            <h1 class="about-title">HELLO,</h1>
            <div class="about-img-container"></div>
            <div class="about-p-container">
              <p class="about-p">
              My name is Nicholas! I made this website because I believe that Coding is a crucial skill for the future, driving problem-solving and innovation. With technology advancing rapidly, coding skills are in high demand across all industries, from healthcare to finance.
              </p>
              <p class="about-p">
              Learning to code opens up numerous career opportunities, offering high salaries and job security. It also fosters digital literacy, essential in today’s world. Understanding how technology works empowers individuals to navigate and thrive in an increasingly automated society.
              </p>
              <p class="about-p">
              In essence, coding is not just for tech professionals; it's a vital skill for everyone. It equips people to innovate, solve problems, and stay relevant in a tech-driven world. That is why, we built this website, to guide those who are lost and confused on what to do. Enhance your skills now by building your portfolio!
              </p>
            </div>
          </div>
      </div>

      <div class="main-contact">
        <ContactWebPage/>
      </div>
    </div>
  );
}

export default App;
