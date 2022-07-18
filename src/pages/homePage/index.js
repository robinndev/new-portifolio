import React from "react";
import './styled.scss'
import image from '../../assets/logo.png'

import { About } from "../sections/about";

export function HomePage() {
  return (
    <div className="container">
      <header className="header">
        <img className="logo" src={image} alt="" />

        <div className="list-container">
          <ul className="list-header">
            <li className="li-option">Home</li>
            <li className="li-option">About</li>
            <li className="li-option">Projects</li>
            <li className="li-option">Services</li>
          </ul>
          <button className="button-contact">Contact Me</button>
        </div>
      </header>
      <About/>
    </div>
  )
}