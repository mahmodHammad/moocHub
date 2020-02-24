import React from "react";
import Pdf from "./PdfIframe";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";

export default function DisplayContent({
  todo,
  removeFromTodo,
  collapse = true
}) {
  return (
    <div >
      {todo.length !== 0 &&
        todo.map(e => (
          <div key={e.id}> 
          <List className="Zindex">
          <Typography
            variant="h5"
            component="span"
            color="secondary"
          >
            {e.name}
          </Typography>
           {e.value.map(item=> <Pdf file={item} removeFromTodo={removeFromTodo} />)}
           
          </List>
          </div>
        ))}
    </div>
  );
}
