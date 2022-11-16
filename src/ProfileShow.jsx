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
      
    <div>
      <h5>{profile.name}'s Profile</h5>
      <img src={profile.image_url} width="100" height="100" />
      <br/>
      <h3>Your Lists</h3>

      <a href="#" className="btn btn-primary" onClick={() => setIsListNewVisible(true)}>New List</a>


      <Modal show={isListNewVisible} onClose={() => setIsListNewVisible(false)}>
        <ListNew />
      </Modal>


      {showedLists?.map((list, idx) =>
      (
          <div key={idx}> 
          <Link to={`/lists/${list.id}`}>{list.list_title}</Link>

          <a href="#" className="btn btn-primary" onClick={() => handleShowListEdit(idx)}>Edit List</a>

          <Modal show={isListEditVisible} onClose={() => setIsListEditVisible(false)}>
            <ListEdit list={currentList} onUpdateList={handleUpdateList} onDestroyList={handleDestroyList}/>
          </Modal>

          <br/>
          <Link to={`/lists/${list.id}`}> <img src={list.list_image} width="200" height="200" /> </Link>
          <br/>
          {list.list_desc}
          <br/>
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
  )
  }

