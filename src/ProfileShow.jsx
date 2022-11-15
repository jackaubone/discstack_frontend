import axios from "axios";
import { useState, useEffect } from "react";


export function ProfileShow() {

const [profile, setProfile] = useState({});
  const test = localStorage.getItem("user_id");
  const handleUserInfo = () => {
    axios.get("http://localhost:3000/users/" + test + ".json").then((response) => {
      console.log(response.data);
      setProfile(response.data);
    });
  };
  console.log(profile);
  console.log(localStorage)
  useEffect(handleUserInfo, []);

console.log(localStorage.getItem(profile))

  return(true)

}