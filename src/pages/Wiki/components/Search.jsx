import React from "react";
import TextField from "@material-ui/core/TextField";
export default function Search({ handleChange, placeholder ,FS}) {
  return (
    <div className="wikisearch">
      <TextField
        autoFocus
        name="wiki"
        label={placeholder}
        variant="outlined"
        onChange={handleChange}
        fullWidth={FS}
      />
    </div>
  );
}
