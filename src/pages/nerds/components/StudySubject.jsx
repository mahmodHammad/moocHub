import React from "react";
import PdfIframe from "./PdfIframe";
import List from "@material-ui/core/List";

import { makeStyles } from "@material-ui/core/styles";

import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import themes from "../../../config/theme";

const useStyles = makeStyles({
  subject: props => ({
    background: `radial-gradient(ellipse,${themes[props.index][1]}, ${
      themes[props.index][3]
    })`,
    color: themes[props.index][0]
  }),
  header: {
    margin: 25
  }
});

export default function StudySubject({
  e,
  opened,
  removeFromTodo,
  setopened,
  checkSelected,
  selected,
  index
}) {
  const classes = useStyles({ index });

  return (
    <div key={e.id} className={classes.subject}>
      <List>
        <Typography
          color="primary"
          className={classes.header}
          variant="h6"
          align="center"
        >
          {e.name}
        </Typography>
        {e.value.map(item => (
          <React.Fragment key={item.id}>
            <PdfIframe
              file={item}
              removeFromTodo={removeFromTodo}
              parentId={e.id}
              opened={opened}
              setopened={setopened}
              selected={checkSelected(selected, item)}
              closeIconCol={themes[index][0]}
            />
          </React.Fragment>
        ))}
      </List>
      <Divider />
    </div>
  );
}
