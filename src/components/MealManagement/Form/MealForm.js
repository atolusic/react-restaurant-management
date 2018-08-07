import React, { Component } from "react";

import Input from "./Input";

export class MealForm extends Component {
  state = {
    name: "",
    price: "",
    desc: "",
    specialOffer: false,
    discount: false
  };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onCheckChange = e =>
    this.setState({ [e.target.name]: !this.state[e.target.name] });

  render() {
    const { name, desc, price, check, specialOffer, discount } = this.state;
    return (
      <form>
        <Input
          name="name"
          type="text"
          label="Ime"
          value={name}
          onInputChange={this.onInputChange}
          inputType="input"
          classes="col m12"
        />
        <Input
          inputType="textarea"
          label="Opis"
          onInputChange={this.onInputChange}
          value={desc}
          name="desc"
          classes="col m12"
        />
        <div className="row">
          <div className="col m6">
            <Input
              inputType="input"
              type="text"
              label="Cijena"
              onInputChange={this.onInputChange}
              value={price}
              name="price"
              classes="col m12"
              icon
            />
          </div>
          <div className="col m6">
            <label>
              <input
                type="checkbox"
                name="discount"
                checked={discount}
                onChange={this.onCheckChange}
              />
              <span>Akcijska cijena</span>
            </label>
            <label>
              <input
                type="checkbox"
                name="specialOffer"
                checked={specialOffer}
                onChange={this.onCheckChange}
              />
              <span>Posebna ponuda</span>
            </label>
          </div>
          <div className="col m12">
            <button
              style={{ width: "100%" }}
              className="btn-large waves-effect waves-light orange darken-2"
              type="submit"
            >
              <i className="material-icons right">send</i> Dodaj
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default MealForm;
