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
    <div> 
          <br/>
          {list.list_title}
          <br/>
          <img src={list.list_image} width="200" height="200" />
          <br/>
          {list.list_desc}
          <br/>

         
            {list.items?.map((item, idx) =>
            (

              <div key={idx}>
                <br/>
                {idx+1}. {item.name} 
                <br/>
                Artist:{item.artist}
                 <br/>
                <Link to={'/items/'+item.id}><img src={item.image_url} width="300" height="300" /></Link>
              </div>
            ))}
          
          
          

    </div>
  )

}