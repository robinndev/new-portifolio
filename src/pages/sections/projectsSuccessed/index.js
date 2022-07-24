import React from "react";
import './styled.scss'
import { Card } from "./shared/card";

export function ProjectsSuccessed() {
  return (
    <div className="container-skills">
      <h1 className="projects-title">Meus projetos</h1>
      <div className="card-div">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}