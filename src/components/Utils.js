import React, { useState, useEffect } from "react";

const Utils = () => {
  // useState：const [状態, 状態更新関数] = useState(初期値);
  const [posts, setPosts] = useState([]);

  // useEffect：コンポーネントのライフサイクル（componentDidMount, componentDidUpdate, componentWillUnmount）のタイミングで実行される
  /*
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);
  */

  /*
  function getData() {
    fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }
  */

  var getData = (url) => {
    fetch(url, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  };

  return (
    <div>
      <button
        onClick={() => getData("https://jsonplaceholder.typicode.com/posts")}
      >
        API
      </button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Utils;
