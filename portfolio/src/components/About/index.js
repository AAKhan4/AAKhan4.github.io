import React from "react";
import * as About from "./AboutComponents";

export default function Intro() {
    return <div id="about">
        <About.IntroContainer>
            <About.Bg>
            </About.Bg>
            <About.InnerContainer>
                <About.LeftContainer></About.LeftContainer>
                <About.RightContainer></About.RightContainer>
            </About.InnerContainer>
        </About.IntroContainer>
    </div>
}