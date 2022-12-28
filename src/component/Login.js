import React, { useReducer, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Login.css";

export default function Login(props) {
  const initialFormState = {
    username: "",
    password: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "HANDLE_INPUT_TEXT":
        return {
          ...state,
          [action.field]: action.payload,
        };
      case "RESET_ITEM":
        return {
          user_name: "",
          password: "",
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialFormState);

  const handleChange = (e) => {
    dispatch({
      type: "HANDLE_INPUT_TEXT",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  const handleLogin = () => {
    fetch("https://pbtracker-khongtub.vercel.app/users/login", {
      method: "POST",
      body: JSON.stringify(state),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => props.addUserId(data.userId));
  };

  return (
    <div>
      <div id="contain">
        <div>
          <Box
            className="loginForm"
            component="form"
            noValidate
            autoComplete="off"
          >
            <TextField
              onChange={handleChange}
              name="username"
              id="Username"
              label="Username"
              variant="outlined"
            />
            <TextField
              onChange={handleChange}
              name="password"
              id="Password"
              label="Password"
              type="password"
              variant="outlined"
            />
            <Button
              onClick={() => {
                handleLogin();
                console.log(props);
              }}
              id="button"
              variant="contained"
            >
              Login
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}
