import React from "react";

const CheckedItems = props => {
  return (
    <div className="checked-items">
      <p className="finished-text">
        <strong>Finished Tasks</strong>
      </p>
      <hr className="item-line" />
      <ul className="checked-items-list">
        {props.checkedItems.map((item, index) => (
          <div onClick={() => props.uncheck(index)} className="" key={index}>
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

export default CheckedItems;
