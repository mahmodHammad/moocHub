import React, { useState } from "react";
import { useTheme } from "@material-ui/core/styles";
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
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import "../style.css";

const useStyles = makeStyles({
  list: {
    width: 290
  },
  fullList: {
    width: "auto"
  }
});

export default function PersistentDrawerLeft({
  open,
  setopen,
  closefn,
  todo,
  removeFromTodo
}) {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
 

  return (     
    <div>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        anchor="left"
        onOpen={ ()=>setopen(true)}
        onClose={()=> setopen(false)}
        open={open}
      >
        <div className={classes.list}>
          <IconButton onClick={()=> setopen(false)}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
          <Divider />

          <List>
            <Typography variant="h6" align="center" color="secondary">
              Study List <GolfCourseIcon />
            </Typography>

            {todo.map((text) => (
              <div key={text.id}>
                <ListItem>
                  <ListItemText
                    component={Link}
                    href={`${process.env.PUBLIC_URL}/nerds/#${text.id}`}
                  >
                    <Link
                      color="primary"
                      href={`${process.env.PUBLIC_URL}/nerds/#${text.id}`}
                    >
                      {text.name} 
                    </Link>
                  </ListItemText>
                  <CloseIcon
                    fontSize="small"
                    className="col3 todoRemove"
                    onClick={() => removeFromTodo(text)}
                  />
                  <Divider />
                </ListItem>
                <Divider />
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
