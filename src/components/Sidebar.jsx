import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import DeleteIcon from "@material-ui/icons/Delete";
export default function PersistentDrawerLeft({
  open,
  closefn,
  todo,
  removeFromTodo
}) {
  const theme = useTheme();
  let isopen = open;
  return (
    <div>
      <Drawer variant="persistent" anchor="left" open={isopen}>
        <div>
          <IconButton onClick={closefn}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />

        <List>
          {/* data**************************************************************/}
          <Typography variant="h6" align="center" color="primary">
            study List
          </Typography>
          {todo.map((text, index) => (
            <ListItem key={text.id}>
              <ListItemText primary={`${index + 1}) ${text.name}`} />
              <Icon color="action" >
                <DeleteIcon
                  color="action"
                  onClick={() => removeFromTodo(text)}
                />
              </Icon>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <main>
        <div />
      </main>
    </div>
  );
}
