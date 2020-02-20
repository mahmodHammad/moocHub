import React, { useState } from "react";
import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";

import { withStyles } from "@material-ui/core/styles";

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
    // width: "33%",
    flexGrow: "1",
    float: "right",
    alignSelf: "center"
  },
  margin: {
    margin: "2vh 2vw"
  }
};
function isExistOnTodo(todo, content) {
  console.log(todo, content);
  let flag = false;
  todo.forEach(e => {
    if (e.id === content.id) flag = true;
  });

  return flag;
}

function ComponentName({ content, classes, addToTodo, removeFromTodo, todo }) {
  const [addContent, setContent] = useState(true);
  return (
    <Grid item xs={9} md={5} className={(classes.op, classes.margin)}>
      <Card >
        <CardContent  className={classes.container}>
          
          {/*XXXXXXXXXXXXXXXxx On Click display content  */}
          <Link href="#" className={classes.cardText} >{content.name}</Link>

          { isExistOnTodo(todo, content) === false ? (
            <AddCircleIcon
              className={classes.add}
              size="large"
              color="secondary"
              onClick={() => {
                addToTodo(content);
                setContent(!addContent);
              }}
            />
          ) : (
            <RemoveCircleIcon
              className={`${classes.add} col3`}
              size="large"
              
              onClick={() => {
                removeFromTodo(content);
                setContent(!addContent);
              }}
            />
          )}
        </CardContent>
      </Card>
    </Grid>
  );
}

export default withStyles(styles)(ComponentName);
