import React, { Component } from "react";
import Video from "../../core/Video/Video";
import Button from "@material-ui/core/Button";
import ContentDisplayer from "../../core/Content/ContentDisplayer";

export default class VideosDisplayer extends Component {
  state = {
    subject:{},

    videos: false,
    selectedVideo: false
  };
  componentDidMount() {
    const name = this.props.match.params.subjectName;
    const id = this.props.match.params.subjectId;
    const subject = { name, id };
    this.setState({ subject });


    const videos = this.props.location.state.videos;
    console.log(this.props.location.state.videos);
    this.setState({ videos });
  }

  render() {
    console.log("frin state", this.state);
    // const { videos, selectedVideo , content ,subject } = this.state;
    // const {  todo ,addToTodo ,removeFromTodo   } = this.props;
    return (
      <div>
        {/* <ContentDisplayer
        subject={subject}
        content={content}
        PrimarySliderSelectedIndex={PrimarySliderSelectedIndex}
        handlePrimeTabClick={this.handlePrimeTabClick}
        todo={todo}
        addToTodo={addToTodo}
        removeFromTodo={removeFromTodo}
      /> */}
      
      </div>
    );
  }
}

          {/* {videos !== false ? (
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
          )} */}