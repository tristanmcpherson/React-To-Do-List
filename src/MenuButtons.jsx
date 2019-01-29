import React from "react";

const MenuButtons = props => {
  return (
    <div className="trash-div">
      <span onClick={props.deleteNote} className={props.className} />
    </div>
  );
};

export default MenuButtons;
