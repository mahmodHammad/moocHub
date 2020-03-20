import React from "react";
import Button from "@material-ui/core/Button";
import CropIcon from "@material-ui/icons/Crop";
import CloseIcon from "@material-ui/icons/Close";

export default function Pause({
  handleVideoPin,
  isPinned,
  goto,
  url,
  handlePin,
  played
}) {
  return (
    <Button
    className="cont"
    onClick={() => {
      handleVideoPin(url, goto ,played);
      handlePin(true);
      console.log("Played",played)
      }}
      size="small"
    >
      {isPinned ? <CloseIcon /> : <CropIcon />}
    </Button>
  );
}
