import React from "react";

const MenuButtons = (props, { index }) => {
  return (
    <div className="trash-div">
      <span
        onClick={() => props.deleteNote(index)}
        className="trash-icon far fa-trash-alt"
      />
    </div>
  );
};

export default MenuButtons;
