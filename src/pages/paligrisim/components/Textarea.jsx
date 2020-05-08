import React from "react";
import TextField from "@material-ui/core/TextField";

export default function Textarea({ handleChange, name, label, value }) {
  return (
    <div className="pali">
      <TextField
        name={name}
        label={label}
        onChange={e => handleChange(e)}
        value={value}
        multiline
        fullWidth
        rowsMax={30}
      />
    </div>
  );
}
