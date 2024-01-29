import React from "react";
import { SecondChild } from "./SecondChild";

export const Look = (props) => {
  const blood = "O+";
  const Book = "Little story";

  return (
    <div>
      <h1>contact : {props.contact.contact}</h1>
      <button onClick={() => props.contact.blood(blood)}>View</button>
      <SecondChild book={Book} />
    </div>
  );
};
