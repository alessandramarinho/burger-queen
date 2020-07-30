import React from "react";
import './menu.css'

function Menu(props) {
  return (
    <button className={props.class}
      onClick={props.onClick}
      key={props.value}>
      <div>
        <img src={props.src} alt={props.alt} className='imagem'></img>
      </div>
      <div className="name"> {props.name} </div>
      <div className="price"> {props.price} </div>
    </button>
  )
}

export default Menu;
