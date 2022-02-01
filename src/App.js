import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

/*
const dummyPosts = [
  {
    title: "Cím1",
    postText: "Szöveg1",
    date: "2022.02.01"
  },
  {
    title: "Cím2",
    postText: "Szöveg2",
    date: "2022.02.02"
  },
  {
    title: "Cím3",
    postText: "Szöveg3",
    date: "2022.02.03"
  },
  {
    title: "Cím4",
    postText: "Szöveg4",
    date: "2022.02.04"
  }
];
*/

function App() {

  const [posts, setPosts] = useState([]);

  function add() {
    setPosts([...posts,{
      title: "Cím5", 
      postText:"Szöveg5",
      date:"2022.02.05"
    }])
  }

  return (
    <div className="App">
      <h1>Blog Posts</h1>

      <div>
        <input type="text" name="title" placeholder='title'/>
        <input type="text" name="post" placeholder='post'/>
        <button onClick={() => {add()}}>New Post</button>
        <button onClick={() => {setPosts([])}}>Delete All</button>
      </div>

      {posts.map((item) => {
        return (
          <div key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.postText}</p>
            <p>{item.date}</p>
            <input type="text" placeholder='New post title'/>
            <input type="text" placeholder='New post text'/>
            <button>Update</button>
            <button>Delete</button>
          </div>
        )
      })}
    </div>
  );
}

export default App;
