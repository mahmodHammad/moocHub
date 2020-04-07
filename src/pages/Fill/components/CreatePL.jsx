import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function CreatePL({ handlePlayListName, handleCreatePlayList }) {
  return (
    <div className="createPlayList">
      <TextField
        fullWidth
        size="small"
        placeholder="PlayList Name"
        name="create a new PlayList"
        label="Enter new Playlist's name"
        onChange={handlePlayListName}
      />
      <Button variant="contained" onClick={handleCreatePlayList}>
        Create a PlayList
      </Button>
    </div>
  );
}
