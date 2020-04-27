import React from "react";

import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import WikiContentStyle from "./WikiContentStyle";

const useStyles = makeStyles(theme => ({
  data: {
    padding: 20
  },
  datasection: {
    margin: "40px 0px"
  },
  sentence: {
    margin: "25px 0"
  },
  link: {
    marginLeft: 10,
    fontSize: 12
  },
  divider: {
    background: "#888"
  },
  header: {
    textAlign: "center",
    marginBottom: 30
  },
  text: {
    margin: "7px 0"
  }
}));

export default function WikiContent({ data, url, loadContent }) {
  const classes = useStyles();

  return (
    <div>
      {data !== false ? (
        <div className={classes.data}>
          <div className={classes.header}>
            <Typography variant="h4" align="center">
              {data.title}
            </Typography>
            <Link color="secondary" className={classes.link} href={url}>
              {url}
            </Link>
          </div>
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
                          <div className={classes.text}>
                            <WikiContentStyle
                              text={s.text}
                              links={s.links}
                              formatting={s.formatting}
                              loadContent={loadContent}
                            />
                          </div>
                        ))}
                    </div>
                  ))}
                  <Divider className={classes.divider} />
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
