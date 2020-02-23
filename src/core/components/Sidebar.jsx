import React, { useState } from "react";
import List from "@material-ui/core/List";
import Collapse from '@material-ui/core/Collapse';
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import CloseIcon from "@material-ui/icons/Close";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
const useStyles = makeStyles({
  list: {
    width: 290
  },
  fullList: {
    width: "auto"
  },
  op:{
    opacity:0.98
  }
});

export default function PersistentDrawerLeft({
  open,
  setopen,
  todo,
  removeFromTodo
}) {
  const classes = useStyles();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
 
const [content, setcontent] = useState(true)
  return (     
    <div>
      <SwipeableDrawer
      className={classes.op}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        anchor="left"
        onOpen={ ()=>setopen(true)}
        onClose={()=> setopen(false)}
        open={open}
      >
        <div className={classes.list}>
          <IconButton onClick={()=> setopen(false)}>
              <ChevronLeftIcon />
          </IconButton>
          <Divider />

          <List>
            <Typography variant="h6" component="div" align="center" color="secondary" onClick={()=>{setcontent(!content)}}>
              Study List 
              {content?<ExpandLess />:<ExpandMore/>}
            </Typography>

            <Collapse in={content} timeout="auto" >
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
           </Collapse>
          </List>
        </div>
      </SwipeableDrawer>
      <main>
        <div />
      </main>
    </div>
  );
}
