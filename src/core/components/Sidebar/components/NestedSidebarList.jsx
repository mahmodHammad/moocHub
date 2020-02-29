import React from "react";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Collapse from "@material-ui/core/Collapse";
import ListItemText from "@material-ui/core/ListItemText";
import MuiLink from "@material-ui/core/Link";
import { Link } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  listItem: {
    // backgroundColor:"#aaa"
    borderLeft: "2px #bbb solid",
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
              <ListItem
              className={classes.listItem}
              button
              component={Link}
              to={`${process.env.PUBLIC_URL}/nerds`}
              onClick={handleSelect}
            >
              <ListItemText primary={item.name}  primaryTypographyProps={{variant:"subtitle2"}}/>
              <CloseIcon
                fontSize="small"
                className="col3 todoRemove"
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
