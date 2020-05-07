import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  content: {
    margin: "5px 0px",
    borderBottom: "1px solid #777",
    padding: "10px"
  },
  cIcon: {
    borderBottom: "solid 1px #999",
    borderLeft: "solid 1px #777",
    borderRadius: 10,
    padding: "8px 5px 20px 20px",
    background: "#333",
    borderBottomLeftRadius: 50,
    color: "#ccc"
  },
  info: {
    position: "relative",
    top: -3
  },
  loadmore: {
    margin: "12px 10px 18px"
  },
  originalText:{
    display:"inline-block", 
    margin: 5,
    color: "rgb(36, 251, 180) "
  }
}));

export default function MAcontent({ entities, loadMoreContent }) {
  const classes = useStyles();

  return (
    <div>
      {entities.map(e => (
        <div>
          {e.map(f => (
            <Grid container key={f.Ti} className={classes.content}>
              <Grid item md={10} lg={11}>
                <Typography variant="h6" gutterBottom>
                  {f.Ti}
                </Typography>
                <div>
                  {f.S !== undefined &&
                    f.S.map(l => (
                      <div className="link">
                        {/* XXX this substring wil be only for phone sized (we may need to extract the windo widht later) */}
                        <Link target="_blank" color="secondary" href={l.U}>
                          {l.U.length > 63 ? l.U.substring(0, 59) + "..." : l.U}
                        </Link>
                      </div>
                    ))}
                    <Link
                    className={classes.originalText}
                      href={`https://academic.microsoft.com/paper/${f.Id}`}
                      target="_blank"
                    >
                      More details...
                    </Link>
                </div>
              </Grid>
              <Grid item md={2} lg={1}>
                <div className={classes.cIcon}>
                  <Grid item md={12}>
                    <FormatQuoteIcon fontSize="small" />
                    <span className={classes.info}>{f.CC}</span>
                  </Grid>
                  <Grid item md={12}>
                    <CalendarTodayIcon fontSize="small" />
                    <span className={classes.info}>{f.Y}</span>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          ))}
        </div>
      ))}
      {entities.length ? (
        <Button
          className={classes.loadmore}
          endIcon={<ExpandMoreIcon />}
          color="primary"
          variant="contained"
          size="small"
          onClick={loadMoreContent}
        >
          Load more results
        </Button>
      ) : (
        <span></span>
      )}
    </div>
  );
}
