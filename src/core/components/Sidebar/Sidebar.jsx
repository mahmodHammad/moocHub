import React from "react";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import SidebarList from "./components/SidebarList";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  list: {
    width: 282,
    overflowX: "hidden"
  },
  fullList: {
    width: "auto"
  }
});

export default function PersistentDrawerLeft({
  open,
  setopen,
  todo,
  removeFromTodo,
  communities,
  getCommunity
}) {
  const classes = useStyles();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <div>
      <SwipeableDrawer
        className={classes.op}
        disableBackdropTransition={!iOS}
        // disableDiscovery={iOS}
        anchor="left"
        onOpen={() => setopen(true)}
        onClose={() => setopen(false)}
        open={open}
      >
        <div className={classes.list}>
          <IconButton onClick={() => setopen(false)}>
            <ChevronLeftIcon />
          </IconButton>
          <Divider />

          {/* TODO */}
          <SidebarList
            data={todo}
            title="Study List"
            hasRemovabel={true}
            open={true}
            removeFromTodo={removeFromTodo}
            isTodo={true}
            handleSelect={f => {
              setopen(false);
            }}
          />
          <Divider />

          {/* Departments */}
          <SidebarList
            data={communities}
            title="Departments"
            isTodo={false}
            open={false}
            handleClose={setopen}
            handleSelect={community => {
              setopen(false);
              window.localStorage.setItem(
                "community",
                `/${community.name}/${community.id}`
              );
              getCommunity();
            }}
          />
        </div>
      </SwipeableDrawer>
      <main>
        <div />
      </main>
    </div>
  );
}
