import React from "react";

import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = props => {
  const { ings, disableBurger } = props;
  const transformedIngs = Object.keys(ings).map(ing => {
    return [...Array(ings[ing])].map((_, i) => {
      // bitan je length, nebitno s cime je popunjen array
      return <BurgerIngredient key={ing + i} type={ing} />;
    });
  });

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {!disableBurger && (
        <button className={classes.DisabledNotation}>DISABLED</button>
      )}
      {transformedIngs}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
