import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Collapse from "@material-ui/core/Collapse";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import NestedSidebarList from "./NestedSidebarList";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  MainList: {
    fontWeight: "bolderd",
    color: "#000"
  },
  listItem: {
    marginLeft: 12,
    paddingRight: 27,
  }
});

/**
 *
 * @param {title} param0 string - title of list
 * @param {todo} param1 array of objects{id , name} - content  of list
 *
 */
export default function SidebarList({
  title,
  data,
  open,
  isTodo,
  removeFromTodo,
  handleClose,
  handleSelect
}) {
  const [visible, setvisible] = useState(open);
  const [NestedOpen, setNestedOpen] = useState(false);
  const classes = useStyles();

  return (
    <List>
      <ListItem
        button
        className={classes.MainList}
        onClick={() => {
          setvisible(!visible);
        }}
      >
        <ListItemText>
          <Typography variant="body1" color="inherit">
            {title}
          </Typography>
        </ListItemText>
        {visible ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={visible} timeout="auto">
        {data.map((item, N) => (
          <div key={item.id}>
            <ListItem
              className={classes.listItem}
              button
              onClick={() =>
                NestedOpen === N ? setNestedOpen(false) : setNestedOpen(N)
              }
            >
              <ListItemText>
                <Typography color="primary" variant="body2">
                  {item.name}
                </Typography>
              </ListItemText>
              {NestedOpen === N ? (
                <ExpandLess fontSize="small" color="primary" />
              ) : (
                <ExpandMore fontSize="small" color="primary" />
              )}
            </ListItem>
            <NestedSidebarList
              data={item.value}
              parentId={item.id}
              open={NestedOpen === N}
              isTodo={isTodo}
              removeFromTodo={removeFromTodo}
              handleClose={handleClose}
              handleSelect={handleSelect}
            />
          </div>
        ))}
      </Collapse>
    </List>
  );
}
