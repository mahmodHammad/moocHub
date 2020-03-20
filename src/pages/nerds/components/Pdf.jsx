// works form window routing not hash routing
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import IdtoUrl from "../../../helper/getPdfUrl";
import ScrollableAnchor from "react-scrollable-anchor";

const styles = {
  root: {
    width: "100%",
    height: "100%",
    zIndex: "3"
  },
  container: {
    width: "100%",
    height: "98vh",
    background: "rgba(105, 104, 104, 0.25)"
  },
  loading: {
    position: "relative",
    top: "50%",
    zIndex: "-1"
  }
};

function PdfIframe({ pdfId, classes }) {
  const fileurl = IdtoUrl(pdfId);

  return (
    <ScrollableAnchor id={pdfId}>
      {/* <div className={`${classes.container}`}> */}
        {/* <div className={classes.loading}>Loading... </div> */}
          <iframe
          
            title="lecture"
            className={`${classes.root}`}
            frameBorder="0"
            src={fileurl.displayPdf}
          ></iframe>
      {/* </div> */}
    </ScrollableAnchor>
  );
}

export default withStyles(styles)(PdfIframe);
