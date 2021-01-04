import React, { useState } from "react";
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
    // header section
    <div className="App">
      <h1>Game of Thrones Books</h1>
      <h2>Displays a list of books from an API</h2>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={() => getBooks()}>
          Fetch Data
        </button>
        <br />
      </div>

      {/* Display data from API */}
      <div className="books">
        {books !== "" &&
          books.map((book, idx) => {
            return (
              <React.Fragment key={idx}>
                <div className="book">
                  <h3>{idx + 1}</h3>
                  <h2>{book.name}</h2>
                  <div className="details">
                    <p>👨: {book.authors}</p>
                    <p>📖: {book.numberOfPages}</p>
                    <p>🏘️: {book.country}</p>
                    <p>⏰: {book.released}</p>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
      </div>
    </div>
  );
}

export default App;
