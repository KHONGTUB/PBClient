import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import Nav from "./component/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
          <Router />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
