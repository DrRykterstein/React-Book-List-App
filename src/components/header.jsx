import React from "react";

const Header = ({ getBooks }) => {
  // Header Section
  return (
    <React.Fragment>
      <h1>Game of Thrones Books</h1>
      <h2>Displays a list of books from an API</h2>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={() => getBooks()}>
          Fetch Data
        </button>
        <br />
      </div>
    </React.Fragment>
  );
};

export default Header;
