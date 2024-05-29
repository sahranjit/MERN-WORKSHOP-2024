import College from "./component/College";
import Counter from "./component/Counter";
import LearnUseState1 from "./component/LearnUseState1";
import LearnUseState2 from "./component/LearnUseState2";
import Map from "./component/Map";
import Map1 from "./component/Map1";

let App=({name,address,age,isMarried})=>{
  console.log(name);
  console.log(address);
  console.log(age);
  console.log(isMarried);
  //return "hello world";
  return(
  <div>
   {/* <p>name is{name}</p>
   <p>address is {address}</p>
   <p>age is {age}</p>
   <p>isMarried is {isMarried===true?"yes":"no"}</p>
   <p>he can enter bar {age>18?"yes":"no"}</p> */}
    
    {/* <College></College> */}
    {/* <Counter></Counter> */}
    {/* <Map></Map> */}
    {/* <Map1></Map1> */}
    {/* <LearnUseState1></LearnUseState1> */}
    {/* <LearnUseState2></LearnUseState2> */}

   <img src="./favicon.ico"></img>

   {/* in src . (ie. dot) means public folder always place images in the public folder */}

  </div>
  );
};
export default App;