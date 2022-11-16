import {Link} from "react-router-dom";
import axios from "axios"
import { useState, useEffect } from "react"
import { UserShow } from "./UserShow";

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

      <div className="row">
      {lists.map((list) => (
        <div key={list.id} className="card bg-dark col-sm-3">
          <li>
          <Link to={"/lists/"+list.id}>{list.list_title}</Link> by <Link to={"/users/"+list.user_id}>{list.author.name}</Link>
          <br/>
          <Link to={"/lists/"+list.id}><img src={list.list_image} width="200" height="200"/></Link>
          <br/><br/>
          </li>
        </div>

      ))}
    </div>

    </div>
  )

}