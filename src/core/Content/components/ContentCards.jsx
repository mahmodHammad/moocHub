import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";

import { withStyles } from "@material-ui/core/styles";

import PopContent from "../components/PopContent";
const styles = {
  op: {
    opacity: "0.75"
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: " center"
  },
  cardText: {
    flexGrow: "20"
  },
  add: {
    flexGrow: "1",
    float: "right",
    alignSelf: "center"
  },
  margin: {
    margin: "16px"
  }
};

function isExistOnTodo(todo, content, parent) {
  let flag = false;
  todo.forEach(e => {
    if (e.id === parent.id) {
      e.value.forEach(item => {
        if (item.id === content.id) {
          flag = true;
        }
      });
    }
  });

  return flag;
}

function ComponentName({
  content,
  classes,
  addToTodo,
  removeFromTodo,
  todo,
  subject,
  isVideo,
  handleVideoPin,
  index
}) {
  const [addContent, setContent] = useState(true);
  const [Pop, setPop] = React.useState(false);

  const handleClickOpen = () => {
    setPop(true);
  };

  const handleClose = () => {
    setPop(false);
  };

  const handleAdd = (index) => {
    setPop(false);
    addToTodo(content, subject,index);
  };

  const handleRemove = () => {
    setPop(false);
    removeFromTodo(content, subject.id);
  };

  return (
    <Grid item xs={9} md={5} className={classes.margin} key={content.id}>
      <Card>
        <CardContent className={classes.container}>
          <Typography className={classes.cardText} onClick={handleClickOpen}>
            {content.name}
          </Typography>

          <React.Fragment>
            <PopContent
              handleClose={handleClose}
              handleSelect={
                isExistOnTodo(todo, content, subject) ? handleRemove : ()=>handleAdd(index)
              }
              Pop={Pop}
              content={content}
              subject={subject}
              isAdd={isExistOnTodo(todo, content, subject) ? false : true}
              isVideo={isVideo}
              handleVideoPin={handleVideoPin}
            />

            {isExistOnTodo(todo, content, subject) ? (
              <RemoveCircleIcon
                className={`${classes.add}`}
                color="secondary"
                size="large"
                onClick={() => {
                  removeFromTodo(content, subject.id);
                  setContent(!addContent);
                }}
              />
            ) : (
              <AddCircleIcon
                className={`${classes.add}`}
                size="large"
                color="primary"
                onClick={() => {
                  addToTodo(content, subject,index);
                  setContent(!addContent);
                }}
              />
            )}
          </React.Fragment>
        </CardContent>
      </Card>
    </Grid>
  );
}
export default withStyles(styles)(ComponentName);
