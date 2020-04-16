import React from "react";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Collapse from "@material-ui/core/Collapse";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  listItem: {
    borderLeft: "2px #ccc solid",
    paddingLeft: 10,
    marginLeft: 28,
    paddingRight: 44,
    color: "#666"
  }
});

export default function NestedSidebarList({
  data,
  parentId,
  open,
  isTodo,
  removeFromTodo,
  handleSelect
}) {
  const classes = useStyles();
  return (
    <List>
      <Collapse in={open} timeout="auto">
        {data.map(item => (
          <React.Fragment key={item.id}>
            {isTodo === true ? (
              <ListItem className={classes.listItem} button>
                <ListItemText primaryTypographyProps={{ variant: "subtitle2" }}>
                  <Link onClick={handleSelect} to={`/nerds`}>
                    {item.name}
                  </Link>
                </ListItemText>
                <CloseIcon
                  fontSize="small"
                  color="secondary"
                  className="todoRemove"
                  onClick={() => removeFromTodo(item, parentId)}
                />
              </ListItem>
            ) : (
              <ListItem
                className={classes.listItem}
                button
                component={Link}
                to={`/${item.name}/${item.id}`}
                onClick={() => handleSelect(item)}
              >
                <ListItemText
                  primary={item.name}
                  primaryTypographyProps={{ variant: "subtitle2" }}
                />
              </ListItem>
            )}
          </React.Fragment>
        ))}
      </Collapse>
    </List>
  );
}
