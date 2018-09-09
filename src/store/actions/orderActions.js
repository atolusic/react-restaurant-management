import { ADD_TO_ORDERS, DELETE_FROM_ORDERS } from "./types";

export const addMealToOrders = data => ({
  type: ADD_TO_ORDERS,
  payload: data
});

export const deleteFromOrders = id => ({
  type: DELETE_FROM_ORDERS,
  payload: id
});
