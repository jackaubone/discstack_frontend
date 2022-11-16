import { Link } from "react-router-dom";

export function ItemsIndex(props) {

  return (
    
      <div id="items-index">
      <h2>All</h2>
      <div className="row">
      {props.items.map((item) => (
        <div key={item.id} className="card bg-dark col-sm-3">
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
            <div className="card-subtitle mb-2 text-muted">
              <u>{item.artist}</u>
            </div>
            <div className="card-body">
            <ul className="list-group list-group-flush">
            <li className="list-group-item bg-dark text-light">{item.label}</li>
            
            <li className="list-group-item bg-dark text-light">{item.release_date}</li>
            
            <li className="list-group-item bg-dark text-light">{item.description}</li>
            
            </ul>
            </div>
     
          <div className="card-img-bottom">
          <Link to={"/items/"+item.id}><img src={item.image_url} width="300" height="300"  /></Link>
          </div>
          </div>
           
           <div className="card-footer text-center">
          <Link to={'/items/'+item.id} className="btn btn-warning w-100">Show More</Link>
        </div>
        </div>
        
      ))}

    </div>
    </div>
   
  )
}