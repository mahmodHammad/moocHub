import React, { Component } from "react";
import ContentDisplayer from "../../core/Content/ContentDisplayer";
import axios from "axios";
export default class VideosDisplayer extends Component {
  state = {
    subject: {},
    PrimarySliderSelectedIndex: false,
    content: false,
    selectedVideo: false,
    loading:false
  };

  handlePrimeTabClick = index => {
    this.setState({
      PrimarySliderSelectedIndex: index
    });
  };

  loadVideos = subjectId => {
    this.setLoading(true)
    axios
      .get(
        `https://us-central1-electrical2nd-2020.cloudfunctions.net/api/videos/${subjectId}`
      )
      .then(daat => {
    this.setLoading(false)

        const videos = daat.data;
        let playlists = Object.keys(videos);
        let content = playlists.map(pl => {
          let name = pl;
          let value = videos[pl];
          return { name, value };
        });
        console.log("content", content);
        console.log(daat.data);
        this.setState({ content, loading: false });
      })
      .catch(err => {
        console.log(err);
      });
  };

  loadSubject = () => {
    console.log("loadSubject");
  };

  setLoading = loading => {
    this.setState({ loading });
  };

  componentDidMount() {
    const name = this.props.match.params.subjectName;
    const id = this.props.match.params.subjectId;
    // take this id and make an HTTTP request to get data

    const subject = { name, id };
    this.setState({ subject });

    this.loadVideos(id);
  }

  render() {
    const { content, subject, PrimarySliderSelectedIndex,loading } = this.state;
    const { todo, addToTodo, removeFromTodo, handleVideoPin } = this.props;
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
          isVideo={true}

          loading={loading}
          handleVideoPin={handleVideoPin}
          loadSubject={this.loadSubject}
          setLoading={this.setLoading}
          divided={[]}
        />
      </div>
    );
  }
}
