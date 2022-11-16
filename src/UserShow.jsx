import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Link} from "react-router-dom"

export function UserShow() {

  let { id } = useParams();
  const [user, setUser] = useState({});
  const user_id = localStorage.getItem("user_id");

  const handleShowUser = () => {
    console.log(id)
    axios.get(`http://localhost:3000/users/${id}.json`).then((response) => {
      console.log(response.data);
      setUser(response.data);
    });
  };
  if (id === user_id){
    window.location.href = "/profile";
  } else {
    useEffect(handleShowUser, []);
  }
  


  return (
    
    <div>
      <h5>{user.name}'s Profile</h5>
      <img src={user.image_url} width="100" height="100" />
      <br/>
      <h3>{user.name}'s Lists</h3>

      {user.lists?.map((list, idx) =>
      (
          <div key={idx}> 
          <Link to={`/lists/${list.id}`}>{list.list_title}</Link>
          <br/>
          <Link to={`/lists/${list.id}`}><img src={list.list_image} width="200" height="200" /></Link>
          
          <br/>
          {list.list_desc}
          <br/>
          </div>
      ))}

      <h5>{user.name}'s Reviews</h5>

     {user.reviews?.map((review, idx) =>
      (
        <div key={idx}>
           <p>Rating: {review.rating} <br />
           Comment: {review.review_body}</p>
         </div>
      ))}


    </div>
  )
}
