//go to directory , then create-react-app foldername , creates a new folder with all the predefined files
//then go to that directory and npm start

import React from "react";
import ReactDOM from "react-dom";
import Todolist from "./ToDoList/ToDoList";
// import Notes_main from "./Notes_App/Notes_main";
ReactDOM.render(
  <>
    <Todolist />
  </>,
  document.getElementById("root")
);

