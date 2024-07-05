import React from "react";
import * as About from "./AboutComponents";
import { Bio } from "../../data/Info";
import Typewriter from "typewriter-effect";
import SelfImg from "../../images/profile/Placeholder.png";

export default function Intro() {
  return (
    <div id="about">
      <About.IntroContainer>
        <About.InnerContainer>
          <About.RightContainer>
            <About.Title>
              Hello, I am {Bio.name}
            </About.Title>
            <About.TextLoop>
              I'm a{" "}
              <About.Span>
                <Typewriter
                  onInit={(typewriter) => {
                    Bio.roles.forEach((role) => {
                      typewriter.typeString(role);
                    });
                    typewriter.start();
                  }}
                  options={{
                    autoStart: true,
                    loop: false,
                  }}
                />
              </About.Span>
            </About.TextLoop>
            <About.Subtitle>{Bio.description}</About.Subtitle>
            <About.ResumeButton href={Bio.resume} target="_Blank">
              Resume
            </About.ResumeButton>
          </About.RightContainer>
          <About.LeftContainer>
            <About.Image src={SelfImg} alt={Bio.name} />
          </About.LeftContainer>
        </About.InnerContainer>
        <br/>
      </About.IntroContainer>
    </div>
  );
}
