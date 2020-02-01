import React, { Component } from 'react'
import Grid  from '@material-ui/core/Grid';
import Subject from './../components/Subject';
class Home extends Component {
  render() {
    return (
        <Grid container spacing={8}>
            <Grid item sm={8} xs={12}>

                <h1>Content</h1>
                <Subject>
                    
                </Subject>
            </Grid>
            <Grid item  sm={4} xs={12}>
                <h2>profile</h2>
            </Grid>
        </Grid>
        )
  }
}

export default Home
