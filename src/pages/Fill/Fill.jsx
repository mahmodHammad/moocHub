import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

export default class Fill extends Component {
  render() {
    return (
      <FormControl >
        <InputLabel htmlFor="age-native-simple">Age</InputLabel>
        <Select
          native
          onChange={(e)=>console.log("changes=d",e)}
          inputProps={{
            name: "age",
            id: "age-native-simple"
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>

        </Select>
        <TextField label="enter text here"/>
<Button variant="contained" color="primary">Submit</Button>
      </FormControl>
    );
  }
}
