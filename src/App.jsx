import React, { useState } from "react";
import "./App.css";

function App() {
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };

  const getTitle = (title) => {
    return title;
  };

  let list = [
    {
      title: "Javascript",
      url: "https://javascript.com/",
      author: "Shravan",
      num_comments: 3,
      points: 14,
      objectID: 3
    },
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1
    }
  ];

  const [searchTerm, setSearchTerm] = React.useState("");

  list = list.filter((item) =>
    item.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <p>Hello, {getTitle("Shravan")}!</p>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
      <br />
      <br />
      <hr />
      <br />
      <br />
      {getItems()}
    </>
  );

  function getItems() {
    return list.map((item) => (
      <div key={item.objectID}>
        <span>
          <a href={item.url}>{item.title}</a> |
        </span>
        <span> {item.author}</span> | <span>{item.num_comments}</span> |{" "}
        <span> {item.points}</span>
      </div>
    ));
  }
}

export default App;
