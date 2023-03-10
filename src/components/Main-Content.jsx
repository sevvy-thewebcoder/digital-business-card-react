import React from "react";
import "../App.css"

export default function MainContent() {
    return (
        <main className="card--main-content">
            <section className="about--data-section">
                <h2 className="section--title">About</h2>
                <p className="section--description">
                    I am a frontend developer with a particular 
                    interest in making things simple and automating 
                    daily tasks. I try to keep up with security 
                    and best practices, and am always looking for 
                    new things to learn.
                </p>
            </section>
            <section className="interests--data-section">
                <h2 className="section--title">Interests</h2>
                <p className="section--description">
                    Food expert. Music scholar. Reader. 
                    Internet fanatic. Bacon buff. Entrepreneur.
                    Travel geek. Pop culture ninja. Coffee fanatic.
                </p>
            </section>
        </main>
    )
}