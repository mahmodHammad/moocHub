////////  ////////
import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import MainSlide from "../components/MainSlide";
import SecondarySlide from "../components/SecondarySlide";
import DisplayCard from "../components/DisplayCard";
import Pdf from "../components/PdfIframe";
import getFiles from "../helper/initGapi";
import DisplayComunityName from "../components/DisplayComunityName";
import API_KEY from "../config/gapi";

class Home extends Component {
  state = {
    subjectName: "",
    folderid: false,
    content: [
      {
        actualContent: false
      }
    ],
    PrimarySliderSelectedIndex: false,
    SecondarySliderSelectedIndex: false
  };

  //////// get files after clicking on prime slide  ////////
  handlePrimeTabClick = index => {
    // actualContent ===false ? make http request to get actual content
    // rqueast take some time ...
    // after objain ...  set state actual content
    this.state.content[index].actualContent === false &&
      getFiles(this.state.content[index].folderid).then(theactualContent => {
        let [content] = [this.state.content];
        content[index].actualContent = theactualContent.files;
        this.setState({ content });
      });

    this.setState({
      PrimarySliderSelectedIndex: index,
      SecondarySliderSelectedIndex: false
    });
  };

  handleSecondaryTabClick = index => {
    this.setState({ SecondarySliderSelectedIndex: index });
  };

  loadSubjects = subjects => {
    let content = [];
    subjects.map(
      s =>
        s.mimeType === "application/vnd.google-apps.folder" && content.push(s)
    );
    console.log(content);
    this.setState({ content });
  };
  
  componentDidMount() {
   const subjectName = this.props.match.params.subjectName
   const folderid=this.props.match.params.subjectId
   
   this.setState({subjectName ,folderid})
   

      getFiles(folderid).then(folders =>{
        console.log(folders)
        // this.setState({content:folders.files})
      }
      );
  }
  
  render() {
    console.log(this)
    console.log("folderID is : " , this.props.match.params.subjectId)
    console.log("subjectName is : " , this.props.match.params.subjectName)
    return (<div>
      {this.state.subjectName}

    </div>)
    //////// Destructure from state ////////
    // const {
    //   content,
    //   name,
    //   PrimarySliderSelectedIndex,
    //   SecondarySliderSelectedIndex
    // } = this.state;
    // return (
    //   <Grid container alignContent="center" justify="center">
    //     {/******  display subject name  ******/}

    //     <Grid item sm={12}>
    //       <DisplayComunityName name={name} />
    //     </Grid>

    //     {/******  display MainSlider   ******/}


    //       <Grid item xs={11}>
    //         <MainSlide
    //           content={content}
    //           selectedIndex={PrimarySliderSelectedIndex}
    //           handleClick={this.handlePrimeTabClick}
    //         />
    //       </Grid>
    //     {/******  display Secondary slider depending on the selected prime  ******/}

    //     <Grid item xs={12}>
    //       {PrimarySliderSelectedIndex !== false &&
    //         content[PrimarySliderSelectedIndex].actualContent !== false && (
    //           <SecondarySlide
    //             content={content[PrimarySliderSelectedIndex].actualContent}
    //             handleClick={this.handleSecondaryTabClick}
    //             selectedIndex={SecondarySliderSelectedIndex}
    //           />
    //         )}
    //     </Grid>

    //     {/******  display content depending on the selected secondary  ******/}

    //     {SecondarySliderSelectedIndex !== false && (
    //       <React.Fragment>
    //         {/* <DisplayCard
    //           content={
    //             content[this.state.PrimarySliderSelectedIndex].actualContent[
    //               SecondarySliderSelectedIndex
    //             ].name
    //           }
    //         /> */}
    //         <Pdf
    //           fileId={
    //             content[this.state.PrimarySliderSelectedIndex].actualContent[
    //               SecondarySliderSelectedIndex
    //             ].id
    //           }
    //         />
    //       </React.Fragment>
    //     )}
    //   </Grid>
    // );
  }
}

export default Home;
