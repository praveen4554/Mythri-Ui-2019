import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Test';
import Child from './Child';
class Praveen extends React.Component {
  constructor(){
    super();
    this.state = {
      name: 'praveen'
    }
    this.myFUnc = this.myFUnc.bind(this);
    this.result = this.result.bind(this);
  }
  myFUnc(){
    this.setState({name:'Mythri'});
    console.log(this.state);
  }
  result(){
    this.setState({name:'mythri'});
    //alert('hello');
  }

  render(){
  return (
    <div className="App">
     {this.state.name}
     <button onClick={this.myFUnc}>Test</button>
     <Child data={this.state}></Child>
     <Test data={this.state} dataClick={this.myFUnc} result={this.result}></Test>
    </div>
  );
  }
}

export default Praveen;
// functional component and other one is class component 
// state and props  
// checkout checkout component -- checokout device -- pers,add,crdit,terem,billing

// producer and cosumer problem  consumer value after producing and producer will produe the value after consumer by previous 

// messaging queue - producer and consumer  produce consumer 

// controller1 constorller 2 producing contorller2 i am consuling 
// controller 3 controller1 produce contoller 2 still listen that will 
// component to another component if we are subscribing it we need to unsubscribe 

// componentwillmount -- before rendring both sides client side and server side 
// componentdidmount -- after the first render it will be called only the client side and it iwll be called only once in the life cycle 
// componentwillreceiveprops -- when ever we are receiven props from parent this will be called
// shouldcomponentupdate -- if it returns true then it will rerender if return false 
// componetwillupdate -- before render
// componetdidupdate -- after rendering
// componetwillunmount -- 

// react16.3 will 2 life cycle hooks getSnsapshotbeforeupdate getDerivedStatefromProps 
// react 17 UNSAFE_componentwillreceiveporps