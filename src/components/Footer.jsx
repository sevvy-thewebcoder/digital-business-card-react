import React from "react";
import "../App.css"

export default function Footer() {
    return (
        <footer className="card--footer">
            <div className="footer--links">
                <a target={"_blank"} href="https://instagram.com/webcodersevvy" className="follow--link">
                    <i class="fa-brands fa-instagram"></i>
                </a>
                <a target={"_blank"} href="https://twitter.com/webcodersevvy" className="follow--link">
                    <i class="fa-brands fa-twitter"></i>
                </a>
                <a target={"_blank"} href="https://freecodecamp.org/webstallion" className="follow--link">
                    <i class="fa-brands fa-free-code-camp"></i>
                </a>
                <a target={"_blank"} href="https://github.com/sevvy-thewebcoder" className="follow--link">
                    <i class="fa-brands fa-github"></i>
                </a>
            </div>
        </footer>
    )
}