import { useState, useEffect } from "react";
import axios from "axios";

export function ListAdd(props) {


  const user_id = localStorage.getItem("user_id");
  const [lists, setLists] = useState([]);

  const handleUserInfo = () => {
    axios.get("http://localhost:3000/users/" + user_id + ".json").then((response) => {
      console.log(response.data);
      setLists(response.data.lists);
    });
  };

  const handleListAdd = (params) => {
    axios.post("http://localhost:3000/list_items.json", params).then((response) => {
      console.log(response.data);
      console.log(params)
    }).then(res => { console.log(res.status) } ).catch((error) => {
      console.log(error);
  });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Add to list");
    const params = new FormData(event.target);
    params.append('item_id', props.item.id);
    handleListAdd(params);
  };

  useEffect(handleUserInfo, [])
  return(
    <div>
    <h3>Your Lists</h3>
    <form onSubmit={handleSubmit}>
      <label>
        <select name="list_id">
    {lists?.map((list, idx) =>
      (   


          // <div key={idx} >
          <option key={idx} value={list.id}>{list.list_title}</option>
          // {/* // {list.id},{list.list_title}: <input type="text" name="list_id" /> */}
          // </div>
      )
      )}
      </select>
      </label>
      <input type="submit" value="Create" />
      </form>

{/* 
       <label>
          Pick your favorite flavor:
          <select value={null} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        </form> */}

    </div>
    
  )

}