export const initialState = {
basket : [],
user : null,
};

export const getBasketTotal = (basket) => 
basket?.reduce((amount , item) => item.price + amount , 0);


function reducer(state , action) {
//console.log(action);
switch(action.type) {
  case 'SET_USER':
    // to update when user is logged in or out
    return {
      ...state , 
      user: action.user
    };
    break;
    

  case 'ADD_TO_BASKET':
    // Logic for Adding items to basket
  return {
    ...state,
    basket : [...state.basket , action.item]
  };
  break;


  case 'REMOVE_FROM_BASKET':
// Logic for removing items from basket

// We cloned the basket
  let newBasket = [...state.basket];

// We check to see if product exists... 
const index = state.basket.findIndex((basketItem) =>
basketItem.id === action.id);

if(index >= 0) {
// If items exist in basket remove it..
  newBasket.splice(index, 1);
}
else {
  console.warn(
    `Cant remove product (id: ${action.id}) as its not in basket!`
  )
}
 return {
    ...state , basket : newBasket };
  break;


default:
  return state;

 }
}



export default reducer;
