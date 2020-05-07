import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";

const useStyles = makeStyles(theme => ({
  content: {
    margin: "5px 0px",
    borderBottom: "1px solid #777",
    padding: "10px 4px"
  },
  cIcon: {
    borderBottom: "solid 1px #aaa",
    borderLeft: "solid 1px #777",
    borderRadius: 10,
    padding:"8px 5px 20px 20px",
    background: '#333',
    borderBottomLeftRadius: 50,
    color:"#ccc"
  },
  info:{
      position:"relative",
      top:-3,

  }
}));

export default function MAcontent({ entities }) {
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
                  <div className="original">
                    <Link
                      href={`https://academic.microsoft.com/paper/${f.Id}`}
                      target="_blank"
                    >
                      More details...
                    </Link>
                  </div>
                </div>
              </Grid>
              <Grid item md={2} lg={1} >
                <div className={classes.cIcon}>
                  <Grid item md={12}>
                    <FormatQuoteIcon fontSize="small" /> <span className={classes.info}>{f.CC}</span>
                  </Grid>
                  <Grid item md={12}>
                    <CalendarTodayIcon fontSize="small" /> <span className={classes.info}>{f.Y}</span>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          ))}
        </div>
      ))}
    </div>
  );
}
