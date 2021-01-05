import React, { useState } from "react";
import Header from "./components/header.jsx";
import Books from "./components/books.jsx";
import fetchData from "./api.js";

function App() {
  const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";
  const [books, setBooks] = useState(""); // initiliase state variable for data

  // function that stores the API data within our state variable
  const getBooks = async () => {
    const bookData = await fetchData(apiURL); // await the fetching of our data
    setBooks(bookData); // update our state
  };

  return (
    <div className="App">
      <Header getBooks={getBooks} />
      <Books books={books} />
    </div>
  );
}

export default App;
