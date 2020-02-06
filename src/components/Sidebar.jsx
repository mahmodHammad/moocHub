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

export default function PersistentDrawerLeft({ open, closefn, todo }) {
  const theme = useTheme();
  let isopen = open;
  console.log("**************",todo)
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
              Todo List
          </Typography>
          {todo.map((text, index) => (
              <ListItem button key={text.id}>
                <ListItemText primary={`${index+1}) ${text.name}`} secondary={text.id} />
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
