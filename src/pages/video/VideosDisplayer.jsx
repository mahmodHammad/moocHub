import React, { Component } from "react";
import Video from "../../core/Video/Video";
import Button from "@material-ui/core/Button";

export default class VideosDisplayer extends Component {
  state = {
    videos: false,
    selectedVideo: false
  };
  componentDidMount() {
    const videos = this.props.location.state.videos;
    console.log(this.props.location.state.videos);
    this.setState({ videos });
  }

  render() {
    console.log("frin state", this.state);
    const { videos, selectedVideo } = this.state;
    return (
      <div>
        {videos !== false ? (
          <div>
            <h3>{videos.title}</h3>

            {videos.value.map(v => (
              <div>
                <h1>{v.title}</h1>
                {v.value.map(vid => (
                  <Button
                    variant="outlined"
                    onClick={() => this.setState({ selectedVideo: vid })}
                  >
                    {vid.title}
                  </Button>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <h2>Loading...</h2>
        )}

        {selectedVideo !== false && (
          <Video url={selectedVideo.id} goto={selectedVideo.goto} />
        )}
      </div>
    );
  }
}
