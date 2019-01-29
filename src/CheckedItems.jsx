import React from "react";

const CheckedItems = props => {
  return (
    <div className="checked-items">
      <p>
        <strong>Finished Tasks</strong>
      </p>
      <hr />
      <ul className="checked-items-list">
        {props.checkedItems.map((item, index) => (
          <div
            onClick={() => props.uncheck(index)}
            className="checked-item list-item list-group-item list-group-item-action"
            key={index}
          >
            <li className="li">{item}</li>
            <hr />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CheckedItems;
