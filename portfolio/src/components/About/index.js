import React from "react";
import * as About from "./AboutComponents";
import { Bio } from "../../data/Info";
import Typewriter from "typewriter-effect";

export default function Intro() {
  return (
    <div id="about">
      <About.IntroContainer>
        <About.Bg></About.Bg>
        <About.InnerContainer>
          <About.LeftContainer>
            <About.Title>
              Hello, I'm <br /> {Bio.name}
            </About.Title>
            <About.TextLoop>
              I'm a{" "}
              <About.Span>
                <Typewriter
                  options={{ strings: Bio.roles, autoStart: true, loop: true }}
                />
              </About.Span>
            </About.TextLoop>
            <About.Subtitle>{Bio.description}</About.Subtitle>
            <About.ResumeButton href={Bio.resume} target="_blank">
              Resume
            </About.ResumeButton>
          </About.LeftContainer>
          <About.RightContainer></About.RightContainer>
        </About.InnerContainer>
      </About.IntroContainer>
    </div>
  );
}
