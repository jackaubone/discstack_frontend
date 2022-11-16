import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Modal } from "./Modal";
import {ListAdd} from "./ListAdd";

export function ItemShow() {

  let { id } = useParams();
  const [item, setItem] = useState({});
  const [isListAddVisible, setIsListAddVisible] = useState(false);

  const handleShowItem = () => {
    console.log(id)
    axios.get(`http://localhost:3000/items/${id}.json`).then((response) => {
      console.log(response.data);
      setItem(response.data);
    });
  };
  
  useEffect(handleShowItem, []);

  return (
    
    <div>
      Title:{item.name} 
      <br/>
      Artist:{item.artist}
      <br/>

      Tags:{item.genres?.map((genre, idx) => (
         <li key={idx}> {genre.name} </li>
      ))}
      {console.log(item.genres)}
      ReleaseDate:{item.release_date}
      <br/>
      Label:{item.label}
      <br/>
      ID:{item.id}
      <br/>
      Description:{item.description}
      <br/>
      <img src={item.image_url} />
      <br/>

      <a href="#" className="btn btn-primary" onClick={() => setIsListAddVisible(true)}> Add To List </a>
      <br/>
      <Modal show={isListAddVisible} onClose={() => setIsListAddVisible(false)}>
        <ListAdd item={item} />
      </Modal>
   
      Reviews &#40;{item.review_count}&#41; :{item.reviews?.map((review, idx) => (
         <p key={idx}> 
         Rating: {review.rating}/10
         <br />
         {review.review_body}
          </p>
      ))}
      


      
    </div>
  )
}
