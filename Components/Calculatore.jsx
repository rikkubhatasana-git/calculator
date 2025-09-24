import React, { useState } from 'react'
import {evaluate} from 'mathjs'

const  buttons = [
  "7", "8", "9","/",
  "4", "5", "6","*",
  "1", "2", "3","-",
  "0", ".", "=","+",
  "C"
];

const Calculatore = () => {

  const [input,setInput] = useState("");

  function handaleClick(value){
    if (value==="C"){
      setInput("");
    }
    else if (value === "=") {
      try {
        const result = evaluate(input).toString();
        setInput(result);
      } catch (error) {
        setInput("Error");
      }
    } else {
      setInput((prevValue)=> prevValue + value);
    }
   
  }

  return (
    <div className='calculator'>
      
      <div className="display">{input || 0}</div>
      <div className="buttons">
        {buttons.map((value,index)=>{
          return <button 
          key={index}
           className={value === "C" ? "clear" :
            value==="="?"equals" : 
            ["*","/","-","+"].includes(value)? "operator" : ""
           }
           onClick={()=>handaleClick(value)}
           >{value}</button>;
        })}
        
      </div>
    </div>
  )
}

export default Calculatore
