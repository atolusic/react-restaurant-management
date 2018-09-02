import React, { Component } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

class Combobox extends Component {
  render() {
    const { dpValue, onDpChangeHandler } = this.props;
    const dpOptions = ["Coke", "Pivo", "Palacinka", "Sok", "Donut"];
    return (
      <div>
        <Dropdown
          options={dpOptions}
          placeholder="Prilog posebne ponude"
          value={dpValue}
          onChange={onDpChangeHandler}
        />
      </div>
    );
  }
}

export default Combobox;
