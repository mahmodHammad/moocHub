import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export default function PersistentDrawerLeft({open ,closefn}) {
  const theme = useTheme();
    let isopen=open
  return (
    <div>
      <Drawer variant="persistent" anchor="left" open={isopen}>
        <div>
          <IconButton onClick={closefn}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        
        <Divider />

        <List>
          {/* data*************************************************************8 */}
          {["Lec 3 thermodynamics", "Starred", "Send email", "Drafts"].map(
            (text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
        <Divider />
      </Drawer>
      <main>
        <div />
      </main>
    </div>
  );
}
