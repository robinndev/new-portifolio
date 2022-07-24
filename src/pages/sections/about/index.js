import React from "react";
import photo from '../../../assets/my-icon.png'
import icon from '../../../assets/mouse-cursor.png'
import gif from '../../../assets/developerTeste.gif'
import './styled.scss'

export function About() {
  return (
    <div className="about-container">
      <div className="teste">

        <div className="text-container">
          <div>
            <h3 className="greetings-text">Hey guys 👋,  i'm</h3>
            <br />
            <h1 className="my-name_text">Robson Silva</h1>
            <br />
            <h3 className="dev-text">FRONT-END + MOBILE DEVELOPER 👨‍💻</h3>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Integer fringilla finibus odio, quis imperdiet
              augue vulputate id. Quisque sit amet mi feugiat,
              aliquam ipsum ac, posuere massa. Donec eu facilisis
              tellus, a gravida lorem. Fusce ut lectus vitae mi
              pharetra varius. Etiam interdum in mauris et
            </p>
            <br />
            <button className="hire-button">HIRE ME</button>
          </div>
        </div>

        <div className="photo-container">
          <img className="my-image" src={gif} alt="" />
        </div>
      </div>

      <div className="teste2">
        <img className="image-icon" src={icon} alt=""/>
      </div>
    </div>
  )
}