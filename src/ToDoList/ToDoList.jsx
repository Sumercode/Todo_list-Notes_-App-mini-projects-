import React, { useState } from "react";
import "./todostyle.css";
import ListItems from "./ListItems";

const Todolist = () => {
  //creating state variable to capture the input
  const [inputList, setInputList] = useState("");

  //creating array to store and manage its state
  const [itemArray, setItemArray] = useState([]); //here item array is a array , as we have passed as initial value in use state parameter
  // current val  update val       initial val

  const itemEvent = (
    event //on change passes an event object which contains all the details of the event
  ) => {
    setInputList(event.target.value); // contains the value , event.target.name contains the field name
  };

  // state setting functions pass the previous state of the state variable as an argument in its callback function

  const listOfItems = () => {
    setItemArray((oldArray) => {
      return [...oldArray, inputList];
    });
    setInputList("");
    // console.log(inputList);
  };

  const deleteItems = (id) => {
    setItemArray((oldArray) => {
      return oldArray.filter((item, index) => {
        return id !== index;
      });
    });
  };

  return (
    <div className="main-div">
      <div className="inner-div">
        <br />
        <h1>ToDoList</h1>
        <br />
        <input type="text" value = {inputList} placeholder="Add items" onChange={itemEvent}></input>
        <button className="plus-btn" onClick={listOfItems}>
          +
        </button>

        {/* onchange is an eventlistner */}

        <ol>
          {/* <li> {inputList} </li> */}

          {/* as it is javascript we have to write it in curly braces */}
          {/* here we are iterating over the itemsarray array to get the values stored in array */}
          {itemArray.map((item, index) => {
            return (
              <ListItems
                text={item}
                id={index}
                key={index}
                onSelect={deleteItems} //also passing the function as a prop
              />
            ); //calling the componenet ListItems which shows the items , taking props text
          })}
        </ol>
      </div>
    </div>
  );
};

export default Todolist;
