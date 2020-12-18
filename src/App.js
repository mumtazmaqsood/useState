import { useState } from "react";
import "./Child1";
import Hi from "./Child1";
import "./UseState.css"



function App() {
  let [count, setCount] = useState(1)
  let [lit, setLit] = useState(true)
  
  return (
    <div class={lit?"main":"test"}>
      <h1>Hello!</h1>
      <Hi value={count}/>
      <button onClick= { ()=> {setCount(++count)}}>Change state</button>
      <br />
      <button onClick= { ()=> {setLit(!lit)}}>Light Button</button>
      <br />
    </div>
  );
}

export default App;
