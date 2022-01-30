import React from "react";
import TodoList from "./components/TodoList";
import UserList from "./components/UserList";
import "./style.css";

const App = () => {
  return (
    <div className="wrapper">
      <UserList />
      <TodoList />
    </div>
  );
};

export default App;
