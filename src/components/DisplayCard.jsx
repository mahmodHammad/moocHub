import React from "react";
import {
  Typography,
  Grid,
  CardContent,
  Card
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
const styles = {
  topmargin: {
    margin: "20px auto 0 auto"
  },
  width: {
    width: "50%"
  },
  align: {
    textAlign: "center"
  }
};
function DisplayCard({ content,classes }) {
  return (
    <Grid
      item
      className={classes.width}
    >
      <Card className={classes.topmargin}>
        <CardContent className={classes.align}>
          <Typography color="textSecondary"  variant="h5">
            {content}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default withStyles(styles)(DisplayCard);
