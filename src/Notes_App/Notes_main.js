import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Notes from "./Notes";
import CreateNote from "./CreateNote";
import "./NotesStyle.css";

const Notes_main = () => {
  const [itemArray, setArray] = useState([]); //use state to store the notes

  const addNote = (note) => {
    setArray((oldArray) => {
      return [...oldArray, note]; //add the new note object {title: content:} to the storage array
    });
  };


  const onDelete = (id) => {
    setArray((olddata) =>
      olddata.filter((currdata, indx) => {
        return indx !== id;
      })
    );
  };

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />

      {itemArray.map((val, index) => {
        //here we are mapping in the array and showing the components
        return (
          <Notes
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}

      <Footer />
    </>
  );
};

export default Notes_main;
