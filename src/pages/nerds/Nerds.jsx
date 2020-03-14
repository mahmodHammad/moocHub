import React, { useState } from "react";
import Scroll from "./components/Scoll";
import DisplayContent from "./components/DisplayContent";
import Typography from "@material-ui/core/Typography";
import Video from "../../core/Video/Video";
import videoContent from "../../core/Video/vidData";
import Button from "@material-ui/core/Button";

function renderLoadButton(url, label, index) {
  return (
    <div className="content-buttons" key={url}>
      <Button
        variant="contained"
        color="primary"
        onClick={function() {
          return <Video videoContent={videoContent[index]} />;
        }}
      >
        {label}
      </Button>
    </div>
  );
}

export default function Nerds({ todo, removeFromTodo }) {
  const [opened, setopened] = useState([]);
  const [At, setAt] = useState(0);
  console.log("oopen", opened);

  return (
    <div>
      <Scroll opened={opened} At={At} setAt={setAt} />

      <Video url={videoContent[0].url} goto={videoContent[0].goto}/>
      {videoContent.map((video, index) => {
        return renderLoadButton(video.url, video.title, index);
      })}

      {todo.length ? (
        <DisplayContent
          todo={todo}
          removeFromTodo={removeFromTodo}
          setopened={setopened}
          opened={opened}
        />
      ) : (
        <div className="warning">
          <Typography variant="h5">Study List Is Empty ! </Typography>
          you should add content first then come again to see it here
        </div>
      )}
    </div>
  );
}
