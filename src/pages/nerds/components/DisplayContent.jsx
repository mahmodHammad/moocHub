import React from "react";
import PdfIframe from "./PdfIframe";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

export default function DisplayContent({
  todo,
  removeFromTodo,
  opened,
  setopened
}) {
  return (
    <div>
      {todo.length !== 0 &&
        todo.map(e => (
          <div key={e.id}>
            <List className="Zindex">
              <ListItem>
                <ListItemText>{e.name}</ListItemText>
              </ListItem>
              {e.value.map(item => (
                <React.Fragment key={item.id}>
                  <PdfIframe
                    file={item}
                    removeFromTodo={removeFromTodo}
                    parentId={e.id}
                    opened={opened}
                    setopened={setopened}
                  />
                </React.Fragment>
              ))}
            </List>
            <Divider />
          </div>
        ))}
    </div>
  );
}
