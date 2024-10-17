import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreatePostPage from './pages/CreatePostPage';
import SinglePostPage from './pages/SinglePostPage';

const App = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (title, content) => {
    const newPost = { id: posts.length + 1, title, content };
    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage posts={posts} />} />
        <Route path="/create" element={<CreatePostPage addPost={addPost} />} />
        <Route path="/post/:id" element={<SinglePostPage posts={posts} />} />
      </Routes>
    </div>
  );
};

export default App;











































// import React,{useState,useEffect} from 'react'
// import Headers from './Headers';

// function Counter(){
//   const [count,setCounter] = useState(0);
//   useEffect(()=>{
//      alert("reload")
//   });
//  const up=(prevCount)=>{
//     return prevCount+1;
//  }
//  const down=(prevCount)=>{
//   return prevCount-1;
//  }
//   return(
//     <div className="Counter">
//       <button onClick={()=>{setCounter(up)}}>+</button>
//       <h1>{count}</h1>
//       <button onClick={()=>{setCounter(down)}}>-</button>
//     </div>
//   )

// }

// function App() {
//   const[time,setTime]=useState(0);
//   return (

//     <>
//     <div>
//       <Counter/>
//     </div>
    

//     </>
//   )
// }

// export default App;







































// import React,{useState} from"react";

// function App({name,course}) {
//   const[newItem, setNewItem]=useState("");
//   // const eventHandler=(event)=>{
//   //   setNewItem(event.target.value);  
//   // }
//   const handleSubmit=(e)=>{
//     e.preventDefault();
    

//   }

//   return (
//     <>
//     <h1>{name} {course}</h1>
//       <form className="new-form" onSubmit={handleSubmit}>
//         <div className="form-row">
//           <label htmlFor="item">New item</label>
//           <input id="item" type="text" onChange={e=>setNewItem(e.target.value)} value={newItem}/>
//         </div>
//         <button className="btn">Add</button>
//       </form>

//       <h1 className="header">ToDoList</h1>

//       <ul className="list">
//         <li>
//           <label>
//             <input type="checkbox"/> Item1
//           </label>
//           <button className="btn-danger">Delete</button>
//         </li>
//         <li>
//           <label>
//             <input type="checkbox" /> Item2
//           </label>
//           <button className="btn-danger">Delete</button>
//         </li>
//       </ul>
//     </>
//   );
// }


// export default App;






// import { useState } from "react";

// function App() {
//   const [newItem, setNewItem] = useState("");
//   const [items, setItems] = useState([]); // State to hold the list of items

//   const eventHandler = (event) => {
//     setNewItem(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault(); // Prevent the default form submission
//     if (newItem.trim()) {
//       setItems([...items, newItem]); // Add the new item to the list
//       setNewItem(""); // Clear the input
//     }
//   };

//   const handleDelete = (index) => {
//     const updatedItems = items.filter((_, i) => i !== index); // Remove the item at the specified index
//     setItems(updatedItems);
//   };

//   return (
//     <>
//       <form className="new-form" onSubmit={handleSubmit}>
//         <div className="form-row">
//           <label htmlFor="item">New item</label>
//           <input
//             id="item"
//             type="text"
//             onChange={eventHandler}
//             value={newItem}
//           />
//         </div>
//         <button className="btn">Add</button>
//       </form>

//       <h1 className="header">ToDo List</h1>

//       <ul className="list">
//         {items.map((item, index) => (
//           <li key={index}>
//             <label>
//               <input type="checkbox" /> {item}
//             </label>
//             <button className="btn-danger" onClick={() => handleDelete(index)}>
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default App;