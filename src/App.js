import "./App.css";

// Material UI imports

import Chip from "@mui/material/Chip";
import FaceIcon from "@mui/icons-material/Face";
import Paper from "@mui/material/Paper";
import LockIcon from "@mui/icons-material/Lock";
import Box from '@mui/material/Box';
import Switch from "@mui/material/Switch";
import { useState } from "react";
import SignUp from "./SignUp/SignUp";
import Login from "./Login Page/Login";

function App() {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="App" >
      <Paper  elevation={3} style={{ padding: "40px", paddingBottom: "70px"  }}>
        <div align="center">
          {checked ? (
            <Chip
              icon={<LockIcon />}
              label="Log In"
              variant="outlined"
              color="info"
            />
            
        
          
          ) : (
            <Chip
              icon={<FaceIcon />}
              label="Sign Up"
              variant="outlined"
              color="info"
            />
          )}
          <br />

          <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
            
          />
        </div>

        {checked ? <Login /> : <SignUp />}
      </Paper>
      <Box/>
    </div>
  );
}

export default App;