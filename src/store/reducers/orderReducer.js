import { ADD_TO_ORDERS } from "../actions/types";

const initialState = {
  orders: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_ORDERS:
      let orders = [...state.orders];
      if (orders.length > 0) {
        let addToState = true;
        orders.forEach(order => {
          if (order.id === action.payload.id) {
            // ako je taj item vec dodan u state, samo mu povecaj count
            order.count++;
            // isto tako povecaj cijenu
            order.price =
              parseFloat(order.price) + parseFloat(action.payload.price);
            // dva stanja, ako je true onda prolazi prvi if, tj. dodaje se novi item u state
            // jer nije isti id
            // u suprotnom u stateu ostaju stari i samo se poveco count
            addToState = false;
          }
        });
        if (addToState)
          return {
            orders: [...orders, action.payload]
          };
        else
          return {
            orders: [...orders]
          };
      } else {
        return {
          ...state,
          orders: [...state.orders, action.payload]
        };
      }
    default:
      return state;
  }
};
