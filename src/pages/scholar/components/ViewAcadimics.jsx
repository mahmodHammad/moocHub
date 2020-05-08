import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Search from "../../Wiki/components/Search";
import MAcontent from "./MAcontent";
// import SearchResults from "../../Wiki/components/SearchResults";
import SearchResults from "../../Wiki/components/SearchResults";
import { Swipeable } from "react-swipeable";
import Microlink from "@microlink/react";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

import BarChart from "@material-ui/icons/BarChart";
const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 30
  },
  CheckIcon: {
    position: "relative",
    top: 20
  }
}));

export default function ViewAcadimics({
  entities,
  loading,
  handleChange,
  results,
  loadContent,
  preview,
  loadMoreContent,
  handlepreview
}) {
  const classes = useStyles();
  const [swipe, setswipe] = useState(0);
  if (swipe === 1) {
    return <Redirect to="/nerds" />;
  } else if (swipe === -1) {
    return <Redirect to="/wiki" />;
  }
  return (
    <Swipeable
      className="wiki"
      onSwipedRight={() => setswipe(1)}
      onSwipedLeft={() => setswipe(-1)}
    >
      {loading ? <LinearProgress color="secondary" /> : <span></span>}

      <Grid container>
        <Grid container item xs={12} md={3}>
          <div className="searchMA">
            <Grid item container justify="center">
              <Grid item xs={10}>
                <Search
                  placeholder="search on papers"
                  handleChange={handleChange}
                />
              </Grid>
              <Grid item xs={2}>
                <IconButton
                  size="medium"
                  component={Link}
                  to="./pali"
                  className={classes.CheckIcon}
                >
                  <BarChart color="secondary" />
                </IconButton>
              </Grid>
            </Grid>
            <SearchResults searchResults={results} loadContent={loadContent} />
            {preview !== false ? (
              <Microlink
                id="preview"
                style={{ width: "100%", margin: "auto" }}
                url={preview}
              />
            ) : (
              <span></span>
            )}
          </div>
        </Grid>
        <Grid item xs={12} md={9} id="MAcontent">
          {entities.length ? (
            <div className="MAresults results">
              <MAcontent
                entities={entities}
                loadMoreContent={loadMoreContent}
                handlepreview={handlepreview}
              />
            </div>
          ) : (
            <div className="MAresults Noresults"></div>
          )}
        </Grid>
      </Grid>
    </Swipeable>
  );
}
