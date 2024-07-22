import React, { useState } from 'react';

const Form1 = () => {
  const [name,setName] = useState()
  const feedback = (e) => {
    setName(e.target.value)
  }
  const feed = () => {
    alert(name)
  }
  
  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif', 
      width: '400px', 
      margin: 'auto', 
      marginTop: '20px',
      padding: '20px', 
      
      boxShadow: '0 0 5px' 
    }}>
      <center>
        <form>
          <h2>Feedback Form</h2>
          <label>Name:</label><br></br><br></br>
          <input style={{height:'22px'}} type='text'></input><br></br><br></br>
          <label>Reg.No:</label><br></br><br></br>
          <input style={{height:'22px'}} type='text'></input><br></br><br></br>
          <label>Trainer's Name:</label><br></br><br></br>
          <input style={{height:'22px'}}type='text'></input><br></br><br></br>
          <label>Doubt Clarification:</label><br></br><br></br><br></br>
          <input type="radio"  name="alt"/>
          <label>5</label>
          <input type="radio" name="alt"/>
          <label>4</label>
          <input type="radio" name="alt"/>
          <label>3</label>
          <input type="radio" name="alt"/>
          <label>2</label>
          <input type="radio" name="alt"/>
          <label>1</label><br></br><br></br>
          <label>Interaction:</label><br></br><br></br><br></br>
          <input type="radio"  name="alta"/>
          <label>5</label>
          <input type="radio" name="alta"/>
          <label>4</label>
          <input type="radio" name="alta"/>
          <label>3</label>
          <input type="radio" name="alta"/>
          <label>2</label>
          <input type="radio" name="alta"/>
          <label>1</label><br></br><br></br>
          <label>Suggestion: </label><br></br><br></br>
          <input style={{width : '200px',height:'100px'}} onChange={feedback}type='textfield'></input><br></br><br></br>
          <button onClick={feed}>Submit</button><br></br><br></br>
          <button><a href="mailto:guna.amypo@gmail.com">
            Mail
            </a>
            </button>
        </form>
      </center>
    </div>
  );
};

export default Form1;
