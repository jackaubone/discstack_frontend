import axios from "axios";

export function ListEdit(props){

  const handleEditSubmit = (event) => {
    event.preventDefault()
    const params = new FormData(event.target);
    console.log(props.list)
    props.onUpdateList(props.list.id, params);

  }


  const handleClick = () => {
    props.onDestroyList(props.list);
  };
  

  return(
    <div id="list-edit">
      <h1> New List</h1>
      <form onSubmit={handleEditSubmit}>
        <div> 
          Name: <input type="text" name="list_title" defaultValue={props.list.list_title} />
        </div>
        <div>
          Description: <input type="text" name="list_desc" defaultValue={props.list.list_desc}/>
        </div>
        <div>
          Image URL: <input type="text" name="list_image" defaultValue={"https://pwaimg.listenlive.co/TRITONRADIOMUSIC_779321_config_default_cover_image_1430930895.png"} />
        </div>
        <button type="submit">Update List</button>
      </form>
      <button onClick = {handleClick}>Delete List</button>
    </div>
  )
}