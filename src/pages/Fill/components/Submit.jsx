import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default function Submit({submit}) {
  return (
    <div className="submit">
      <Button fullWidth variant="contained" color="secondary" onClick={submit}>
        Submit
      </Button>
      <br/>
      <Typography color="secondary" variant="span" component="span">
        Do not Forget to submit before selecting an other subject
      </Typography>

    </div>
  );
}
