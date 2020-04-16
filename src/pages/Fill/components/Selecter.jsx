import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

export default function Selecter({ options, handleSelectChange, label }) {
  console.log("label",label)
  return (
    <div className="Selector">
      <FormControl fullWidth>
        <InputLabel htmlFor={label}>{label}</InputLabel>
        <Select
          fullWidth
          native
          onChange={handleSelectChange}
          inputProps={{
            name: { label },
            id: { label }
          }}
        >
          <option aria-label="None" value="" />
          {options.map(pl => (
            <option key={pl} value={pl}>{pl}</option>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
