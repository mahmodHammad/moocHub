import React from "react";
import Pdf from "./PdfIframe";
export default function DisplayContent({
  todo,
  removeFromTodo,
  collapse = true
}) {
  return (
    <React.Fragment>
        {todo.length !== 0 &&
          todo.map(e => (
            <Pdf key={e.id} file={e} removeFromTodo={removeFromTodo} />
          ))}
    </React.Fragment>
  );
}
