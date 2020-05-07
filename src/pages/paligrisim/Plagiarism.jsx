import React, { Component } from 'react'
import Grid from "@material-ui/core/Grid";
import axios from "axios";

const key = "49dd31f486204254b3dc23dde8c5304c";
const config = {
  headers: {
    "Ocp-Apim-Subscription-Key": key
  }
};
export default class Paligrism extends Component {
    similarityCheck = (s1, s2) => {
        const url =
          " https://api.labs.cognitive.microsoft.com/academic/v1.0/similarity?";
        const s11 =
          "s1=Using complementary priors, we derive a fast greedy algorithm that can learn deep directed belief networks one layer at a time, provided the top two layers form an undirected associative memory";
        const s22 =
          "s2=Using complementary priors, we derive a fast greedy algorithm that can you learn deep directed belief networks one layer at a time, provided the top two layers form an undirected associative memory";
        axios
          .get(url + s11 + "&" + s22, config)
          .then(r => {
            console.log(r);
          })
          .catch(err => {
            console.log(err);
          });
      };
    
    render() {
        return (
            <div>
               
            </div>
        )
    }
}