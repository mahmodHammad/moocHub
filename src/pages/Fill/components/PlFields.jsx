import React from "react";
import TextField from "@material-ui/core/TextField";
export default function PlFields({ order, inputOrder, handleChange, fields }) {
  return (
    <div>
      {fields.map(f => (
        <TextField
          required
          name={f[0]}
          label={f[0]}
          onChange={e => handleChange(e, order, inputOrder)}
          value={f[1]}
        />
      ))}
    </div>
  );
}