import React, { useState, useEffect } from "react";
import './styled.scss'
import image from '../../../../../assets/firstView.png'

export function Card() {

  const [tag, setTag] = useState()

  useEffect(() => {
    setTag(false)
  }, []);

  // function handleMouseEnter() {
  //   const teste1 = <h1>RODOUUUUUUUUUU</h1>
  //   setTag(teste1)
  // }

  // function handleMouseOut() {
  //   const teste2 = <img src={image} alt="" className="image" />
  //   setTag(teste2)
  // }

  function handleClick(arg) {
    setTag(arg)
  }

  return (
    <div
      className="card-container"
      onClick={() => handleClick(!tag)}
      >
      {tag ? <h1>RODOUUUUUUUUUU</h1> : <img src={image} alt="" className="image" />}
    </div>
  )
}