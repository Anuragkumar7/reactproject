import React, { Component } from 'react'
// import './App.css'

export default class classcomponents extends Component {
  constructor(){
    super()
    this.state ={
    
      fname: 'San Francisco',
    }
  }

  static getDerivedStateFromProps(props, state){
    console.log('inside the getDerivedStateFromProps..........')
    console.log(props);
    // console.log(state);
    return null
    //   fname: props.user,
    
  }

  shouldComponentUpdate(currentProps, currentState){
        console.log('inside the shouldComponentUpdate..........')
        console.log("previous props ",currentProps);
        console.log("current props  ",currentState);
        return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("Inside the getSnapshotBeforeUpdate");
    console.log(prevProps);
    console.log(prevState);
    return {
        fname: prevState
    }
  }
  componentDidMount(){
    console.log('inside the componentDidMount..........')
    fetch("http://fakestoreapi.com/products").then(res=>res.json()).then(data=>console.log(data));
  }


  componentDidUpdate(prevProps, prevState, snapShot){
            console.log("Inside componentDidUpdate ..........");
            console.log(prevProps);
            console.log(prevState);
            console.log(snapShot);
  }
  render() {
    console.log("Inside the rander");
    return (
      <div>

      <h1>Hello Developer .....</h1>
      
      <h2>Name is: {this.state.fname}</h2>
      <button className='bg-purple-400 text-white py-1 px-4 rounded-md' onClick={() => this.setState({fname: "chhibramau"})}>Change Name</button>

      </div>
    )
  }
}
