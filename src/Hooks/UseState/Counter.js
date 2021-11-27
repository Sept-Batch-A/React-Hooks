import React, {useState} from "react"


const Counter=()=>{
  
    // let score = 10
    
     let [score,setScore] = useState(0)   
    //  const changeValue=()=>{
    //     setScore(score+1)
    // }

    //  kite, setKite 
    //  helloWorld, setHelloWorld
      return (
          <div> 
             <h1> Counter Application</h1>
             <h3> Value of score = {score} </h3>
             <button className="button1"  onClick={()=> (score<=9)? setScore(score+1): ""}> Increment </button>
             <button className="button1" onClick={()=> (score>1? setScore(score-1): "")}> Decrement </button>
             <button className="button1"onClick={()=>{setScore(0)}}> Reset </button>
          </div>
      )
      





}
export default Counter