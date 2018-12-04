import React from "react";
import ReactDOM from "react-dom";
import Todos from "../../Components/Todos";
import firebase from "./firebase.js";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Todos />
      <Todos />
      <Todos />
      <Todos />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
