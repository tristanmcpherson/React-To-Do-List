import React from "react";

const List = props => {
  return (
    <ul className="list-container list-group">
      {props.items.map((item, index) => (
        <div
          className="list-item list-group-item list-group-item-action"
          onClick={() => props.deleteItems(index)}
          key={index}
        >
          <li>{item}</li>
        </div>
      ))}
    </ul>
  );
};

export default List;
