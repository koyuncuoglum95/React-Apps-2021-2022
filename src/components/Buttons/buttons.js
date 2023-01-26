import React from "react";

const buttons = props => {
    return(
        <div className="calculator">

          <div className="keys">
            <div className="row">
              <button name="7" onClick={e => props.onClick(e.target.name)}>7</button>
              <button name="8" onClick={e => props.onClick(e.target.name)}>8</button>
              <button name="9" onClick={e => props.onClick(e.target.name)}>9</button>
              <button className="operator" name="+" onClick={e => props.onClick(e.target.name)}>+</button>
            </div><br></br>

            <div className="row">
              <button name="4" onClick={e => props.onClick(e.target.name)}>4</button>
              <button name="5" onClick={e => props.onClick(e.target.name)}>5</button>
              <button name="6" onClick={e => props.onClick(e.target.name)}>6</button>
              <button className="operator" name="-" onClick={e => props.onClick(e.target.name)}>-</button>
            </div><br></br>

            <div className="row">
              <button name="1" onClick={e => props.onClick(e.target.name)}>1</button>
              <button name="2" onClick={e => props.onClick(e.target.name)}>2</button>
              <button name="3" onClick={e => props.onClick(e.target.name)}>3</button>
              <button className="operator" name="x" onClick={e => props.onClick(e.target.name)}>x</button>
           </div><br></br>

          <div className="row">
            <button name="C" onClick={e => props.onClick(e.target.name)}>C</button>
            <button name="0" onClick={e => props.onClick(e.target.name)}>0</button>
            <button name="/" onClick={e => props.onClick(e.target.name)}>/</button>
            <button className="operator" name="=" onClick={e => props.onClick(e.target.name)}>=</button>
         </div>
      </div>
    </div>
    )
}

export default buttons;