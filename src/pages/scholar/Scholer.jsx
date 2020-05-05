import React, { Component } from 'react'
import scholar from "google-scholar"



export default class Scholer extends Component {
    componentDidMount() {
        console.log("searching>>>")
        scholar.search("chairmouse").then(e=>console.log(e))
        scholar.search("signal" ).then(e=>{
            console.log(e)
        }).catch(err=>console.log(err))
  
}

    render() {
        return (
            <div>
                Hello Mother fucker 
            </div>
        )
    }
}
