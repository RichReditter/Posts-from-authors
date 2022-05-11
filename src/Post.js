import React, { useEffect, useState } from "react";
import "./Post.css";

function Post(props) {
  const [comments, setComments] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [loadings, setLoadings] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const data = await response.json();
      setComments(data);
      setLoadings(false);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const data = await response.json();
      setPhotos(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setAuthors(data);
      setLoadings(false);
    }
    fetchData();
  }, []);
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return (
    <div>
      {loadings ? (
        <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      ) : (
        <article>
          <h1>{props.post.title}</h1>

          {photos.map((photo) =>
            photo.id === props.post.id ? (
              <div>
                <img src={photo.url} />
              </div>
            ) : (
              <div></div>
            )
          )}
          <p className="body">{props.post.body}</p>
          <h2>Comment:</h2>
          {authors.map((author) =>
            author.id === props.post.userId ? (
              <div>
                {author.name}
                <br></br>
                <p>
                  {author.username}
                  <br></br>
                  {author.email}
                </p>
              </div>
            ) : (
              <div></div>
            )
          )}
          {comments.map((comment) =>
            comment.id === props.post.id ? (
              <div>
                <h3>{comment.name}</h3>
                {comment.body}
              </div>
            ) : (
              <div></div>
            )
          )}
        </article>
      )}
    </div>
  );
}

export default Post;
