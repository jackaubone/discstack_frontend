import {Link} from "react-router-dom";
import axios from "axios"
import { useState, useEffect } from "react"

export function UserIndex(){

  const [users, setUsers] = useState([]);

  const handleIndexUsers = () => {
    axios.get("http://localhost:3000/users.json").then((response) => {
      console.log(response.data);
      setUsers(response.data);
    });
  };

  useEffect(handleIndexUsers, []);
 
  return (
    <div>
      <h3>All Users</h3>
      {users.map((user) => (
        <div key={user.id}> 
        <p>
          <Link to={"/users/"+user.id}>{user.name}</Link>
          <br/>
          <Link to={"/users/"+user.id}><img src={user.image_url} width="100" height="100"/> </Link>
          </p>
        </div>
      ))}
    </div>
  )

  
}