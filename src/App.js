import React from "react";
import TodoList from "./TodoList";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="TodoMain "style={{paddingTop:200}}><TodoList /></div>
    </div>
  );
};

export default App;
