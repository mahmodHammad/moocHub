import React from "react";
import Pdf from "./PdfIframe";
import Fade  from '@material-ui/core/Collapse';

export default function DisplayContent({ todo, addToTodo, removeFromTodo ,collapse}) {
  return (
    <React.Fragment>
      <Fade  in={collapse}>
        {todo.length !== 0 &&
          todo.map(e => (
            <Pdf
              key={e.id}
              file={e}
              removeFromTodo={removeFromTodo}
              addToTodo={addToTodo}
              display={true}
            />
          ))}
      </Fade >
    </React.Fragment>
  );
}
