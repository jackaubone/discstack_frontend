import {Link} from "react-router-dom";
import axios from "axios"
import { useState, useEffect } from "react"

export function ListIndex(){

  const [lists, setLists] = useState([]);

  const handleIndexLists = () => {
    axios.get("http://localhost:3000/lists.json").then((response) => {
      console.log(response.data);
      setLists(response.data);
    });
  };

  useEffect(handleIndexLists, []);
 
  return(
    <div id="lists-index">
      <h3> Lists </h3>  
      {lists.map((list) => (
        <div key={list.id}>
          <li>
          <Link to={"/lists/"+list.id}>{list.list_title}</Link>
          <br/>
          <Link to={"/lists/"+list.id}><img src={list.list_image} width="200" height="200"/></Link>
          <br/><br/>
          </li>
        </div>

      ))}
    </div>
  )

}