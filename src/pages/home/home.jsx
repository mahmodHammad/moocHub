//////// take array of subjects -> displaythem throgh DisplayObject Component  ////////
import DisplaySubjects from "./components/DisplaySubjects";
import Typography  from "@material-ui/core/Typography";
import Grid  from "@material-ui/core/Grid";
import React, { Component } from 'react'
import getFiles from "../../helper/getfiles";
import loadApi from "../../helper/loadApi";

export default class home extends Component {
state={
  name:"",
  id:"",
  content:[]
}
 
  componentDidMount() {
    const name = this.props.match.params.subjectName;
    const id = this.props.match.params.subjectId;

    this.setState({ name, id });
    console.log(name , id)

    loadApi().then(() =>
      getFiles(id, "folder").then(folders => {
        this.setState({ content: folders.files });
      })
    );
    console.log(this.state)
  }

  render() {
    const {content} = this.state
    return (
      <Grid container justify="center" spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            {this.state.name}
          </Typography>
        </Grid>
  
        <Grid container item xs={9} md={10} spacing={4}>
          {content.map((folder, N) => {
            return <DisplaySubjects folder={folder} key={folder.id || N} mdWidth={content.length%2===1?(N === content.length-1 ?12:6):6} />;
          })}
        </Grid>
      </Grid>
    );
  }
}
