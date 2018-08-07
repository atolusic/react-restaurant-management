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
    icon
  } = props;

  let input = null;

  switch (inputType) {
    case "input":
      input = (
        <div className={`input-field ${classes}`} style={additionStyle}>
          {icon && <i class="material-icons prefix">attach_money</i>}
          <input
            className="validate"
            type={type}
            name={name}
            value={value}
            onChange={onInputChange}
            required
          />
          <label htmlFor={name}>{label}</label>
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
          />
          <label htmlFor={name}>{label}</label>
        </div>
      );
      return <div className="row">{input}</div>;
    default:
      return input;
  }
};

export default Input;
