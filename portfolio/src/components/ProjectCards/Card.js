import React from "react";
import * as C from "./CardComponents";

export default function Card({ project }) {
  return (
    <C.Card>
      <C.Image src={project.image} alt={project.title} />
      <C.Tags>
        {project.tags.map((tag) => (
          <C.Tag key={tag}>{tag}</C.Tag>
        ))}
      </C.Tags>
      <C.Title>{project.title}</C.Title>
      <C.SubTitle>{project.SubTitle}</C.SubTitle>
      <C.Details>{project.description}</C.Details>
      <C.Members></C.Members>
    </C.Card>
  );
}
