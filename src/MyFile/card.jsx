import React from "react";
import "./card.css"
import { useNavigate } from 'react-router-dom';

function Card(){
    const nav = useNavigate();
    const HomeBtn = () => {
        nav("/")
    }
    return(
    <div class="main-card">
        <div class="card-header-container">
            <div class="card-header">
                <h1>Here are some of the Greatest Curriculum that provides the best Education and Career Path for up & coming Engineers!</h1>

                <p>Come help us by adding more Projects / Curriculum in our <a href="#">Open Source code</a>!</p>
                <div class="gif-card-background">
                    
                </div>
            </div>
        </div>
        <div class="cards-container">
            
            <div class="card">
                <div class="upper-card">
                    <div class="card-img freecodecamp"></div>
                    <p class="card-desc">FreeCodeCamp empowers you with hands-on projects and real-world coding challenges, fostering practical skills and confidence in web development. Its community-driven approach ensures support and continuous learning, making coding accessible to everyone</p>
                </div>
                <div class="middle-card">
                    <p class="card-website-name"><a class="website-link" href="https://www.freecodecamp.org/">www.freecodecamp.org</a></p>
                    <h2 class="card-company-title">FreeCodeCamp</h2>
                </div>
                <div class="bottom-card">
                    <div class="type-holder html-type">
                        <p>HTML</p>
                    </div>
                    <div class="type-holder css-type">
                        <p>CSS</p>
                    </div>
                    <div class="type-holder js-type">
                        <p>JavaScript</p>
                    </div>
                </div>
            </div>
            
            <div class="card">
                <div class="upper-card">
                    <div class="card-img odin-project"></div>
                    <p class="card-desc">
                    The Odin Project offers a comprehensive, community-driven curriculum that builds full-stack development expertise through immersive, project-based learning. It equips you with the skills to tackle real-world problems and excel in the tech industry
                    </p>
                </div>
                <div class="middle-card">
                    <p class="card-website-name"><a class="website-link" href="https://www.theodinproject.com/">www.theodinproject.com</a></p>
                    <h2 class="card-company-title">The Odin Project</h2>
                </div>
                <div class="bottom-card">
                    <div class="type-holder js-type">
                        <p>JavaScript</p>
                    </div>
                    <div class="type-holder nodejs-type">
                        <p>NodeJS</p>
                    </div>
                    <div class="type-holder react-type">
                        <p>React</p>
                    </div>
                    <div class="type-holder ruby-type">
                        <p>Ruby</p>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="upper-card">
                    <div class="card-img cs-50"></div>
                    <p class="card-desc">
                    Harvard's renowned CS50 course blends rigorous academic content with engaging problem sets and lectures. It transforms beginners into proficient programmers, providing a strong foundation in computer science and fostering analytical thinking and problem-solving skills.
                    </p>
                </div>
                <div class="middle-card">
                    <p class="card-website-name"><a class="website-link" href="https://www.edx.org/cs50">www.edx.org/cs50</a></p>
                    <h2 class="card-company-title"> Harvard CS50</h2>
                </div>
                <div class="bottom-card">
                <div class="type-holder php-type">
                        <p>PHP</p>
                    </div>
                    <div class="type-holder python-type">
                        <p>Python</p>
                    </div>
                    <div class="type-holder scratch-type">
                        <p>Scratch</p>
                    </div>
                    <div class="type-holder mysql-type">
                        <p>mySQL</p>
                    </div>
                    <div class="type-holder js-type">
                        <p>JavaScript</p>
                    </div>

                </div>
            </div>
            <div class="card">
                <div class="upper-card">
                    <div class="card-img codecademy"></div>
                    <p class="card-desc">
                    Codecademy is an interactive, user-friendly platform that demystifies coding through step-by-step lessons, real-time feedback, and engaging projects. Its structured curriculum and practical exercises make learning to code accessible and enjoyable.
                    </p>
                </div>
                <div class="middle-card">
                    <p class="card-website-name"><a class="website-link" href="https://www.codecademy.com/">www.codecademy.com</a></p>
                    <h2 class="card-company-title">Codecademy</h2>
                </div>
                <div class="bottom-card">
                <div class="type-holder mysql-type">
                        <p>mySQL</p>
                    </div>
                    <div class="type-holder html-type">
                        <p>HTML</p>
                    </div>
                    <div class="type-holder css-type">
                        <p>CSS</p>
                    </div>
                    <div class="type-holder python-type">
                        <p>Pyhton</p>
                    </div>
                    <div class="type-holder cplus-type">
                        <p>C++</p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="upper-card">
                    <div class="card-img udemy"></div>
                    <p class="card-desc">
                    Udemy transforms beginners into proficient developers through a structured, intensive curriculum. Emphasizing practical applications and career readiness, it offers a vast array of courses that cater to diverse learning needs and goals
                    </p>
                </div>
                <div class="middle-card">
                    <p class="card-website-name"><a class="website-link" href="https://www.udemy.com/?utm_source=adwords-brand&utm_medium=udemyads&utm_campaign=Brand-Udemy_la.ID_cc.ID&campaigntype=Search&portfolio=BrandDirect&language=ID&product=Course&test=&audience=Keyword&topic=&priority=&utm_content=deal4584&utm_term=_._ag_112265177676_._ad_475719959740_._kw_udemy_._de_c_._dm__._pl__._ti_kwd-296956216253_._li_9120415_._pd__._&matchtype=b&gad_source=1&gclid=CjwKCAjw1emzBhB8EiwAHwZZxRKjXwvnfxlU2TaELhIM_M8YlwSGhuzPyudSlBnknoH39V9JzYG_7RoChR8QAvD_BwE">www.udemy.com</a></p>
                    <h2 class="card-company-title">Udemy</h2>
                </div>
                <div class="bottom-card">
                    <div class="type-holder python-type">
                        <p>Python</p>
                    </div>
                    <div class="type-holder js-type">
                        <p>JavaScript</p>
                    </div>
                    <div class="type-holder web3-type">
                        <p>Web3</p>
                    </div>
                    <div class="type-holder react-type">
                        <p>React</p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="upper-card">
                    <div class="card-img solo-learn"></div>
                    <p class="card-desc">
                    SoloLearn makes learning to code accessible and fun with bite-sized lessons and a mobile-friendly platform. Its supportive community and gamified experience foster continuous learning and skill development, perfect for on-the-go learners
                    </p>
                </div>
                <div class="middle-card">
                    <p class="card-website-name"><a class="website-link" href="https://www.sololearn.com/">www.sololearn.com</a></p>
                    <h2 class="card-company-title">SoloLearn</h2>
                </div>
                <div class="bottom-card">
                    <div class="type-holder java-type">
                        <p>Java</p>
                    </div>
                    <div class="type-holder kotlin-type">
                        <p>Kotlin</p>
                    </div>
                    <div class="type-holder typescript-type">
                        <p>TypeScript</p>
                    </div>
                    <div class="type-holder cplus-type">
                        <p>C++</p>
                    </div>
                    <div class="type-holder ruby-type">
                        <p>Ruby</p>
                    </div>
                    <div class="type-holder c-type">
                        <p>C</p>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="home-btn-container">
        <button type="button" class="Button-home-footer-card" onClick={HomeBtn}>
      <span data-text="My work"> Back Home </span>
    </button>
        
        </div>
        <div class="card-footer">   
         <p>Article made By The HG Association©</p>
        </div>
    </div>
    );
}

export default Card;