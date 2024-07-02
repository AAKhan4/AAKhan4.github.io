import React from "react";

export default function Card({ project }) {
    return (
        <div>
            <h1>{project.title}</h1>
            <p>{project.desc}</p>
            <img src={project.image} alt={project.title} />
        </div>
    );
}