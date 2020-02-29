// works form window routing not hash routing
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import IdtoUrl from "../../../helper/getPdfUrl";
import ScrollableAnchor from 'react-scrollable-anchor'

const styles = {
  fullwidth: {
    width: "100%",
    height: "99vh"
  }
};

function PdfIframe({ pdfId, classes }) {
  const fileurl = IdtoUrl(pdfId);

  return (
    <ScrollableAnchor id={pdfId}>
      <iframe
        title="lecture"
        className={classes.fullwidth}
        frameBorder="0"
        src={fileurl.displayPdf}
      ></iframe>
    </ScrollableAnchor>
  );
}

export default withStyles(styles)(PdfIframe);
