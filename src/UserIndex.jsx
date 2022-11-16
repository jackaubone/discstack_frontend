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
    <div className="row">
      <h3>All Users</h3>
      {users.map((user) => (
        <div key={user.id} className="card bg-dark col-sm-3"> 
         <div className="card-img-top text-center">
          <Link to={"/users/"+user.id}><img src={user.image_url} width="200" height="200"/> </Link>
          </div>
          <div className="card-body text-center">
          <Link to={"/users/"+user.id} className="btn btn-lg text-light border-light w-100">{user.name}</Link>

          </div>
          </div>
          
      ))}
    <div className="mb-4"></div>
    </div>
  )

  
}