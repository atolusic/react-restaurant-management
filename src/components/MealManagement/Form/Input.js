import React from "react";

const Input = props => {
  const {
    label,
    name,
    value,
    type,
    onInputChange,
    inputType,
    classes,
    additionStyle,
    icon,
    editMeal
  } = props;

  let input = null;

  switch (inputType) {
    case "input":
      input = (
        <div className={`input-field ${classes}`} style={additionStyle}>
          {icon && <i className="material-icons prefix">attach_money</i>}
          <input
            className="validate"
            type={type}
            name={name}
            value={value}
            onChange={onInputChange}
            required
          />
          <label className={editMeal ? "active" : null} htmlFor={name}>
            {label}
          </label>
        </div>
      );
      return <div className="row">{input}</div>;
    case "textarea":
      input = (
        <div className={`input-field ${classes}`} style={additionStyle}>
          <textarea
            id="textarea2"
            className="materialize-textarea"
            name={name}
            value={value}
            onChange={onInputChange}
            style={{ height: "5rem", padding: ".5rem 0" }}
          />
          <label className={editMeal ? "active" : null} htmlFor={name}>
            {label}
          </label>
        </div>
      );
      return <div className="row">{input}</div>;
    default:
      return input;
  }
};

export default Input;
