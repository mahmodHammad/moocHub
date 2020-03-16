import React, { Component } from 'react'

export default class VideosDisplayer extends Component {
    state={
        videos:false
    }
    componentDidMount() {
        const videos = this.props.location.state.videos
        console.log(this.props.location.state.videos)
      this.setState({videos})
    }
    
    render() {
        console.log("frin state"  ,this.state.videos)
        const {videos} = this.state
        return (
            <div>
                {videos!==false? <div>
                     <h3>{videos.title}</h3>


                {videos.value.map(v=><h5>{v.title}</h5>)}
                </div>:<h2>Loading...</h2>}
               
               
            </div>
        )
    }
}
