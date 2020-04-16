import React from "react";
import TextField from "@material-ui/core/TextField";
export default function PlFields({ order, inputOrder, handleChange, fields }) {
  return (
    <div className="playlistFields">
      {fields.map(f => (
        <TextField
          key={f[0]}
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
