useState()
useState use to maintain component state and state can be transferred to child components as well.

Declare & initialize
let [count, setCount] = useState(1)
 
This declaration should be inside the component, useState return in array, in above example count variable takes 1 and setCount is a function which uses to update / change the state, component only uses this function to change the state of the component. Through props this state & function can be transferred to child components, if child component get its function as well then it has the ability to change the value but in reality when child use setCount function, its request goes to parent component and then parent component change the state of the count and re-render the state of count in all components where count has used.

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


In above example two states used 
let [count, setCount] = useState(1)
let [lit, setLit] = useState(true)

first useState intialize state is 1 and its stores in count , and it has used 

 <button onClick= { ()=> {setCount(++count)}}>Change state</button>

On button click event, setCount function used to change the state, in above example it is adding 1, here is another component 
<Hi value={count}/>
is also used , count state change here in parent component but it is displaying in child component “Hi”
here is child component
function Hi({value}){
    return(
        <div>
            Child1 Component value: {value}   
            {/*<button onClick={()=> {fun(++value)}}>change state</button>*/}
            <Hello add = {value + 5} />
        </div>
    );
}

Initial state has passed to Hi component and this component is displaying this state but this state is changing in parent component on button click event  
Inside Hi component, one another Hello component used, that is also using parent state and adding 5 into that value and displaying this value in Hello component 

function Hello({add}){
    return(
        <div>
            Child2 Component value:  {add}
        </div>
    );
}

So hierarchy is 
	App component  Hi Component  Hello Component      

useState hook use in App component and also responsible to change the value but value is displaying in Hi & Hello components 
