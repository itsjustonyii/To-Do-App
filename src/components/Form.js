import React, {useState} from "react";


const Form= () => {

  const [newItem, setNewItem] =useState("");
  const [items, setItems] = useState([]);
  
  

  function addItem() {
    
    if (!newItem) {
      alert("Please enter a task!");
      return;
    }

  

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };
    setItems(oldlist => [...oldlist, item]);
    setNewItem("")
  }

  function deleteItem(id) {
    const newArray = items.filter(item => item.id !==id);
    setItems(newArray);
  }
  

  return (
    <div>
      <input type="text" placeholder="What would you love to do?" 
      value={newItem}
      className='task-input'
     onChange={e => setNewItem(e.target.value)}
      />
      <button 
      className="button-add"
      onClick={() => addItem()}>
        Add</button>
        <ul className="list">
      {items.map(item => {
        return(
          <li className="list-item"
          key={item.id}>{item.value} 
         <button className="button-delete"
          onClick={() => deleteItem(item.id)}>del</button>
          <input type="checkbox" className="button-complete"
          />
          </li>
        )
      })}
    </ul>
    </div>
  )
};

export default Form;