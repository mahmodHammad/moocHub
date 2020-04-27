import React from "react";

import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  data: {
    padding: 20
  },
  datasection: {
    margin: "40px 0px"
  },
  sentence: {
    margin: "25px 0"
  }
}));

export default function WikiContent({ data, renderWithStyles }) {
  const classes = useStyles();

  return (
    <div>
      {data !== false ? (
        <div className={classes.data}>
          <Typography variant="h5" align="center">
            {data.title}
          </Typography>
          {data.sections.map(s => (
            <div className={classes.datasection}>
              {s.paragraphs !== undefined && (
                <div>
                  <Typography variant="h6" align="center">
                    {s.title}
                  </Typography>
                  {s.paragraphs.map(p => (
                    <div className={classes.sentence}>
                      {p.sentences !== undefined &&
                        p.sentences.map(s => (
                          <div className="text">
                            {renderWithStyles(s.text, s.links, s.formatting)}
                          </div>
                        ))}
                    </div>
                  ))}
                  <Divider />
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <span></span>
      )}
    </div>
  );
}
