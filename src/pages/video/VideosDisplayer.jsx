import React, { Component } from "react";
import Video from "../../core/Video/Video";
import Button from "@material-ui/core/Button";
import ContentDisplayer from "../../core/Content/ContentDisplayer";

export default class VideosDisplayer extends Component {
  state = {
    subject: {},
    PrimarySliderSelectedIndex:false,
    content: false,
    selectedVideo: false
  };

  handlePrimeTabClick = index => {
    this.setState({
      PrimarySliderSelectedIndex: index
    });
  };


  componentDidMount() {
    const name = this.props.match.params.subjectName;
    const id = this.props.match.params.subjectId;
    const subject = { name, id };
    this.setState({ subject });

    const videos = this.props.location.state.videos;
    console.log("video ---->",this.props.location.state.videos);
    this.setState({ content:videos });
  }

  render() {
    console.log("frin state", this.state);
    const {  content ,subject ,PrimarySliderSelectedIndex} = this.state;
    const {  todo ,addToTodo ,removeFromTodo   } = this.props;
    return (
      <div>
        <ContentDisplayer
        subject={subject}
        content={content}
        PrimarySliderSelectedIndex={PrimarySliderSelectedIndex}
        handlePrimeTabClick={this.handlePrimeTabClick}
        todo={todo}
        addToTodo={addToTodo}
        removeFromTodo={removeFromTodo}
      />
      </div>
    );
  }
}

let contet = [
  {
    name: "sections",
    id: "aaa",
    value: [
      { name: "section  1", id: "id of sec 1 ", goto: ["ffffff"] },
      { name: "section  2", id: "id of sec 2 ", goto: ["bbbbbb"] }
    ]
  }
];
{
  /* {videos !== false ? (
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
          )} */
}
