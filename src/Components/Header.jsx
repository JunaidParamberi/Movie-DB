import React from "react";
import searchIcon from "../assets/Search.svg";

const Header = ({ searchTerm = "", setSearchTerm }) => {
  const searchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="navbar">
      <div className="logo-and-input">
        <h1>Movies</h1>
        <form onSubmit={handleSearch} action="">
          <img src={searchIcon} alt="search icon" />
          <input
            type="search"
            placeholder="Search for movies and more..."
            value={searchTerm}
            onChange={searchChange}
            name="search"
          />
          <button>Search</button>
        </form>
      </div>

      <div className="nav-links">
        <ul>
          <li>Login</li>
          <li>Register</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
