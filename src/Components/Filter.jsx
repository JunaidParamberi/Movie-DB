import React from "react";
import ArriwDown from "../assets/Vector 1.svg";

function Filter() {
  return (
    <div className="filter">
      <h1>My Collection</h1>

      <div className="buttons">
        <div>
          <p>Hollywood Movies</p>
          <img src={ArriwDown} alt="" />
        </div>
        <button>Add New Movies </button>
      </div>
    </div>
  );
}

export default Filter;
