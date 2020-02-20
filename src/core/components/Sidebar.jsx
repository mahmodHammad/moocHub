import React from "react";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import CloseIcon from "@material-ui/icons/Close";
import GolfCourseIcon from "@material-ui/icons/GolfCourse";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import ListItemText from '@material-ui/core/ListItemText';

import { makeStyles } from '@material-ui/core/styles';
import '../style.css'


const useStyles = makeStyles({
  list: {
    width: 290,
  },
  fullList: {
    width: 'auto',
  },
});



export default function PersistentDrawerLeft({
  open,
  closefn,
  todo,
  removeFromTodo
}) {
  const classes = useStyles();
  const theme = useTheme();
  let isopen = open;
  return (
    <div>
      <SwipeableDrawer variant="persistent" anchor="left" open={isopen}>
        <div  className={classes.list}>
          <IconButton onClick={closefn}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
     
          <Divider/>
         

        <List>
          {/* data**************************************************************/}
          <Typography variant="h6" align="center"  className="col2">
            Study List <GolfCourseIcon />
          </Typography>

          {todo.map((text, index) => (
            <div>
            <ListItem key={text.id} >
              <ListItemText  component={Link} href={`${process.env.PUBLIC_URL}/nerds/#${text.id}`}>
                <Link color="primary" href={`${process.env.PUBLIC_URL}/nerds/#${text.id}`}> {text.name} </Link>
              </ListItemText>
              <CloseIcon  fontSize="small" className="col3 todoRemove"  onClick={() => removeFromTodo(text)} />
              <Divider />
            </ListItem>
              <Divider/>
            </div>
            
          ))}
        </List>
        </div>
      </SwipeableDrawer>
      <main>
        <div />
      </main>
    </div>
  );
}
