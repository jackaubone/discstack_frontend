import {Link} from "react-router-dom";
import axios from "axios"
import { useState, useEffect } from "react"

export function DiscogTest() {

  const [discs, setDiscs] = useState([]);

  const handleIndexDiscs = () => {
    axios.get("https://api.discogs.com/releases/249504", { headers: {"User-Agent": 'FooBarApp/3.0'}}).then((response) => {
      console.log(response.data);
      setDiscs(response.data);
    });
  };

  useEffect(handleIndexDiscs, [])




}