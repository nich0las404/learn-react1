import React from "react";
import "./contact.css"

function ContactWebPage(){
    return (
        <div class="contact-page">
            <div id="contact" class="contact-body">
                <h1 class="contact-title-text">Have Questions? Contact us through our Socials!</h1>
                <p class="contact-title-sub-text">We Accept Ideas and Feedback from our users & Community!</p>
                    <div class="socials">
                    <ul class="socials-lists">
                        <li class="social-li"><a><i class="fa-solid fa-envelope icon"></i></a></li>
                        <li class="social-li"><a><i class="fa-brands fa-instagram icon"></i></a></li>
                        <li class="social-li"><a><i class="fa-brands fa-linkedin icon"></i></a></li>
                    </ul>
                    </div>
            </div>
            <div class="footer">
                <div class="footer-trademark">
                    <p>Article made By The HG Association©</p>
                </div>
            </div>
        </div>
    );
}

export default ContactWebPage;