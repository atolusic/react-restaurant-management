import React from "react";

import classes from "./BurgerIngredient.css";

const BurgerIngredient = props => {
  let ingredient = null;
  switch (props.type) {
    case "bread-bottom":
      ingredient = <div className={classes.BreadBottom} />;
      break;
    case "bread-top":
      ingredient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1} />
          <div className={classes.Seeds2} />
        </div>
      );
      break;
    case "pljeskavica":
      ingredient = <div className={classes.Meat} />;
      break;
    case "sir":
      ingredient = <div className={classes.Cheese} />;
      break;
    case "slanina":
      ingredient = <div className={classes.Bacon} />;
      break;
    case "salata":
      ingredient = <div className={classes.Salad} />;
      break;
    default:
      ingredient = null;
  }

  return ingredient;
};

export default BurgerIngredient;
