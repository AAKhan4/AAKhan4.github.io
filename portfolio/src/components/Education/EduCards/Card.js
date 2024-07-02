import React from "react";
import * as C from "./CardComponents";

export default function Card({ education }) {
  return (
    <C.Container>
      <C.Header>
        <C.Institution>{education.institution}</C.Institution>
        <C.Degree>{education.degree}</C.Degree>
        <C.Date>{education.date}</C.Date>
      </C.Header>
      <C.Body>
        {education.grades.map((grade) => (
            <C.Grades>{grade}</C.Grades>
            ))}
        <C.Desc>{education.desc}</C.Desc>
      </C.Body>
    </C.Container>
  );
}
