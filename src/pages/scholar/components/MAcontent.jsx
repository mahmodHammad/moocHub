import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import VisibilityIcon from "@material-ui/icons/Visibility";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
  content: {
    margin: "5px 0px",
    borderBottom: "1px solid #777",
    padding: "9px"
  },
  cIcon: {
    borderBottom: "solid 1px #999",
    borderLeft: "solid 1px #777",
    borderRadius: 10,
    padding: "5px 5px 18px 18px",
    background: "#333",
    borderBottomLeftRadius: 50,
    color: "#ccc"
  },
  info: {
    position: "relative",
    top: -3,
    left: 3
  },
  loadmore: {
    margin: "12px 10px 18px"
  },
  originalText: {
    display: "inline-block",
    margin: "5px 10px",
    color: "#aaa"
  },
  previewIcon: {
    position: "relative",
    top: -2,
    marginRight: 4,
    color: "#ccc"
  }
}));

export default function MAcontent({
  entities,
  loadMoreContent,
  handlepreview
}) {
  const classes = useStyles();

  return (
    <div>
      {entities.map(e => (
        <div>
          {e.map(f => (
            <Grid container key={f.Ti} className={classes.content}>
              <Grid item xs={9} sm={10} lg={11}>
                <Typography variant="h6" gutterBottom>
                  {f.Ti}
                </Typography>
                <div>
                  {f.S !== undefined &&
                    f.S.map(l => (
                      <div className="link">
                        {/* XXX this substring wil be only for phone sized (we may need to extract the windo widht later) */}
                        <IconButton>
                          <VisibilityIcon
                            fontSize="small"
                            className={classes.previewIcon}
                            onClick={() => handlepreview(l.U)}
                          />
                        </IconButton>

                        <Link target="_blank" color="secondary" href={l.U}>
                          {l.U.length > 35 ? l.U.substring(0, 34) + "..." : l.U}
                        </Link>
                      </div>
                    ))}
                  <div>
                    <Link
                      className={classes.originalText}
                      href={`https://academic.microsoft.com/paper/${f.Id}`}
                      target="_blank"
                    >
                      More details...
                    </Link>
                  </div>
                </div>
              </Grid>
              <Grid item xs={3} sm={2} lg={1}>
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
