import React from "react";
import Slider from "@material-ui/core/Slider";

export default function ProgressBar({
  handleSeekChange,
  handleSeekMouseUp,
  played
}) {
  return (
    <Slider
      id="slider"
      color="secondary"
      value={played * 100}
      onChange={handleSeekChange}
      onMouseUp={handleSeekMouseUp}
    />
  );
}
