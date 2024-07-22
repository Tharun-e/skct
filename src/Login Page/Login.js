import React, { useState } from "react";
import "./Login.css";
import {
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  IconButton,
  Button,
  Input,
  Checkbox,
  Alert,
  Stack,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LockOpenIcon from '@mui/icons-material/LockOpen';

const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [formValid, setFormValid] = useState("");
  const [success, setSuccess] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const handleEmail = () => {
    setEmailError(!isEmail(emailInput));
  };

  const handlePassword = () => {
    setPasswordError(
      !passwordInput || passwordInput.length < 5 || passwordInput.length > 20
    );
  };

  const handleSubmit = () => {
    setSuccess("");
    if (emailError || !emailInput) {
      setFormValid("Email is Invalid. Please Re-Enter");
      return;
    }
    if (passwordError || !passwordInput) {
      setFormValid("Password is set between 5 - 20 characters long. Please Re-Enter");
      return;
    }
    setFormValid("");

    console.log("Email : " + emailInput);
    console.log("Password : " + passwordInput);
    console.log("Remember : " + rememberMe);

    setSuccess("Form Submitted Successfully");
  };

  return (
    <div className="mn">
      <div className="login-form-container">
        <div style={{ marginBottom: "20px", textAlign: "center" }}>
          <h2>Login</h2>
        </div>
        <div style={{ marginBottom: "15px" }}>
          <TextField
            label="Email Address"
            fullWidth
            variant="standard"
            size="small"
            error={emailError}
            value={emailInput}
            onBlur={handleEmail}
            onChange={(event) => setEmailInput(event.target.value)}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="standard-adornment-password" error={passwordError}>Password</InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? "text" : "password"}
              error={passwordError}
              value={passwordInput}
              onBlur={handlePassword}
              onChange={(event) => setPasswordInput(event.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>

        <div style={{ fontSize: "14px", marginBottom: "15px" }}>
          <Checkbox
            {...label}
            size="small"
            checked={rememberMe}
            onChange={(event) => setRememberMe(event.target.checked)}
          />
          Remember Me
        </div>

        <div style={{ marginBottom: "15px" }}>
          <Button
            variant="contained"
            fullWidth
            startIcon={<LockOpenIcon />}
            onClick={handleSubmit}
          >
            LOGIN
          </Button>
        </div>

        {formValid && (
          <Stack sx={{ width: "100%", paddingTop: "10px" }} spacing={2}>
            <Alert severity="error" size="small">
              {formValid}
            </Alert>
          </Stack>
        )}

        {success && (
          <Stack sx={{ width: "100%", paddingTop: "10px" }} spacing={2}>
            <Alert severity="success" size="small">
              {success}
            </Alert>
          </Stack>
        )}

        <div style={{ fontSize: "14px", textAlign: "center" }}>
          <a style={{ marginRight: "10px" }}>Forgot Password</a>
          <span>Do you have an account?</span>{" "}
          <span style={{ textDecoration: "underline", color: "blue", cursor: "pointer" }}>
            Sign Up
          </span>
        </div>
      </div>
    </div>
  );
}
