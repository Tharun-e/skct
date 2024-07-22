import React, { Component } from 'react'
import "./Sweet.css"
export class Sweet extends Component {
    constructor(){
        super();
        this.state={
            coun : 0,
            count :0
        }
    }
    
    inc = () =>{
        this.setState({coun:this.state.coun+1})
    };
    
    ince = () =>{
        this.setState({count:this.state.count+1})
    };
    
  render() {
    return (
        <div className='me'>
            

            
        <center>
            <h3>Bob ate {this.state.coun} mysorepak and {this.state.count} jangiri</h3>
            </center>
        <div className='body'>
            <div>
            <img src='Images/pak.jpg' alt='hg'style={{padding:"10px", height:"180px", marginLeft:"350px"}}></img>
               <img src='Images/jan.jpeg'alt='vg'style={{padding:"20px",height:"180px"}}></img>
            </div>
        </div>
        <center>
        <div className='mainj'> 
               </div>
        </center>
        <br></br>
        <div style={{padding:"100px"}}>
<center>
 <button onClick={this.inc} style={{padding:"20px", marginLeft:"-180px", borderRadius:"15px"}} ><b>MYSORE PAK</b></button>
<button onClick={this.ince} style={{padding:"20px", marginLeft:"40px",marginRight:"-200px",borderRadius:"15px"}}><b>JANGIRI</b> </button>
</center>
</div>
      </div>
      
    )
  }
}

export default Sweet;