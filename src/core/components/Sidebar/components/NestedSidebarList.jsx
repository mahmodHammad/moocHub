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
    paddingLeft: 0,
    marginLeft: 28,
    paddingRight: 40,
    color: "#666"
  },
  linker: {
    width: "100%",
    display: "inline-block",
    padding: "10px 5px 10px 7px"
  },
  itemlinks: {
    "& .MuiListItem-root": {
      paddingTop: "0px !important",
      paddingBottom: "0px !important"
    }
  },
  borderb: {
    borderBottom: "0.7px dotted #cacaca"
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

  // What the hell is this. NEED TO BE DEPRECATED-----
  function putclass(index, arr) {
    if (index === arr.length - 1) {
      return `${classes.listItem}`;
    } else {
      return `${classes.listItem}  ${classes.borderb}`;
    }
  }
  // -------------------------------------------------
  
  return (
    <List>
      <Collapse in={open} timeout="auto">
        {data.map((item, index, arr) => (
          <React.Fragment key={item.id}>
            {isTodo === true ? (
              <div className={classes.itemlinks}>
                <ListItem className={putclass(index, arr)} button>
                  <ListItemText
                    primaryTypographyProps={{ variant: "subtitle2" }}
                  >
                    <Link
                      className={classes.linker}
                      onClick={handleSelect}
                      to={{
                        pathname: `/nerds/`,
                        state: { selected: item }
                      }}
                    >
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
              </div>
            ) : (
              <ListItem
                className={`${classes.listItem} ${classes.linker}`}
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
