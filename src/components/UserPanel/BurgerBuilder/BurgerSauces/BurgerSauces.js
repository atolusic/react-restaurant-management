import React from "react";

import classes from "./BurgerSauces.css";

class BurgerSauces extends React.Component {
  state = {
    ketchup: false,
    mayo: false,
    mustard: false
  };

  // name se mora pohraniti u var jer je setState async
  // ako je neki od sastojaka true pozvat ce se fja s parametrom koja
  // updatea cijenu
  onCheckboxChange = e => {
    const name = e.target.name;
    this.setState(
      prevState => ({ [name]: !prevState[name] }),
      () => {
        if (this.state[name]) {
          this.props.sauceUpdatePrice(true, { ...this.state });
        } else {
          this.props.sauceUpdatePrice(false, { ...this.state });
        }
      }
    );
  };

  render() {
    const { ketchup, mayo, mustard } = this.state;
    return (
      <div className={classes.BurgerSauces}>
        <p>Umaci: </p>
        <p>
          <label>
            <input
              name="ketchup"
              onChange={e => this.onCheckboxChange(e)}
              checked={ketchup}
              type="checkbox"
            />
            <span>Ketchup</span>
          </label>
        </p>
        <p>
          <label>
            <input
              onChange={e => this.onCheckboxChange(e)}
              name="mayo"
              checked={mayo}
              type="checkbox"
            />
            <span>Majoneza</span>
          </label>
        </p>
        <p>
          <label>
            <input
              onChange={e => this.onCheckboxChange(e)}
              name="mustard"
              checked={mustard}
              type="checkbox"
            />
            <span>Senf</span>
          </label>
        </p>
      </div>
    );
  }
}

export default BurgerSauces;
