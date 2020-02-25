import React from "react";
import Pdf from "./PdfIframe";
import List from "@material-ui/core/List";
import Container from "@material-ui/core/Container";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

export default function DisplayContent({ todo, removeFromTodo }) {
  return (
    <div>
      {todo.length !== 0 &&
        todo.map(e => (
          <div key={e.id}>
            <List className="Zindex">
              <ListItem>
                <ListItemText>
                  {e.name}{" "}
                  {e.value.map(item => (
                    <Pdf
                      file={item}
                      removeFromTodo={removeFromTodo}
                      parentId={e.id}
                    />
                  ))}
                </ListItemText>
              </ListItem>
            </List>
            <Divider/>
          </div>
        ))}
    </div>
  );
}
