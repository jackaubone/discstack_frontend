import axios from "axios";

export function ListNew(){

  const handleNewList = (params) => {
  
    axios.post("http://localhost:3000/lists.json", params).then((response) => {
      const newList = response.data;
      console.log("Created List", newList);
      window.location.href = "/profile";
  
  })
  };
  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Create List");
    const params = new FormData(event.target);
    handleNewList(params);
  };
  

  return(
    <div id="list-new">
      <h1> New List</h1>
      <form onSubmit={handleSubmit}>
        <div> 
          Name: <input type="text" name="list_title" />
        </div>
        <div>
          Description: <input type="text" name="list_desc" />
        </div>
        <div>
          Image URL: <input type="text" name="list_image" defaultValue={"https://pwaimg.listenlive.co/TRITONRADIOMUSIC_779321_config_default_cover_image_1430930895.png"} />
        </div>
        <input type="submit" value="Create" />
      </form>
    </div>
  )
}