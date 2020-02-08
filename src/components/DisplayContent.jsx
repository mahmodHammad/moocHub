import React from "react";
import Pdf from "./PdfIframe";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Fade  from '@material-ui/core/Collapse';
import FormControlLabel from '@material-ui/core/FormControlLabel';
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
