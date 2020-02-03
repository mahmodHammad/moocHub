import React, { Component } from "react";
import {
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  ListSubheader,
  Slider
} from "@material-ui/core";
class Login extends Component {
  render() {
    return (
      <div>
        <Grid justify="center" container spacing="2">
          <Grid item>{/* <VolumeDown /> */}</Grid>
          <Grid item xs>
            <Slider value={12} aria-labelledby="continuous-slider" color="secondary"/>
          </Grid>
        </Grid>

        <GridList cellHeight={400} cols={4} spacing={0}>
          <GridListTile key="Subheader" cols={4} style={{ height: "auto" }}>
            <ListSubheader>December</ListSubheader>
          </GridListTile>
          <GridListTile>
            <img
              src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
              alt="ass"
            />
            <GridListTileBar title="Title" subtitle="subtitle" />
          </GridListTile>
          <GridListTile cols={1} rows={1}>
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
              alt="ass"
            />
          </GridListTile>{" "}
          <GridListTile>
            <img
              src="https://images.unsplash.com/photo-1541233349642-6e425fe6190e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
              alt="ass"
            />
          </GridListTile>{" "}
          <GridListTile>
            <img
              src="https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687"
              alt="ass"
            />
          </GridListTile>{" "}
          <GridListTile>
            <img
              src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="ass"
            />
          </GridListTile>{" "}
          <GridListTile cols={2}>
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
              alt="ass"
            />
          </GridListTile>{" "}
          <GridListTile cols={3}>
            <img
              src="https://images.unsplash.com/photo-1541233349642-6e425fe6190e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
              alt="ass"
            />
          </GridListTile>{" "}
          <GridListTile>
            <img
              src="https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687"
              alt="ass"
            />
          </GridListTile>{" "}
          <GridListTile cols={4}>
            <img
              src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="ass"
            />
          </GridListTile>{" "}
          <GridListTile cols={1}>
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
              alt="ass"
            />
          </GridListTile>{" "}
          <GridListTile>
            <img
              src="https://images.unsplash.com/photo-1541233349642-6e425fe6190e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
              alt="ass"
            />
          </GridListTile>{" "}
          <GridListTile>
            <img
              src="https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687"
              alt="ass"
            />
          </GridListTile>{" "}
          <GridListTile>
            <img
              src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="ass"
            />
          </GridListTile>
        </GridList>
      </div>
    );
  }
}

export default Login;
