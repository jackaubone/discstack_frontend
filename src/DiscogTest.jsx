import {Link} from "react-router-dom";
import axios from "axios"
import { useState, useEffect } from "react"



export function DiscogTest() {

  const p4k = require('pitchfork-bnm');

  const [pitchfork, setPitchfork] = useState([]);

  const handleIndexPitchfork = () => {
    axios.get("https://pitchfork.com/reviews/albums").then((response) => {
      console.log(response.data);
      setList(response.data);
    });
  };
    

  useEffect(handleIndexPitchfork, [])


}