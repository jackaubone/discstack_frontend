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
    <div id="items-show" className="card bg-dark">
    <div className="card-body">
      <div className="card-title">
      <h2>{item.name}</h2>
      </div>
      <div className="card-subtitle mb-2 text-muted">
      <h3><u>{item.artist}</u></h3>
      </div>
    <ul className="list-group list-group-flush">
    <ul className="list-group-item bg-dark text-light col-sm-3">
      Tags:{item.genres?.map((genre, idx) => (
         <li key={idx} className="list-group-item bg-dark text-light"> {genre.name} </li>
      ))}
      </ul>
      <div className="list-group-item bg-dark text-light">
      ReleaseDate:{item.release_date}
      </div>
      <div className="list-group-item bg-dark text-light">
      Label:{item.label}
      </div>
      <div className="list-group-item bg-dark text-light">
      ID:{item.id}
      </div>
      <div className="list-group-item bg-dark text-light">
      Description:{item.description}
      </div>
      <div className="card-body">
      <img src={item.image_url} />
      </div>

      
      </ul>

      <a href="#" className="btn btn-warning w-25 mb-4" onClick={() => setIsListAddVisible(true)}> Add To List </a>
      
      <Modal show={isListAddVisible} onClose={() => setIsListAddVisible(false)}>
        <ListAdd item={item} />
      </Modal>

    <div className="list-group">
      Reviews &#40;{item.review_count}&#41; :
      <ul className='list-group-flush'>{item.reviews?.map((review, idx) => (
        <ul className="list-group-item bg-dark text-light mb-2">
         <p key={idx}> 
         Rating: {review.rating}/10
         <br />
         {review.review_body}
          </p>
          </ul>
      ))}
      </ul>
      </div>


      </div>
    </div>
  )
}
