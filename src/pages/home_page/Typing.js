import React from "react";
import Typewriter from "typewriter-effect";

function Typing() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Java Developer",
                    "Full stack Developer",
                    "Software Engineer",
                    "Data Analyst",
                    "Android Developer"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Typing;
