import React from "react";
import {
  Typography,
  Paper,
  Tabs,
  Tab,
  AppBar,
  Grid,
  CardContent,
  Card,
  Link
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
function DisplayCard({ content, selectedIndex, classes }) {
  return (
    <Grid
      item
      className={classes.width}
      justify="center"
      alignContent="center"
      alignItems="center"
    >
      <Card className={classes.topmargin}>
        <CardContent className={classes.align}>
          <Typography color="textSecondary" gutterBottom variant="h4">
            {content.title}
          </Typography>
          <Link href={content.pdf}>{content.title}</Link>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default withStyles(styles)(DisplayCard);
