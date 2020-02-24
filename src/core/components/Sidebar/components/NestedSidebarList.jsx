import React, { useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Collapse from "@material-ui/core/Collapse";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import CloseIcon from "@material-ui/icons/Close";

export default function NestedSidebarList({ data ,open}) {
  return (
    <List>
      {/* <Typography
        variant="body1"
        component="div"
        color="primary"
        onClick={() => {
          setvisible(!visible);
        }}
      >
        {title}
        {visible ? <ExpandLess /> : <ExpandMore />}
      </Typography> */}

      <Collapse in={open} timeout="auto">
        {data.map(item => (
          <ListItem key={item.id}>
            <ListItemText>{item.name}</ListItemText>
          </ListItem>
        ))}
      </Collapse>
    </List>
  );
}
