import React from "react";
import Pdf from "./PdfIframe";
import List from "@material-ui/core/List";

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
            <Pdf file={e} removeFromTodo={removeFromTodo} />
          </List>
          </div>
        ))}
    </div>
  );
}
