import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import "./NotesStyle.css";
import { useThemeProps } from "@mui/material";

const CreateNote = (props) => {
  //use state for expansion
  const [expand, setExpand] = useState(false);

  //use state to keep track of both the title and the content field in the form
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  //to add a new note
  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
    //reset the input fields
  };

  //reflect the changes made in the field in the state variables in the object
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  const expandIt = () => {
    setExpand(true);
  };

  const minimizeIt = () => {
    setExpand(false);
  };

  return (
    <>
      <div className="main_note" onDoubleClick={minimizeIt}>
        <form>
          {expand ? (
            <input
              type="text"
              name="title"
              value={note.title}
              placeholder="Title"
              onChange={inputEvent}
            />
          ) : null}
          <textarea
            rows=""
            column=""
            name="content"
            value={note.content}
            placeholder="Write a note..."
            onChange={inputEvent}
            onClick={expandIt}
          ></textarea>
          {expand ? (
            <Button onClick={addEvent} className="Mui-Button-root">
              <AddIcon className="plus_sign" />
            </Button>
          ) : null}
        </form>
      </div>
    </>
  );
};

export default CreateNote;
