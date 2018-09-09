import { ADD_TO_ORDERS } from "./types";

export const addMealToOrders = data => {
  return {
    type: ADD_TO_ORDERS,
    payload: data
  };
};
