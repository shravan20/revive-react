import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);

    let items = [];
    if (searchTerm) {
      items = list.filter(
        (item) =>
          searchTerm &&
          (item.author === searchTerm || item.title === searchTerm)
      );
    }

    items = list.map((item) => (
      <div key={item.objectID}>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
      </div>
    ));
    console.log(items);
    setListItems(items);
  };

  const getTitle = (title) => {
    return title;
  };

  const list = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];
  const [searchTerm, setSearchTerm] = React.useState("");
  const [listItems, setListItems] = React.useState(list);

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
    let items = listItems;
    if (searchTerm) {
      items = listItems.filter(
        (item) => searchTerm && item.author === searchTerm
      );
    }

    items = items.map((item) => (
      <div key={item.objectID}>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
      </div>
    ));
    return items;
  }
}

export default App;
