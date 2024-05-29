import React from 'react'

const Map1 = () => {


    
         let users = [
                { fullName: "nitan", email: "abc@gmail.com", password: "Hello1", address:"gagalphedi" },
                { fullName: "ram", email: "ram@gmail.com", password: "Hello2", address:"gagalphedi" },
                { fullName: "hari", email: "hari@gmail.com", password: "Hello3", address:"gagalphedi" },
            
              ];
        

  return (
    <div>

        {

         users.map((value,i)=>{
            return(<div style={{border:"solid red 3px", marginBottom:"20px"}}>
                   <p>fullName is {value.fullName}</p>
      <p>email is {value.email}</p>
      <p>password is {value.password}</p>
      <p>address is {value.address}</p>
            </div>)
         })
}
      
   
 
    </div>
  )
}


export default Map1
