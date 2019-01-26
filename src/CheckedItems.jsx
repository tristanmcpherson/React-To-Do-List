import React from "react";

const CheckedItems = props => {
  return (
    <div className="checked-items">
      <hr />
      <h1>Finished Items</h1>
      <ul className="checked-items-list">
        {props.checkedItems.map((item, index) => (
          <div
            onClick={() => props.deleteForGood(index)}
            className="checked-item list-item list-group-item list-group-item-action"
            key={index}
          >
            <li>{item}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CheckedItems;
