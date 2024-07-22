import React, { Component } from 'react'

export class Lifecycle extends Component {
    componentDidMount(){
        console.log("componentdidmount==========>>>>>>>>>>>>")
    }
    componentDidUpdate(){
        console.log("componentdidupdate================>>>>>>>>>")
    }
    componentWillUnmount(){
        console.log("componentwillunmount================>>>>>>>>>")
        alert("done")
    }
    constructor(){
        super();
        this.state={
            coun : 0
        }
    }
    
    inc = () =>{
        this.setState({coun:this.state.coun+1})
    };
    
    dec = () =>{
        this.setState({coun:this.state.coun-1})
    };
  render() {
    return (
      <div>
        <h1>counter:{this.state.coun}</h1>
        <button onClick={this.inc}></button>
        <button onClick={this.dec}></button>
      </div>
    )
  }
}

export default Lifecycle