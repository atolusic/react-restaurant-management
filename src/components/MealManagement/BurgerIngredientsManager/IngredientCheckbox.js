import React from "react";

const IngredientCheckbox = props => {
  const { name, allowBB, onCheckboxChange, val } = props;
  return (
    <label
      style={{
        display: "flex",
        justifyContent: "space-between",
        fontFamily: "Haymaker",
        color: "#333",
        fontSize: ".9rem"
      }}
    >
      <p>{name}</p>
      <input
        disabled={!allowBB}
        type="checkbox"
        className="filled-in"
        name={name}
        onChange={onCheckboxChange}
        checked={val}
      />
      <span />
    </label>
  );
};

export default IngredientCheckbox;
