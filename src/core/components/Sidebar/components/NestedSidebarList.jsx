import React from "react";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Collapse from "@material-ui/core/Collapse";
import ListItemText from "@material-ui/core/ListItemText";
import MuiLink from "@material-ui/core/Link";
import {Link} from "react-router-dom"
import CloseIcon from "@material-ui/icons/Close";
// import Divider from "@material-ui/core/Divider";

export default function NestedSidebarList({
  data,
  open,
  isTodo,
  removeFromTodo,
  handleSelect
}) {
  return (
    <List>
      <Collapse in={open} timeout="auto">
        {data.map(item => (
          <ListItem key={item.id}>
            {isTodo === true ? (
              <React.Fragment>
                <ListItemText>
                  {/*XXXXXXXXxxx Make clicking openes the file */}
                  <MuiLink href={`${process.env.PUBLIC_URL}/nerds/#${item.id}`} onClick={()=>handleSelect(item)}>
                  {item.name}
                  </MuiLink>
                </ListItemText>
                <CloseIcon
                  fontSize="small"
                  className="col3 todoRemove"
                  onClick={() => removeFromTodo(item)}
                />
              </React.Fragment>
            ) : (
              <ListItemText>
                <Link to={`/${item.name}/${item.id}`} onClick={()=>handleSelect(item)}>
                  {item.name}
                </Link>
              </ListItemText>
            )}
          </ListItem>
        ))}
      </Collapse>
    </List>
  );
}
