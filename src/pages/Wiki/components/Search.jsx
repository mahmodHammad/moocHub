import React from "react";
import TextField from "@material-ui/core/TextField";
export default function Search({
  handleChange,
  placeholder
}) {
  return (
      <div className="wikisearch">
        <TextField
          name="wiki"
          label={placeholder}
          variant="outlined"
          onChange={handleChange}
        />
      </div>
  );
}
