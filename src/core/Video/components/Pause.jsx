import React from 'react'
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import Button from "@material-ui/core/Button";

export default function Pause({handlePlayPause ,playing}) {
    return (
        <Button
        className="cont"
        onClick={handlePlayPause}
        size="small"
      >
        {playing ? <PauseIcon /> : <PlayArrowIcon />}
      </Button>
    )
}
