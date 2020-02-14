import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

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
    flexGrow: "40"
  },
  add: {
    // width: "33%",
    flexGrow: "1",
    float: "right",
    alignSelf: "center"
  }
};

function ComponentName({ content, classes }) {
  const [addContent, setContent] = useState(true);
  return (
    <Grid item xs={9} md={5} className={classes.op}>
      <Card>
        <CardContent className={classes.container}>
          <span className={classes.cardText}>{content.name}</span>

          {addContent === true ? (
            <AddCircleIcon
              className={classes.add}
              size="large"
              color="primary"
              onClick={() => {
                setContent(!addContent);
              }}
            />
          ) : (
            <RemoveCircleIcon
              className={classes.add}
              size="large"
              color="primary"
              onClick={() => {
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
