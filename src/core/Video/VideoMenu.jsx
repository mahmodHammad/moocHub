import React from "react";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import Button from "@material-ui/core/Button";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import SpeedIcon from "@material-ui/icons/Speed";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

export default function MenuListComposition({
  content,
  settingOptions,
  isContent,
  handleSetPlaybackRate,
  handleGoTo,
  handleSeekMouseUp
}) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  function renderContentButton(
    content,
    settingOptions,
    isContent = false,
    handleSetPlaybackRate
  ) {
    if (isContent) {
      // goto
      return content.map(({ title, time }, index) => (
        <MenuItem
          key={time + index}
          className="min"
          size="small"
          variant="outlined"
          onMouseDown={event => {
            handleGoTo(time);
            handleClose(event);
          }}
          onMouseUp={handleSeekMouseUp}
        >
          {title}
        </MenuItem>
      ));
    } else {
      // speed
      return settingOptions.map(op => (
        <MenuItem
          key={`op${op}`}
          className="min"
          size="small"
          variant="outlined"
          onClick={event => {
            handleSetPlaybackRate(op);
            handleClose(event);
          }}
        >
          {op}
        </MenuItem>
      ));
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <React.Fragment>
      {isContent ? (
        <Button
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <MenuOpenIcon />
        </Button>
      ) : (
        <Button
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <SpeedIcon />
        </Button>
      )}

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom"
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  {renderContentButton(
                    content,
                    settingOptions,
                    isContent,
                    handleSetPlaybackRate,
                    handleGoTo,
                    handleSeekMouseUp
                  )}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
}
