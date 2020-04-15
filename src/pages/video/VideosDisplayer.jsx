import React, { Component } from "react";
import ContentDisplayer from "../../core/Content/ContentDisplayer";
import axios from "axios";
export default class VideosDisplayer extends Component {
  state = {
    subject: {},
    PrimarySliderSelectedIndex: false,
    content: false,
    selectedVideo: false,
    loading: false,
    divided: []
  };

  handlePrimeTabClick = index => {
    this.setState({
      PrimarySliderSelectedIndex: index
    });
  };

  loadVideos = subjectId => {
    this.setLoading(true);
    axios
      .get(
        `https://us-central1-electrical2nd-2020.cloudfunctions.net/api/subject/${subjectId}`
      )
      .then(daat => {
        this.setLoading(false);

        const videos = daat.data;
        let playlists = Object.keys(videos);
        let content = playlists.map(pl => {
          let name = pl;
          let value = videos[pl];
          return { name, value };
        });

        this.setState({ content, loading: false });
      })
      .catch(err => {
        alert("WE can not load this video right now!")
        console.log(err);
      });
  };

  loadSubject = id => {
    this.setState({ loading: true, PrimarySliderSelectedIndex: false });
    this.loadVideos(id);
  };

  setLoading = loading => {
    this.setState({ loading });
  };

  componentDidMount() {
    const name = this.props.match.params.subjectName;
    let id = this.props.match.params.subjectId;
    // take this id and make an HTTTP request to get data
    const subject = { name, id };
    let divided = this.props.location.state.divided;
    this.setState({ subject, divided });

    if (divided === undefined) divided = [];
    // wil be the last selected instead of the first index
    else if (divided[0] !== undefined) id = divided[0].id;

    this.loadVideos(id);
  }

  render() {
    const {
      content,
      subject,
      PrimarySliderSelectedIndex,
      loading,
      divided
    } = this.state;
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
          divided={divided}
        />
      </div>
    );
  }
}
