import React from "react";

const List = props => {
  return (
    <ul className="list-container">
      {props.items.map((item, index) => (
        <div onClick={() => props.handleArchiveItems(index)} className="" key={index}>
          <li className="list-item list-group-item list-group-item-action li">
            {item}
          </li>
          <hr className="item-line" />
        </div>
      ))}
    </ul>
  );
};

export default List;
