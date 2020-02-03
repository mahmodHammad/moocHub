import React, { Component } from "react";
import { Typography, Paper, Tabs, Tab, AppBar, Grid } from "@material-ui/core";

class Home extends Component {
  state = {
    name: "2nd - Electrical",
    content: [
      {
        outerTitle: "lectures",
        innerTitle: "Dr : m.Hammad",
        folderID: [
          {
            title: "Lec1",
            pdf:
              "https://drive.google.com/file/d/10BZCBv5srn366ho6Qb1i55rQ8PVqQBro/view"
          },
          {
            title: "Lec2",
            pdf:
              "https://drive.google.com/file/d/10BZCBv5srn366ho6Qb1i55rQ8PVqQBro/view"
          },
          {
            title: "Lec3",
            pdf:
              "https://drive.google.com/file/d/10BZCBv5srn366ho6Qb1i55rQ8PVqQBro/view"
          },
          {
            title: "Lec4",
            pdf:
              "https://drive.google.com/file/d/10BZCBv5srn366ho6Qb1i55rQ8PVqQBro/view"
          },
          {
            title: "Lec5",
            pdf:
              "https://drive.google.com/file/d/10BZCBv5srn366ho6Qb1i55rQ8PVqQBro/view"
          },
          {
            title: "Lec6",
            pdf:
              "https://drive.google.com/file/d/10BZCBv5srn366ho6Qb1i55rQ8PVqQBro/view"
          },
          {
            title: "Lec7",
            pdf:
              "https://drive.google.com/file/d/10BZCBv5srn366ho6Qb1i55rQ8PVqQBro/view"
          },
          {
            title: "Lec8",
            pdf:
              "https://drive.google.com/file/d/10BZCBv5srn366ho6Qb1i55rQ8PVqQBro/view"
          },
          {
            title: "Lec9",
            pdf:
              "https://drive.google.com/file/d/10BZCBv5srn366ho6Qb1i55rQ8PVqQBro/view"
          },
          {
            title: "Lec10",
            pdf:
              "https://drive.google.com/file/d/10BZCBv5srn366ho6Qb1i55rQ8PVqQBro/view"
          },
          {
            title: "Lec11",
            pdf:
              "https://drive.google.com/file/d/10BZCBv5srn366ho6Qb1i55rQ8PVqQBro/view"
          }
        ]
      },
      {
        outerTitle: "Notes",
        innerTitle: "Eng : mo salah",
        folderID: "https://betengan"
      },
      {
        outerTitle: "videos",
        innerTitle: "recorded lectures",
        folderID: "https://betengan"
      },
      {
        outerTitle: "revition",
        innerTitle: "revisions",
        folderID: "https://betengan"
      },
      {
        outerTitle: "summary",
        innerTitle: "Eng : mo salah",
        folderID: "https://betengan"
      }
    ],
    selected:null
  };

  handleTabClick=(inp)=>{
      console.log(inp)
  }
  render() {
    return (
      <Grid container alignContent="center" justify="center">
          <Typography variant="h3" align="center">
            {this.state.name}
          </Typography>

            <Paper position="static" centered="true">
              <Tabs
                value={0}
                textColor="inherit"
                variant="scrollable"
                scrollButtons="on"
                justify="center"
              >
                {this.state.content.map((content ,N) => (
                  <Tab value={N} key={N} label={content.outerTitle} />
                ))}
              </Tabs>
            </Paper>

        <AppBar position="static" centered="true" color="secondary">
          <Tabs
            value={1}
            textColor="inherit"
            variant="scrollable"
            scrollButtons="on"
            justify="center"
          >
            {this.state.content[0].folderID.map((content,N) => (
              <Tab value={N} key={N} label={content.title} onClick={()=>this.handleTabClick(content.title)}/>
            ))}
          </Tabs>
        </AppBar>
      </Grid>
    );
  }
}

export default Home;
