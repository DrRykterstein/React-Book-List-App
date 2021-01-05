import React from "react";

const Books = ({ books }) => {
  // Display data from API
  return (
    <div className="books">
      {books !== "" &&
        books.map((book, idx) => {
          return (
            <React.Fragment key={idx}>
              <div className="book">
                <h3>{idx + 1}</h3>
                <h2>{book.name}</h2>
                <div className="details">
                  <p>
                    <span role="img" aria-label="face">
                      👨
                    </span>
                    : {book.authors}
                  </p>
                  <p>
                    <span role="img" aria-label="book">
                      📖
                    </span>
                    : {book.numberOfPages}
                  </p>
                  <p>
                    <span role="img" aria-label="house">
                      🏘️
                    </span>
                    : {book.country}
                  </p>
                  <p>
                    <span role="img" aria-label="clock">
                      ⏰
                    </span>
                    : {book.released}
                  </p>
                </div>
              </div>
            </React.Fragment>
          );
        })}
    </div>
  );
};

export default Books;
