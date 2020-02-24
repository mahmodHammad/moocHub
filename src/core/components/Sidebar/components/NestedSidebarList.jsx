import React from "react";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Collapse from "@material-ui/core/Collapse";
import ListItemText from "@material-ui/core/ListItemText";
import Link from "@material-ui/core/Link";
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
                <ListItemText
                  component={Link}
                  href={`${process.env.PUBLIC_URL}/nerds/#${item.id}`}
                >
                  {item.name}
                </ListItemText>
                <CloseIcon
                  fontSize="small"
                  className="col3 todoRemove"
                  onClick={() => removeFromTodo(item)}
                />
                >
              </React.Fragment>
            ) : (
              <ListItemText>
                <Link href={`/${item.name}/${item.id}`} onClick={()=>handleSelect(item)}>
                  {item.name}
                </Link>

                {/* component={Link}  onClick={()=>handleSelect(item)} */}
              </ListItemText>
            )}
          </ListItem>
        ))}
      </Collapse>
    </List>
  );
}
