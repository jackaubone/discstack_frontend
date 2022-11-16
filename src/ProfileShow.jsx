import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Modal } from "./Modal";
import { ListNew } from "./ListNew";
import {ListEdit } from "./ListEdit";


export function ProfileShow() {

  const [profile, setProfile] = useState({});
  const [showedLists, setShowedLists] = useState([]);
  const [isListNewVisible, setIsListNewVisible] = useState(false);
  const [isListEditVisible, setIsListEditVisible] = useState(false);
  const [currentList, setCurrentList] = useState({});


  const user_id = localStorage.getItem("user_id");
  const handleUserInfo = () => {
    axios.get("http://localhost:3000/users/" + user_id + ".json").then((response) => {
      console.log(response.data);
      setProfile(response.data);
      setShowedLists(response.data.lists);
    });
  };

  const handleShowListEdit = (id) => {
    setCurrentList(showedLists[id])
    setIsListEditVisible(true)
  }


  const handleUpdateList = (id, params) => {
    axios.patch("http://localhost:3000/lists/"+ id +".json", params).then((response) => {
      console.log("Created List");
      const updatedList = response.data
      setCurrentList(updatedList)
      window.location.href = "/profile";
      setIsListEditVisible(false);
    });
  }


  const handleDestroyList = (target) => {
    axios.delete("http://localhost:3000/lists/" + target.id + ".json").then(()=> {
      setShowedLists(profile.lists.filter((t) => t.id !== target.id));
      console.log("Target Destroyed")
      setIsListEditVisible(false);

      window.location.href = "/profile";
    })
  };


  console.log(profile);
  console.log(localStorage)
  console.log(localStorage.getItem(profile))
  console.log(showedLists)
  console.log(currentList)
  useEffect(handleUserInfo, []);
  

  return (
      
    <div className='card bg-dark'>
    <div className='card-body'>
    <h3 className='card-title'>Your Profile</h3>
    <div className='card-img-top mb-4'>
    <img src={profile.image_url} width="100" height="100" />
    </div>

      <div className='card bg-dark'>
      <h3 className='card-title'>Your Lists</h3>
      <div className="row">

  
      <a href="#" className="btn text-light border-light  mb-4" onClick={() => setIsListNewVisible(true)}>New List</a>


      <Modal show={isListNewVisible} onClose={() => setIsListNewVisible(false)}>
        <ListNew />
      </Modal>

      
      {showedLists?.map((list, idx) =>
      (

          <div key={idx} className="card col-sm-3 bg-dark"> 
          <div className="card-header text-center">
          <Link to={`/lists/${list.id}`} className="btn text-light border-light">{list.list_title}</Link>
          </div>

          <div className="card-img-top text-center mb-4">
          <Link to={`/lists/${list.id}`}> <img src={list.list_image} width="200" height="200" /> </Link>
          </div>
          
          <div className="card-body text-center">
          {list.list_desc}
          </div>

          <div>
          <a href="#" className="btn text-light border-light w-100" onClick={() => handleShowListEdit(idx)}>Edit List</a>
          </div>

          <Modal show={isListEditVisible} onClose={() => setIsListEditVisible(false)}>
            <ListEdit list={currentList} onUpdateList={handleUpdateList} onDestroyList={handleDestroyList}/>
          </Modal>

        
          </div>
      ))}

      <h5>Your Reviews</h5>

    {profile.reviews?.map((review, idx) =>
      (
        <div key={idx}>
          <p>Rating: {review.rating} <br />
          Comment: {review.review_body}</p>
        </div>
      ))}
    </div>
    </div>
    </div>
    </div>
  )
  }

