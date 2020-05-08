import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Textarea from "./Textarea";
import BarChart from "@material-ui/icons/BarChart";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 30
  },
  fail: {
    color: theme.palette.error.main
  },
  pass: {
    color: theme.palette.success.main
  },
  checkBtn: {
    marginTop: 40,
    marginBottom: 20
  }
}));

export default function View({
  handleChange,
  s1,
  s2,
  similarityCheck,
  result,
  error,
  loading
}) {
  const classes = useStyles();

  return (
    <div className="wiki">
      {loading ? <LinearProgress color="secondary" /> : <span></span>}
      <div className={classes.root}>
        <Typography align="center" variant="h6" gutterBottom>
          Similarity Check between two paragraphs
        </Typography>
        <Grid container justify="center">
          <Grid item xs={12} md={6}>
            <Textarea
              name="s1"
              label="enter the First paragraph"
              value={s1}
              handleChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Textarea
              name="s2"
              label="enter the Second paragraph"
              value={s2}
              handleChange={handleChange}
            />
          </Grid>
          <Grid container justify="center" item xs={12}>
            <div>
              <Button
                className={classes.checkBtn}
                onClick={similarityCheck}
                variant="contained"
                color="secondary"
                endIcon={<BarChart />}
              >
                Check similarity
              </Button>
            </div>
            <Grid item xs={12}>
              {loading ? (
                <Typography align="center">Please wait...</Typography>
              ) : (
                <div>
                  {result !== false ? (
                    <Typography align="center">
                     The Similarity Is:{" "}
                      {result > 70 ? (
                        <span className={classes.fail}>{result}%</span>
                      ) : (
                        <span className={classes.pass}>{result}%</span>
                      )}
                    </Typography>
                  ) : (
                    <span></span>
                  )}
                  {error !== false ? (
                    <Typography align="center" className={classes.fail}>
                      {error}
                    </Typography>
                  ) : (
                    <span></span>
                  )}
                </div>
              )}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
