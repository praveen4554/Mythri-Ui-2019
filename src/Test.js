import React from 'react';

function Test(props){
  
  return(<div>
   {props.data.name}
   <button onClick={props.result}>child</button>
  </div>);
}

export default Test;