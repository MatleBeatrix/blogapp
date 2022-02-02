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

function Post({item, remove, update}){
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  return (
    <div key={item.id}>
      <h2>{item.title}</h2>
      <p>{item.postText}</p>
      <p>{item.date.toLocaleString()}</p>
      <input onChange={(event)=> setNewTitle(event.target.value)} value={newTitle} type="text" placeholder='New post title'/>
      <input onChange={(event)=> setNewContent(event.target.value)} value={newContent} type="text" placeholder='New post text'/>
      <button onClick={() => update(item.id, newTitle, newContent )}>Update</button>
      <button onClick={() => remove(item.id)}>Delete</button>
    </div>
  )
  
}

function App() {

  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  //const [newTitle, setNewTitle] = useState("");
  //const [newContent, setNewContent] = useState("");

  function add() {
    setPosts([...posts,{
      title: title, 
      postText: content,
      date: new Date(),
      id: Math.random()
    }]);
    setTitle("");
    setContent("");
  }

  function remove(id){
    //HOSSZABB MEGOLDÁS
    /*
    const newLists = [];
    for (const p of posts) {
      if (p.id !== id){
        newLists.push(p);
      }
    }
    setPosts(newLists);
    */
    
    //RÖVIDEBB MEGOLDÁS
    setPosts(posts.filter((p) => p.id !== id));
  }

  function update(id, newTitle, newContent){
    const newLists = [];
    for (let p of posts) {
      if (p.id === id){
        p.title = newTitle;
        p.postText = newContent;
      }
      newLists.push(p);
    }


    setPosts(newLists);

  }

  return (
    <div className="App">
      <h1>Blog Posts</h1>

      <div>
        <input onChange={(event)=> setTitle(event.target.value)} value={title} type="text" name="title" placeholder='title'/>
        <input onChange={(event)=> setContent(event.target.value)} value={content} type="text" name="post" placeholder='post'/>
        <button onClick={() => {add()}}>New Post</button>
        <button onClick={() => {setPosts([])}}>Delete All</button>
      </div>

      {posts.map((item) => {
        return (
          /*
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.postText}</p>
            <p>{item.date.toLocaleString()}</p>
            <input onChange={(event)=> setNewTitle(event.target.value)} value={newTitle} type="text" placeholder='New post title'/>
            <input onChange={(event)=> setNewContent(event.target.value)} value={newContent} type="text" placeholder='New post text'/>
            <button onClick={() => update(item.id)}>Update</button>
            <button onClick={() => remove(item.id)}>Delete</button>
          </div>
          */
         <Post key={item.id} item={item} remove={remove} update={update} />
        )
      })}
    </div>
  );
}

export default App;
