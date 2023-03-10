import React from "react";
import ProfilePic from "../assets/Sevvy.jpg"
import "../App.css"

export default function Header() {
    return  (
        <header className="card--header">
            <div className="image--container">
                <img src={ProfilePic} alt="Sewak Singh's Profile Image" className="image--profile" />
            </div>
            <div className="user--profile">
                <h1 className="user--name">Sewak Singh</h1>
                <h4 className="user--role">Frontend Developer</h4>
                <a href="https://webcodersevvy.netlify.app/" target={"_blank"} className="user--website">
                    <i class="fa-solid fa-globe"></i>
                    <span className="web--address">porfolio-website</span>
                </a>
                <div className="user--links-container">
                    <a href="mailto:webcodersevvy@outlook.com" target={"_blank"} className="user--link-email">
                        <i class="fa-solid fa-envelope"></i>
                        <span className="user--link-text">Email</span>
                    </a>
                    <a href="https://www.linkedin.com/in/webcodersevvy/" target={"_blank"} className="user--link-linkedin">
                        <i class="fa-brands fa-linkedin"></i> 
                        <span className="user--link-text">LinkedIn</span>
                    </a>
                </div>
            </div>
        </header>
    )
}