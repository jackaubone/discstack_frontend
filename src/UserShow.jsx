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
    
    <div className='card bg-dark'>
      <div className='card-body'>
      <h3 className='card-title'>{user.name}'s Profile</h3>
      <div className='card-img-top'>
      <img src={user.image_url} width="100" height="100" />
      </div>


      
      <div className='card bg-dark'>
        
      <h3 className='card-title'>{user.name}'s Lists</h3>
      <div className='row'>
      
      {user.lists?.map((list, idx) =>
      (   
          
          <div key={idx} className="card col-sm-3 bg-dark"> 
          <div className='card-img-top text-center'>
          <Link to={`/lists/${list.id}`}><img src={list.list_image} width="200" height="200" /></Link>
          </div>
          <div className='text-center'>
          <Link to={`/lists/${list.id}`} className="btn text-light border-light w-20">{list.list_title}</Link>
          </div>
          <div className='card-footer text-center'>
          {list.list_desc}
          </div>
          </div>
          
      ))}
      </div>
      
      </div>

      <h5>{user.name}'s Reviews</h5>

     {user.reviews?.map((review, idx) =>
      (
        <div key={idx}>
           <p>Rating: {review.rating} <br />
           Comment: {review.review_body}</p>
         </div>
      ))}

        </div>
    </div>
  )
}
