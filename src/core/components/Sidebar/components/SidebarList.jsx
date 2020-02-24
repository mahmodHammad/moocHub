import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Collapse from "@material-ui/core/Collapse";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import NestedSidebarList from "./NestedSidebarList";

/**
 *
 * @param {title} param0 string - title of list
 * @param {todo} param0 array of objects{id , name} - content  of list
 *
 */
export default function SidebarList({
  title,
  data,
  open,
  hasRemovabel,
  removeFromTodo
}) {
  const [visible, setvisible] = useState(open);
  const [NestedOpen, setNestedOpen] = useState(false);

  return (
    <List>
      <Typography
        variant="h6"
        component="div"
        align="center"
        color="secondary"
        onClick={() => {
          setvisible(!visible);
        }}
      >
        {title}
        {visible ? <ExpandLess /> : <ExpandMore />}
      </Typography>

      <Collapse in={visible} timeout="auto">
        {/* display array's childrens */}
        {data.map((item,N )=> (
          <div key={item.id}>
            <ListItem>
              <ListItemText>
                 
                  <Typography onClick={()=>NestedOpen===N?setNestedOpen(false):setNestedOpen(N)}>
                    {item.name}
                    {NestedOpen===N?<ExpandLess fontSize="small"/>:<ExpandMore fontSize="small"/>}
                  </Typography>
                  {NestedOpen===N? <NestedSidebarList data={item.value} open={true}  /> : <NestedSidebarList data={item.value} open={false}  /> }
               
              </ListItemText>

              <Divider />
            </ListItem>
            <Divider />
          </div>
        ))}
      </Collapse>
    </List>
  );
}

{
  /* <CloseIcon
  fontSize="small"
  className="col3 todoRemove"
  onClick={() => removeFromTodo(item)}
/>; */
}
