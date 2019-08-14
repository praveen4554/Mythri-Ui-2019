import React from 'react';

class Child extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state={};
    }
    // componentWillMount(){
    //     console.log('will mount');
    // }
    componentDidMount(){
        console.log('Did Mount');
    }
    // componentWillReceiveProps(){
    //     console.log(this.props);
    //     console.log('props received');
    // }
    // getDerivedStateFromProps(){
    //     console.log(this.props);
    //     console.log('16.3 props');
    // }
      static getDerivedStateFromProps(nextProps, prevState){
          console.log(nextProps);
          console.log(prevState);
          return '';
   }
    shouldComponentUpdate(){
        console.log('update');
        console.log(this.props.data.name);
        if(this.props.data.name === 'praveen')
                return false;
        else 
          return true;
    }
    getSnapshotBeforeUpdate(){
        console.log('16.3 update');
        return '';
    }
    // componentWillUpdate(){
    //     console.log('will update');
    // }
    componentDidUpdate(){
        console.log('did update');
    }
    componentWillUnmount(){
        console.log('unsubscribe');
    }
    render(){
        return(<div>
        Hello
        {this.props.data.name}
        </div>)
    }
}

export default Child;