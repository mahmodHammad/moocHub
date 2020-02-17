import React from "react";
import Pdf from "./PdfIframe";
import Fade from "@material-ui/core/Collapse";

export default function DisplayContent({
  todo,
  removeFromTodo,
  collapse = true
}) {
  return (
    <React.Fragment>
      <Fade in={collapse}>
        {todo.length !== 0 &&
          todo.map(e => (
            <Pdf key={e.id} file={e} removeFromTodo={removeFromTodo} />
          ))}
      </Fade>
    </React.Fragment>
  );
}
