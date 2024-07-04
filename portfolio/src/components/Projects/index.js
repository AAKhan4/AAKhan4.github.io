import React from "react";
import * as P from "./ProjectComponents";
import { Projects } from "../../data/Info";
import Card from "./ProjectCards/Card";

export default function ProjectsDisplay() {
  const [toggle, setToggle] = React.useState("all");
  const filterredProjects = Projects.filter(
    (project) => project.type === toggle
  );
  return (
    <P.Container id="projects">
      <P.Wrapper>
        <P.Title>Projects</P.Title>
        <P.Desc>Some of the projects I have worked on.</P.Desc>
        <P.ToggleGroup>
          {["all", "frontend", "backend", "fullstack", "other"].map(
            (option) => (
              <P.ToggleBtn
                key={option}
                active={toggle === option}
                onClick={() => setToggle(option)}
              >
                {option.toUpperCase()}
              </P.ToggleBtn>
            )
          )}
        </P.ToggleGroup>
        <P.CardContainer>
          {toggle === "all"
            ? Projects.map((project) => (
                <Card key={project.title} project={project} />
              ))
            : filterredProjects.map((project) => (
                <Card key={project.title} project={project} />
              ))}
          {filterredProjects.length === 0 && toggle !== "all" && (
            <P.Desc>Looking a little empty right now...</P.Desc>
          )}
        </P.CardContainer>
      </P.Wrapper>
    </P.Container>
  );
}
