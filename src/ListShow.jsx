import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Link} from "react-router-dom"

export function ListShow() {

  let { id } = useParams();
  const [list, setList] = useState({});


  const handleShowList = () => {
    axios.get(`http://localhost:3000/lists/${id}.json`).then((response) => {
      console.log(response.data);
      setList(response.data);
    });
  };
  
  useEffect(handleShowList, []);


  return (
    <div className='card bg-dark'> 
          <h2 className='card-title'>
          {list.list_title}
          </h2> 
          <div className='card-subtitle text-muted'>
          by: <Link to={"/users/" + list.user_id}>{list.author?.name}</Link>
          </div>
          
          <img src={list.list_image} width="200" height="200" />
          <br/>
          {list.list_desc}
          <br/>

            <div className='row'>
            {list.items?.map((item, idx) =>
            (

              <div key={idx} className='card col-sm-6 bg-dark'>
                <br/>
                {idx+1}. {item.name} 
                <br/>
                Artist:{item.artist}
                 <br/>
                <Link to={'/items/'+item.id}><img src={item.image_url} width="300" height="300" /></Link>
              </div>
            ))}

            </div>
          
          
          

    </div>
  )

}