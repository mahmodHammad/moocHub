import React from "react";
import { withStyles } from "@material-ui/core/styles";
import IdtoUrl from "../helper/getPdfUrl";
const styles = {
  topmargin: {
    margin: "20px auto 0 auto"
  },
  width: {
    width: "50%"
  },
  align: {
    textAlign: "center"
  },
  fullwidth:{
      width:"100vw",
      height:"90vh"
  }
};

function PdfIframe({ fileId, classes }) {
  const fileurl = IdtoUrl(fileId);
//   console.log(fileurl)
  return (

      <iframe
      title="lecture"
      className={classes.fullwidth}
        frameBorder="0"
        src={fileurl.displayPdf}
      ></iframe>
  
  );
}

export default withStyles(styles)(PdfIframe);
