import React, { useState } from 'react';
import './SignUp.css'
import {
  Box,
  Typography,
  FormControlLabel,
  Switch,
  TextField,
  Button,
} from '@mui/material';

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  const handleDarkModeChange = (event) => {
    setDarkMode(event.target.checked);
  };

  const handleFontSizeChange = (event) => {
    setFontSize(event.target.value);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        Settings
      </Typography>
      <FormControlLabel
        control={<Switch checked={darkMode} onChange={handleDarkModeChange} />}
        label="Dark Mode"
      />
      <TextField
        label="Font Size"
        type="number"
        value={fontSize}
        onChange={handleFontSizeChange}
        InputLabelProps={{ shrink: true }}
      />
      <Button variant="contained" sx={{ mt: 2 }}>
        Save
      </Button>
    </Box>
  );
};

export default Settings;
