import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  link: {
    fontSize: 10
  },
  title: {
    "&:hover": {
      cursor: "pointer"
    }
  },
  results: {
    textAlign: "center",
    margin: "auto"
  },result:{
      margin:"10px auto",
      borderBottom:"dashed #555 1px"
  }
}));

export default function Search({ searchResults, handleChange, loadContent,placeholder }) {
  const classes = useStyles();

  return (
    <div>
      <div className="wikisearch">
        <TextField
          name="wiki"
          label={placeholder}
          variant="outlined"
          onChange={handleChange}
        />
      </div>
      <div className={classes.results}>
        {searchResults.length ? (
          searchResults.map(e => (
            <div className={classes.result}>
              <Typography
                className={classes.title}
                variant="body1"
                onClick={() => loadContent(e.name)}
              >
                {e.name}
              </Typography>
              <Link className={classes.link} color="secondary" href={e.url}>
                {e.url}
              </Link>
            </div>
          ))
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
}
