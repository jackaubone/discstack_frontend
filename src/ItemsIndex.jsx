import { Link } from "react-router-dom";

export function ItemsIndex(props) {

  return (
    <div id="items-index">
      <h2>All</h2>
      {props.items.map((item) => (
        <div key={item.id}>
          <h5>{item.name}</h5>
            {item.artist} 
            <br/>
            {item.label} 
            <br />
            {item.release_date}
            <br />
            {item.description}
            <br />
          
          <Link to={"/items/"+item.id}><img src={item.image_url} width="300" height="300" /></Link>
           <br />
          <Link to={'/items/'+item.id}>Show More</Link>
        </div>
      ))}
    </div>
  )
}