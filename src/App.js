import React from "react";
import Login from "./Components/Login";
import CreateProject from "./Components/CreateProject";
import CreateTask from "./Components/CreateTask";
import CompleteTask from "./Components/CompleteTask";
import GetTask from "./Components/GetTask";
import GetTasks from "./Components/GetTasks";
import GetProject from "./Components/GetProject";
import GetProjects from "./Components/GetProjects";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Login />
      <hr />
      <CreateProject />
      <hr />
      <CreateTask />
      <hr />
      <CompleteTask />
      <hr />
      <GetTask />
      <hr />
      <GetTasks />
      <hr />
      <GetProject />
      <hr />
      <GetProjects />
    </div>
  );
}

export default App;

