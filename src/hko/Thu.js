import React, { Component } from 'react'

export class Thu extends Component {
    constructor(){
        super()
        this.state= {
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
        <h1>coun {this.state.coun}</h1>
        <button onClick={this.inc}>inc</button>
        <button onClick={this.dec}>dec</button>
      </div>
    )
  }
}
import React, { Component } from 'react'
import im1 from './images/laddu.jpg'
import im2 from './images/glass.jpeg'
import Display from './Display';
import Name from './Name';

 class Home extends Component {


constructor()
{
    super();
    this.state={count:0,c:0
    }
    
    
}

increment =()=>
{
    this.setState({count:this.state.count+1});
}

incrementc =()=>
{
    this.setState({c:this.state.c+1});
}



  render() {
    return (
        <>
        <body style={{backgroundColor:"orange", border:"solid gray",borderRadius:"50000px",padding:"10px",borderWidth:"10px"}}>

        <center>
<div>

<h1>
    <Name/> Eat {this.state.count} Laddu and Drink {this.state.c} glass of milk
</h1>
</div>
        <div>
            <img src={im1}  style={{padding:"20px", height:"180px"}}></img>
            <img src={im2} style={{padding:"20px",height:"180px"}}></img>
        </div>
        </center>
       
<div style={{padding:"100px"}}>
<center>
 <button onClick={this.increment} style={{padding:"40px", marginLeft:"0px"}} ><b>EAT LADDU</b></button>
<button onClick={this.incrementc} style={{padding:"40px", marginLeft:"40px"}}><b>DRINK MILK</b> </button>
</center>
</div>
        </body>
        </>
    )
  }
}
export default Home;
