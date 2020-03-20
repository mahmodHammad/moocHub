//////// take array of subjects -> displaythem throgh DisplayObject Component  ////////
import DisplaySubjects from "./components/DisplaySubjects";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";


import videos from "../../core/Video/vidData"


export default class home extends Component {
  // searching for the videos goes here ! 
  getVideos =()=>{
    let content = this.props.content
    console.log("videos",content)
    videos.forEach(v=>{
      this.state.content.forEach(c=>{
        if(v.id === c.id){
          console.log("ther's a match ! " , v.title)
          this.setState()
        }
      })
  })
  }

  componentDidMount() {
    // this.getVideos()
    
    const { content } = this.props;

    console.log(content)
  }
  

  render() {
    const communityName = this.props.match.params.subjectName;
    
    const { content } = this.props;

    console.log(content)
    return (
      <React.Fragment>

        <div className="communityLabel">
          <Typography variant="h5" color="primary" align="center">
            {communityName}
          </Typography>
        </div>
        <div className="cardContainer">
          <Grid container justify="center">
            <Grid
              container
              item
              xs={11}
              md={10}
              spacing={4}
              className="cardContent"
            >
              {content.map((folder, N) => {
                return (
                  <DisplaySubjects
                    folder={folder}
                    key={folder.id || N}
                    mdWidth={
                      content.length % 2 === 1
                        ? N === content.length - 1? 12 : 6: 6
                    }
                  />
                );
              })}
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}
