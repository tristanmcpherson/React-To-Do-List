import React from "react";

const List = props => {
  return (
    <ul className="list-container">
      {props.items.map((item, index) => (
        <div
          onClick={() => props.deleteItems(index)}
          className="list-item list-group-item list-group-item-action"
          key={index}
        >
          <li className="li">{item}</li>
          <hr />
        </div>
      ))}
    </ul>
  );
};

export default List;
