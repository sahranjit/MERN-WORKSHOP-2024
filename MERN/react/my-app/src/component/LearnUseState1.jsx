import React, { useState } from 'react'

const LearnUseState1 = () => {
//variable define
//let name="ranjit";


let [name,setName]=useState("ranjit");    //defining above variable with useState method
let [age,setAge]=useState(300);




  return (
    <div>
        {name}
            {/* //now making a button that when clicked would change the above existing name        */}

        <br></br>
        {age}
        
        <button onClick={() =>{
            setName("kishan");
        }} >
            Change Name
        </button>
        <br></br>
        <button onClick={() =>{
            setAge(200);
        }} >
            Change Age
        </button>
    </div>
  )
}

export default LearnUseState1


