import React from "react";

const ArchivedItems = props => {
  return (
    <div className="checked-items">
      <p className="finished-text">
        <strong>Finished Tasks</strong>
      </p>
      <hr className="item-line" />
      <ul className="checked-items-list">
        {props.archivedItems.map((item, index) => (
          <div onClick={() => props.handleDeleteItem(index)} className="" key={index}>
            <li className="checked-item list-item list-group-item list-group-item-action li">
              {item}
            </li>
            <hr className="item-line" />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ArchivedItems;
