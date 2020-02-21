// works form window routing not hash routing
import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import IdtoUrl from "../../../helper/getPdfUrl";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";

const styles = {
  fullwidth: {
    width: "98vw",
    height: "99vh"
  },
  center: {
    margin: "auto",
    textAlign: "center"
  }
};

function PdfIframe({ file, classes, removeFromTodo }) {
  const fileurl = IdtoUrl(file.id);
  const [display, setdisplay] = useState(false);
  return (
    <div key={file.id} className={classes.center} id={file.id}>
      <Container  maxWidth="lg">
      <ListItem className="NerdsListItem">
        <ListItemText>
          <Typography
            variant="h6"
            component="span"
            color="primary"
            onClick={() => {
              setdisplay(!display);
            }}
          >
            {file.name}
          </Typography>
        </ListItemText>
        <CloseIcon
          fontSize="small"
          className="col3 todoRemove"
          onClick={() => removeFromTodo(file)}
        />
      </ListItem>
      </Container>
      {display && (
        <iframe
          title="lecture"
          className={classes.fullwidth}
          frameBorder="0"
          src={fileurl.displayPdf}
        ></iframe>
      )}
      <Divider />
    </div>
  );
}

export default withStyles(styles)(PdfIframe);

// {display ?
//   <iframe
//     title="lecture"
//     className={classes.fullwidth}
//     frameBorder="0"
//     src={fileurl.displayPdf}
//   ></iframe>

//   : (
//     <React.Fragment>
// <Typography variant="h6" onClick={() => {
//         setdisplay(!display);
//       }}>{file.name} </Typography>

// <ButtonGroup
//   size="small"
//   variant="contained"
//   color="secondary"
//   aria-label="contained primary button group"
// >
//   <Button>
//     <UnfoldMoreIcon
//       size="small"

//     />
//   </Button>

//   <Button>
//     <Link href={fileurl.downloadPdf}>                <GetAppIcon size="small" color="primary" />
//     </Link>
//   </Button>

//   {file.existInTodo === true && (
//     <Button>
//       <RemoveCircleOutlineIcon
//         onClick={() => removeFromTodo(file)}
//         color="primary"
//       />
//     </Button>
//   )}
// </ButtonGroup>
// </React.Fragment>
// )}
