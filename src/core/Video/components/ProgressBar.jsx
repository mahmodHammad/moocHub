import React from "react";
import Slider from "@material-ui/core/Slider";

export default function ProgressBar({
  handleSeekChange,
  handleSeekMouseUp,
  played,
  duration,
  goto
}) {
  console.log(goto);
  let marks = goto.map(e => {
    return { value: (e[1] / duration) * 100, label: "|" };
  });
  console.log(marks);
  return (
    <Slider
      id="slider"
      color="secondary"
      value={(played * 100).toFixed(2)}
      step={0.2}
      valueLabelDisplay="auto"
      marks={marks}
      onChange={handleSeekChange}
      onMouseUp={handleSeekMouseUp}
    />
  );
}
