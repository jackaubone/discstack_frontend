import axios from "axios";
import { useState, useEffect } from "react";
import { ItemsIndex } from "./ItemsIndex";

export function Home() {

  const [items, setItems] = useState([]);
  // const[isItemsShowVisible, setIsItemsShowVisible] = useState(false);
  // const[currentItem, setCurrentItem] = useState({});

  const handleIndexItems = () => {
    axios.get("http://localhost:3000/items.json").then((response) => {
      console.log(response.data);
      setItems(response.data);
    });
  };


  useEffect(handleIndexItems, []);
  
  return (
    <div>
      <h1>Welcome to React!</h1>
      <ItemsIndex items={items} />
    </div>
  );
}