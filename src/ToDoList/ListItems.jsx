import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

const ListItems = (props) => {
  return (
    <div className="todo_style">
      <Stack direction="row" spacing={1}>
        <IconButton aria-label="delete">
          <DeleteIcon
            onClick={() => {
              props.onSelect(props.id);
            }}
            style={{ cursor: "pointer" }}
          />
        </IconButton>
      </Stack>
      <li> {props.text} </li>
    </div>
  );
};
export default ListItems;
