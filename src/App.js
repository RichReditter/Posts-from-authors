import Post from './Post.js'
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json()
      setItems(data)
    }
    fetchData();
    console.log(items)
  }, [])

  
  return (
    <React.Fragment>
      {items.map( post => <Post key={post.id} post={post}/>)}
    </React.Fragment>
  );
}

export default App;
