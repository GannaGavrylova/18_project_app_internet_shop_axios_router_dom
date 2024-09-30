import { ADD_ITEM, REMOVE_ITEM } from "../actions";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
};

const productReducer = (state = initialState, action) => {
  console.log("Action received:", action);
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, cartItems: [...state.cartItems, action.payload] }; // добавляем товар в массив

    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ), // фильтруем и удаляем товар по id
      };
    default:
      return state;
  }
};

export default productReducer;

// import { ADD_ITEM, REMOVE_ITEM } from "../actions";
// // const initialState = {
// //   cartItems: [],
// // };

// const initialState = {
//   cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
// };
// const productReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_ITEM:
//       // Проверяем, есть ли товар в корзине перед добавлением
//       if (state.cartItems.some((item) => item.id === action.payload.id)) {
//         return state; // Не добавляем товар повторно
//       }

//       const updatedCartItems = [...state.cartItems, action.payload];
//       localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
//       return { ...state, cartItems: updatedCartItems };

//     case REMOVE_ITEM:
//       const filteredCartItems = state.cartItems.filter(
//         (item) => item.id !== action.payload.id
//       );
//       localStorage.setItem("cartItems", JSON.stringify(filteredCartItems));
//       return { ...state, cartItems: filteredCartItems };

//     default:
//       return state;
//   }
// };

// export default productReducer;
