import React from "react";
import Pdf from "./PdfIframe";
import List from "@material-ui/core/List";

export default function DisplayContent({
  todo,
  removeFromTodo,
  collapse = true
}) {
  return (
    <React.Fragment>
      {todo.length !== 0 &&
        todo.map(e => (
          <List>
            <Pdf key={e.id} file={e} removeFromTodo={removeFromTodo} />
          </List>
        ))}
    </React.Fragment>
  );
}
