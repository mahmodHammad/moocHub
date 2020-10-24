// works form window routing not hash routing
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import IdtoUrl from "../../../helper/getPdfUrl";
import ScrollableAnchor from "react-scrollable-anchor";

const styles = {
  root: {
    width: "100%",
    height: "100%",
    zIndex: "3",
  },
  dark: {
    filter: "invert(1) hue-rotate(180deg)",
  },
  container: {
    width: "100%",
    height: "100%",
    background: "rgba(105, 104, 104, 0.25)",
  },
  loading: {
    position: "relative",
    top: "50%",
    zIndex: "-1",
  },
};

function PdfIframe({ pdfId, classes, mode }) {
  const fileurl = IdtoUrl(pdfId);

  return (
    <ScrollableAnchor id={pdfId}>
      {/* {console.log("mode is: ", mode)} */}
      <div className={`${classes.container}`}>
        {/* <div className={classes.loading}>Loading... </div> */}
        <iframe
          title="lecture"
          className={`${classes.root} ${mode === "dark" ? classes.dark : ""}`}
          frameBorder="0"
          src={fileurl.displayPdf}
        ></iframe>
      </div>
    </ScrollableAnchor>
  );
}

export default withStyles(styles)(PdfIframe);
