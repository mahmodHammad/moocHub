import React, { Component } from "react";
import Video from "../../core/Video/Video";
export default class VideosDisplayer extends Component {
  state = {
    videos: false
  };
  componentDidMount() {
    const videos = this.props.location.state.videos;
    console.log(this.props.location.state.videos);
    this.setState({ videos });
  }

  render() {
    console.log("frin state", this.state.videos);
    const { videos } = this.state;
    return (
      <div>
        {videos !== false ? (
          <div>
            <h3>{videos.title}</h3>

            {videos.value.map(v =>
              v.value.map(vid => (
                <div>
                  <Video url={vid.id} goto={vid.goto} />
                  <h1>{vid.title}</h1>
                </div>
              ))
            )}
          </div>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    );
  }
}
