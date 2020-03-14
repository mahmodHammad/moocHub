import React from 'react'
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import  Button  from '@material-ui/core/Button';
export default function Audio({muted,handleMute}) {
    return (
        <Button onClick={handleMute} className="cont">
        {muted ? <VolumeOffIcon /> : <VolumeUpIcon />}
      </Button>
    )
}
