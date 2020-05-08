import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Search from "../../Wiki/components/Search";
import MAcontent from "./MAcontent";
import Explain from "./Explain";
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
  },
  MAresults: {
    borderRadius: 7,
    borderLeft: "solid #777 1px",
    borderTop: " solid #777 1px",
    height: "calc(100vh - 70px)",
    margin: " 7px 0",
    overflow: "auto"
  },
  results:{
    background:"#111"
  },
  Noresults:{
    background:"#333"
  },
  height:{
    height:4,
    padding:"0 10px"
  },
  "@media (max-width: 960px)": {
    height:{
      height:60
    }  
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
        <Grid container item xs={12} md={3} > 

          {/* search -------------------------->start */}
            <Grid item container align="center" className={classes.height}>
              <Grid item xs={10} className={classes.height}>
                <Search
                  placeholder="search on papers"
                  handleChange={handleChange}
                  FS={true}
                />
              </Grid>
              <Grid item xs={2}  className={classes.height}>
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
          {/* search --------------------------->end */}
        
          {/* preview --------------------------->start */}
            {preview !== false ? (
              <Microlink
                id="preview"
                style={{ width: "100%", margin: "auto" }}
                url={preview}
              />
            ) : (
              <span></span>
            )}
          {/* preview --------------------------->end */}
        </Grid>


        <Grid item xs={12} md={9} id="MAcontent">
          {entities.length ? (
            <div className={`${classes.MAresults} ${classes.results}`}>
              <MAcontent
                entities={entities}
                loadMoreContent={loadMoreContent}
                handlepreview={handlepreview}
              />
            </div>
          ) : (
            <div className={`${classes.MAresults} ${classes.Noresults}`}>
              <Explain/>
            </div>
          )}
        </Grid>
      </Grid>
    </Swipeable>
  );
}
