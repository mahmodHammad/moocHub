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
import Link from "@material-ui/core/Link";
import Icon from "@material-ui/core/Icon";
import DeleteIcon from "@material-ui/icons/Delete";
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import CloseIcon from '@material-ui/icons/Close';
import GolfCourseIcon from '@material-ui/icons/GolfCourse';

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
            study List <GolfCourseIcon/>
          </Typography>
          {todo.map((text, index) => (
            <ListItem key={text.id}>
              <Link href={`#${text.id}`}>
                <FlightTakeoffIcon/>
              </Link>
              <ListItemText primary={`${index + 1}) ${text.name}`} />
              
                <CloseIcon
                  color="primary"
                  onClick={() => removeFromTodo(text)}
                />
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
