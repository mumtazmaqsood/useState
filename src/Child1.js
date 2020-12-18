
import React, { useState } from 'react';
import App from './App';
import Hello from './Child2';


function Hi({value}){
    return(
        <div>
            Child1 Component value: {value}   
            {/*<button onClick={()=> {fun(++value)}}>change state</button>*/}
            <Hello add = {value + 5} />
        </div>
    );
}

export default Hi;