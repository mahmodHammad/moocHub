import React , { useState }  from 'react'
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Collapse from '@material-ui/core/Collapse';
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import CloseIcon from "@material-ui/icons/Close";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

/**
 * 
 * @param {title} param0 string - title of list
 * @param {todo} param0 array of objects{id , name} - content  of list
 * 
 */
export default function SidebarList({title ,data ,open,hasRemovabel,removeFromTodo }) {
const [visible, setvisible] = useState(open )

    return (
     
        <List>
        <Typography variant="h6" component="div" align="center" color="secondary" onClick={()=>{setvisible(!visible)}}>
          {title}
          {visible?<ExpandLess />:<ExpandMore/>}
        </Typography>

        <Collapse in={visible} timeout="auto" >
        {data.map((item) => (
          <div key={item.id}>
            <ListItem>
              <ListItemText
                component={Link}
                href={`${process.env.PUBLIC_URL}/nerds/#${item.id}`}
              > 
                  {item.name} 
              </ListItemText>

              {hasRemovabel===true && <CloseIcon
                fontSize="small"
                className="col3 todoRemove"
                onClick={() => removeFromTodo(item)}
              />}
             
              <Divider />
            </ListItem>
            <Divider />
          </div>
        ))}
       </Collapse>
      </List>
    )
}
